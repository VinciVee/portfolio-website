import { Link, NavLink } from 'react-router-dom';
// import { RiReactjsLine } from "react-icons/ri"

const Header = () => {

  return (
    <header className='w-full'>
      <div className='px-5 py-2 flex items-center justify-between mx-auto'>
        {/* Logo */}
        <Link
          to='/'
          className='text-xl'
        >
          Logo
        </Link>

        {/* Links */}
        <nav className='w-auto' aria-label='Main Navigation'>
          <ul className='flex justify-around space-x-6'>
            <li>
              <NavLink to='/about' className='text-xl'>About</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className='text-xl'>Projects</NavLink>
            </li>
            <li>
              <NavLink to='/resume' className='text-xl'>Resume</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
