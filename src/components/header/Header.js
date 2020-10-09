import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import About from '../About/About';
const Header = (props) => {
  

  return (
    <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src=""></img>
          </NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink ><Link to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to="/blog">blog</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to="/about">About me</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default Header;