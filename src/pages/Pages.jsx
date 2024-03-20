import Home from './Home';
import Easy from '../components/Easy';
import Medium from '../components/Medium';
import Hard from '../components/Hard';
import { Route, Routes } from 'react-router-dom';

function Pages() {
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