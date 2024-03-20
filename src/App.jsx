import Pages from './pages/Pages'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiAbstract050 } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiAbstract050 />
          <Logo to={'/'}>Home</Logo>
        </Nav>
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
  color: white;
  padding-left: 0.8rem;
  `;
  
  const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
    cursor: pointer;
    width: 2.5rem;
  }
`

export default App
