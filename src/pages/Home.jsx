import { Link } from 'react-router'
import VeeButton from '../components/common/VeeButton'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'


const Home = () => {
  return (
    <main>
      <section id="about" className="mb-24">
        <About />
      </section>

      <section id="experience" className="mb-24">
        <Experience />
      </section>

      <section id="projects" className="mb-24">
        <Projects />
      </section>
    </main>
  )
}

export default Home
