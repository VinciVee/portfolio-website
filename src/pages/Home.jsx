import { Link } from 'react-router'
import VeeButton from '../components/common/VeeButton'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'


const Home = () => {
  return (
    <>
      <section id="about" className="mb-12">
        <About />
      </section>

      <section id="experience" className="mb-12">
        <Experience />
      </section>

      <section id="projects" className="mb-12">
        <Projects />
      </section>
    </>
  )
}

export default Home
