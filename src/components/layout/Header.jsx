// import { Link } from 'react-router-dom';
// import { RiReactjsLine } from "react-icons/ri"

import { Link } from "react-router-dom"
import { GiFoxTail } from "react-icons/gi"

const Header = () => {
  return (
    <nav className="text-indigo-300 bg-gray-900">
      <div className="flex flex-row flex-wrap items-center justify-between h-[3em] mx-[5vw]">
        {/* LEFT: BRAND CHILD */}
        <Link to="/">
          <GiFoxTail className="inline mr-2"/>
          <span>PortfolioHome</span>
        </Link>
        {/* RIGHT: NAVLINKS CHILD */}
        <div className="size-fit flex flex-row items-baseline gap-[4vw] flex-nowrap" >
          <div>
            <Link to="/About">About</Link>
          </div>
          <div>
            <Link to="/Contact">Contact</Link>
          </div>
          <div>
            <Link to="/Projects">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// const HeaderBootstrap = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {/* 
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             */}
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

export default Header
