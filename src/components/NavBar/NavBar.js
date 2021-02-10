import React, {useContext} from "react";
import '../../App.css'
import logo from '../../img/logo.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, NavDropdown, Nav, Form, FormControl,} from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Context } from '../CartContext/CartContext'

export const NavBar = () => {

var log = logo
  

  return (
  
    <Navbar bg="dark" variant="dark" expand="xl" id="nav" className="">
      <Navbar.Brand ><img style={{height:50, width:50}} src={log} className="justify-content-beetween"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Inicio</Link>
          
          <Link to="/">
          <NavDropdown title="Categorias" id="basic-nav-dropdown" >
          

            <NavDropdown.Item ><Link to="/">Productos</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to="/servicios">Servicios</Link></NavDropdown.Item>
            
          </NavDropdown>
          </Link>

            <CartWidget />
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    
  );
};
