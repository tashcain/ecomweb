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
        <NavbarBrand href="/">LMAssamtea</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/"><NavLink >Home</NavLink></Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu right>
               <Link to="/products">
               <DropdownItem>
                  Products Details
                </DropdownItem>
               </Link>
               <Link to="/buyprod/00">
               <DropdownItem>
                 Shop Cart 
                </DropdownItem></Link>  
                
                <DropdownItem divider />
                <DropdownItem>
                 <Link to='/prod/01'>Tulsi Green Tea</Link> 
                </DropdownItem>
                <DropdownItem>
                <Link to='/prod/02'>Blue Tea</Link> 
                </DropdownItem>
                <DropdownItem>
                <Link to='/prod/03'>Premium Tea</Link> 
                </DropdownItem>
                <DropdownItem>
                <Link to='/prod/04'>Green Tea</Link> 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/aboutus"><NavLink >About Us</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
