import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar,NavbarBrand,Collapse,Nav,NavbarToggler,NavItem } from 'reactstrap'

function NabigationComponent() {
  const [isNavOpen,setisNavOpen]=useState(false);
  const navtoggle =()=>{
    setisNavOpen(!isNavOpen);
  }
  return (
    <div>
    <Navbar className="my-2" color="dark" dark expand="sm">
        <NavbarToggler onClick={navtoggle} />
        <NavbarBrand href="/">
            Restaurant
        </NavbarBrand>
        <Collapse isOpen={isNavOpen}  navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className='nav-link'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/Menu" className='nav-link'>Menu</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className='nav-link'>About</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className='nav-link'>Contuct</Link>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>

    </div>
  )
}

export default NabigationComponent