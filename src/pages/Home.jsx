import { Link } from 'react-router'
import VeeButton from '../components/common/VeeButton'
import About from '../sections/About'
import Experience from '../sections/Experience'


const Home = () => {
  return (
    <>
      <section id="about" className="">
        <About />
      </section>

      <section id="experience" className="">
        <Experience />
      </section>
      {/* <div id="hero-section" className="mx-auto text-left">
        <h1>Welcome to React Base</h1>
        <p>Our first peer into the React ecosystem & first principles!</p>
        <Link to="/about" className="homeBtn">About Me</Link>
      </div> */}
    </>
  )
}

export default Home
