import React from 'react'
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import logo from '../assets/moneymall-logo.png'

const Mainnav = () => {
    return (
        <>
  <Navbar className="navabar " sticky="top"collapseOnSelect expand="lg">
    <Navbar.Brand href="#home"><img
        src={logo}
        
        className="d-inline-block align-top"
        alt="Moneymall logo"
      /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      
      
      <NavDropdown  title="Credit cards" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Loans" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home"className="nav-link">Islamic</Nav.Link>
      <Nav.Link href="#features"className="nav-link">Tool</Nav.Link>
      <div><Nav.Link href="#pricing"className="nav-btn">Money Guides</Nav.Link></div>
      <div><Nav.Link href="#pricing"className="nav-btn">Log In</Nav.Link></div>
      
    </Nav>
    </Navbar.Collapse>
    
  </Navbar>
  
</>
    )
}

export default Mainnav
