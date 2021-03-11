import Link from 'next/link'
import {Navbar,Nav} from 'react-bootstrap'


const Navigation = ()=>{
    return (
      <>
        <Navbar bg="light" expand="lg">
          <div className="container">
          <Link href="/">
            <a className="navbar-brand" >React-Bootstrap</a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <li className="nav-item">
              <Link href="/">
                <a className="nav-link" >Home</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/About">
                <a className="nav-link" >About</a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href="/Services">
                <a className="nav-link" >Services</a>
              </Link>
              </li>
              
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    )
}
export default Navigation