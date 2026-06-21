import { Link, NavLink } from 'react-router';
// import { RiReactjsLine } from "react-icons/ri"

const Header = () => {

  return (
    <header className='w-1/2'>
      <div className='px-2 flex flex-col items-start justify-start mx-auto'>
        {/* Logo */}
        <Link
          to='/'
          className='text-2xl font-semibold'
        >
          Vincent Veerapen
        </Link>

        {/* Links */}
        <nav className='w-auto' aria-label='Main Navigation'>
          <ul className='flex flex-col justify-around items-start space-x-6 py-6'>
            <li>
              <NavLink to='/about' className='text-lg'>about</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className='text-lg'>projects</NavLink>
            </li>
            <li>
              <NavLink to='/resume' className='text-lg'>resume</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
