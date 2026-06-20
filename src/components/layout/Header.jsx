import { Link, NavLink } from 'react-router';
// import { RiReactjsLine } from "react-icons/ri"

const Header = () => {

  return (
    <header className='w-full'>
      <div className='w-layout px-0 py-2 flex items-center justify-between mx-auto'>
        {/* Logo */}
        <Link
          to='/'
          className='text-xl'
        >
          logo
        </Link>

        {/* Links */}
        <nav className='w-auto' aria-label='Main Navigation'>
          <ul className='flex justify-around space-x-6'>
            <li>
              <NavLink to='/about' className='text-xl'>about</NavLink>
            </li>
            <li>
              <NavLink to='/projects' className='text-xl'>projects</NavLink>
            </li>
            <li>
              <NavLink to='/resume' className='text-xl'>resume</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
