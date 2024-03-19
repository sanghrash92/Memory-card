import Home from './Home';
import Easy from '../components/Easy';
import Medium from '../components/Medium';
import Hard from '../components/Hard';
import { Route, Routes } from 'react-router-dom';

function Pages() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 4000)
    //     }, [])

    // if(loading) {
    //     return (
    //         <div>
    //             <Loading />
    //         </div>
    //     )
    // }
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/easy/' element={<Easy />} />
        <Route path='/medium/' element={<Medium />} />
        <Route path='/hard/' element={<Hard />} />
    </Routes>
  )
}

export default Pages