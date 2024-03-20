import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
      }}>
        <h1>Memory game</h1>
        <h2>Pick all characters without repeating the same character.</h2>
        <br />
      </header>
    )
}

function Home() {

  return (
    <Wrapper>
        <Header />
        <h2>Please choose your Level</h2>
        <Button>
            <Link to={'/easy'}>
              <Btn mode='Easy' /> 
            </Link>
            <Link to={'/medium'}>
              <Btn mode='Medium' /> 
            </Link>
            <Link to={'/hard'}>
              <Btn mode='Hard' /> 
            </Link>
        </Button>
    </Wrapper>
  )
}

const Btn = ({mode}) => {

    return (
        <button className='button2'>{mode}</button>
    )
}

export default Home;

const Button = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
      font-weight: 600;
      color: white;
  }

`


