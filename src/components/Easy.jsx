import { useEffect, useState } from 'react';
import shuffleArray from './Shuffle';
import styled from 'styled-components';
import { Loading } from "../pages/loading"

function Easy() {
    const [comicsList, setComicsList] = useState([]);
    const [score, setScore] = useState(0);
    const [checkList, setCheckList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 4000)
    }, [])

    useEffect(() => {
      fetchRequest();
    }, []);
  
    const fetchRequest = async () => {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=comics&client_id=-RGBeeYDvRYQY2cWmfktUdb4TJigFFWyfZ2NGF-1CWQ&per_page=6`
      );
      const dataJ = await data.json();
      setComicsList(dataJ.results);
    };

    if(loading) {
      return (
        <div className='load'>
          <Loading />
        </div>
      )
    }

    const handleClick = (e) => {
      setCheckList(e.target.src);
      console.log(checkList)
      if(checkList.includes(e.target.src)) {
        setScore(0);
        setCheckList([]);
        shuffleArray(comicsList);
      } else {
        shuffleArray(comicsList);
        setScore(score + 1)
      }
    }

  return (
    <Wrapper>
      <h3>Score: {score}</h3>
      <ImageContainer>
          {comicsList.map((images) => {
            return (
              <ImageCard key={images.id}>
                  <img
                    onClick={handleClick}
                    src={images.urls.regular} 
                    alt={images.alt_description} />
              </ImageCard>
            )
          })}
      </ImageContainer>
    </Wrapper>
  )
}

export default Easy;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: white;
    font-weight: 600;
  }
`;

const ImageCard = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
  
  img {
    border-radius: 2rem;
    object-fit: cover;
    height: 300px;
    width: 350px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(2, 350px);
  gap: 20px;
`;