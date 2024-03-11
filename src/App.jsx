import './styles/App.css'
import './styles/welcome.css'
import { Welcome } from "./components/Welcome"
import { Images } from "./components/images"
import { Loading } from "./components/loading"
import { 
  useState,
  useEffect } from 'react'

  const Header = () => {
    return (
      <header>
        <h1>Memory game</h1>
        <h2>Pick all characters without repeating.</h2>
        <br />
      </header>
    )
  }

function App() {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequest = async (pageNum) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=${pageNum}&query=Golf&client_id=-RGBeeYDvRYQY2cWmfktUdb4TJigFFWyfZ2NGF-1CWQ`
    );
    const dataJ = await data.json();
    const result =  await dataJ.results;
    setImageList(result);
  };

  useEffect(() => {
    fetchRequest()
  }, [])


  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
  if(loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }
 

  return (
    <>
      <Header />
      <div className="difficulty-level">
        <Welcome fetchReq={fetchRequest} />
      </div>
      <br />
      <main>
        <Images list={imageList}/>
      </main>
    </>
  )
}

export default App
