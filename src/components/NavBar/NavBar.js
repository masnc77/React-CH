import React from "react";
import '../../App.css'
import logo from '../../img/logo.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, NavDropdown, Nav, Form, FormControl,} from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import { Contact } from "../Contact/Contact"
import { Link } from "react-router-dom";


export const NavBar = () => {

var log = logo
  

  return (
  
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand className="ml-sm-3" ><img style={{height:50, width:50}} src={log} ></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse  >
        <Nav className="mr-auto" >
          <Link to="/">Inicio</Link>
          
          <Link to="/">
          <NavDropdown title="Categorias" style={{display:"flex", }}>
          

            <NavDropdown.Item ><Link to="/consolas">Productos</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/contact">Contacto </Link></NavDropdown.Item>
            
          </NavDropdown>
          </Link>

            <CartWidget />
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar Producto" className="mr-sm-1" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    
  );
};
