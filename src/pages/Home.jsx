// import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="hero-section">
        <h1>Welcome to React Base</h1>
        <p>Our first peer into the React ecosystem & first principles!</p>
        <Link to="/about" className="homeBtn">About Me</Link>
      </div>
    </>
  )
}

export default Home
