import { Link, NavLink } from 'react-router';
// import { RiReactjsLine } from "react-icons/ri"

const Header = () => {

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between">
      <div>
        <h1 className="">
          <Link to="/">
            Vincent Veerapen
          </Link>
        </h1>
        <h2>Web Developer</h2>
        <p>Description: what do I do?</p>

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

      {/* social media links */}
      <ul>

      </ul>
    </header>
  )
}

export default Header
