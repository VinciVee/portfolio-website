import { Outlet } from 'react-router';

import Header from './Header'
import Footer from './Footer'
// import useTheme from '../../hooks/useTheme'; // Our Custom Hook

const Layout = () => {
  // const { theme } = useTheme();

  return (
    // <div className={"app " + theme}>
    <div className="max-w-fit flex flex-column justify-between">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
