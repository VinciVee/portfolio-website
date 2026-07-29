import { Link, NavLink } from 'react-router';
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between px-8 py-12 md:p-16 lg:py-24">
      <div className="mb-12">
        <h1 className="">
          <Link to="/">
            Vincent Veerapen
          </Link>
        </h1>
        <h2>Web Developer</h2>
        <p className="lg:max-w-sm w-text">
          Description: Lorem ipsum dolor sit amet consectetur. Porta vivamus blandit quisque amet rhoncus.
        </p>

        {/* Navigation */}
        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="flex flex-col justify-around items-start space-x-6 py-6">
            <li>
              <NavLink to="/about" className="text-lg">about</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="text-lg">projects</NavLink>
            </li>
            <li>
              <NavLink to="/resume" className="text-lg">resume</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <IconContext.Provider value={{ size: "1.5em" }}>
        {/* social media links */}
        <ul className="flex flex-row flex-nowrap gap-6 list-none">
          <li>
            <a href="https://www.linkedin.com/in/gvveerapen/"><FaLinkedin /></a>
          </li>
          <li>
            <a href="https://github.com/VinciVee"><FaGithub /></a>
          </li>
          <li>
            <a href="https://codepen.io/VinciVee"><FaCodepen /></a>
          </li>
        </ul>
      </IconContext.Provider>
    </header>
  )
}

export default Header
