import { useState, useEffect } from 'react';
import styled from 'styled-components';
import shuffleArray from './Shuffle';

function Hard() {
    const [oceanList, setOceanList] = useState([]);
    const [score, setScore] = useState(0);
    const [checkList, setCheckList] = useState([]);
    
    useEffect(() => {
        const fetchRequest = async () => {
          const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=ocean&client_id=-RGBeeYDvRYQY2cWmfktUdb4TJigFFWyfZ2NGF-1CWQ&per_page=18`
          );
          const dataJ = await data.json();
          setOceanList(dataJ.results);
          console.log(oceanList)
        };
        fetchRequest();
    }, [])
    
    const handleClick = (e) => {
        setCheckList(e.target.src);
        if(checkList.includes(e.target.src)) {
            setScore(0);
            setCheckList([]);
            shuffleArray(oceanList);
        } else {
            shuffleArray(oceanList);
            setScore(score + 1)
        }
    }


  return (
    <Wrapper>
        <h3>Score: {score}</h3>
        <ImageContainer>
            {oceanList.map((oceans) => {
                return (
                    <ImageCard key={oceans.id}>
                        <img 
                            src={oceans.urls.regular} 
                            alt={oceans.alt_description}
                            onClick={handleClick} />
                    </ImageCard>
                )
            })}
        </ImageContainer>
    </Wrapper>
  )
}

export default Hard;

const Wrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: white;
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
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 280px);
  grid-template-rows: repeat(2, 320px);
  gap: 20px;
`;