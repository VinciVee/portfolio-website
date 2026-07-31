import { Link, NavLink } from 'react-router';
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { IconContext } from "react-icons";
import Navbar from "../features/Navbar";

const Header = () => {

  return (
    <>
      <div className="mb-10">
        <h1 className="w-max">
          <Link to="/">
            Vincent Veerapen
          </Link>
        </h1>
        <h2>Web Developer</h2>
        <p className="max-w-[36ch] text-left">
          Description: Lorem ipsum dolor sit amet consectetur. Porta vivamus blandit quisque amet rhoncus.
        </p>

        {/* Navigation */}
        <Navbar />
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
    </>
  )
}

export default Header
