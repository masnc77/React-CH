import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Navbar,NavDropdown,Nav,Form,FormControl } from 'react-bootstrap'
import { CartWidget } from '../CartWidget/CartWidget'
import { BrowserRouter , Switch , Route, Link} from 'react-router-dom'

export const NavBar = () => {
    return(
    <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="#home">Sierra</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link"> <CartWidget/></Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">

         

          <NavDropdown.Item href="#action/3.1">Productos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Servicios</NavDropdown.Item>

          

          </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    )
} 