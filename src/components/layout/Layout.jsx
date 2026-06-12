import { Outlet } from 'react-router';

import Header from './Header'
import Footer from './Footer'
// import useTheme from '../../hooks/useTheme'; // Our Custom Hook

const Layout = () => {
  // const { theme } = useTheme();

  return (
    // <div className={"app " + theme}>
    <div className="min-h-screen flex flex-col justify-between text-center">
      <Header />
      <main className="w-layout my-4 mx-auto flex-grow py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
