import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
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
  DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" light expand="md">
        <NavbarBrand className="logo" href="/">LMAssamtea</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/"><NavLink className="itt" >Home</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="itt"  nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
               <Link to="/products">
               <DropdownItem className="itt" >
                  Products Details
                </DropdownItem>
               </Link>
               <Link to="/buyprod/00">
               <DropdownItem className="itt" >
                 Shop Cart 
                </DropdownItem></Link>  
                
                <DropdownItem divider />
                <DropdownItem className="itt" >
                 <Link to='/prod/01'>Tulsi Green Tea</Link> 
                </DropdownItem>
                <DropdownItem className="itt" >
                <Link to='/prod/02'>Blue Tea</Link> 
                </DropdownItem>
                <DropdownItem className="itt" >
                <Link to='/prod/03'>Premium Tea</Link> 
                </DropdownItem>
                <DropdownItem className="itt" >
                <Link to='/prod/04'>Green Tea</Link> 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/aboutus"><NavLink className="itt"  >About Us</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
