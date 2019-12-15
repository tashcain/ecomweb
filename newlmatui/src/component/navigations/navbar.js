import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import Img01 from '../../images/logolm.png';
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

        <NavbarBrand className="logo" href="/"><img src={Img01} alt="logo"/>LM Assam Tea</NavbarBrand>
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
                <DropdownItem className="itt" >
                <Link to='/prod/06'>Oolong tea</Link> 
                </DropdownItem> <DropdownItem className="itt" >
                <Link to='/prod/07'>Masala tea</Link> 
                </DropdownItem> <DropdownItem className="itt" >
                <Link to='/prod/08'>Rose tea</Link> 
                </DropdownItem> <DropdownItem className="itt" >
                <Link to='/prod/09'>Stevia tea</Link> 
                </DropdownItem> <DropdownItem className="itt" >
                <Link to='/prod/010'>Lemongrass tea</Link> 
                </DropdownItem> <DropdownItem className="itt" >
                <Link to='/prod/11'>White tea</Link> 
                </DropdownItem>
                <DropdownItem className="itt" >
                <Link to='/prod/05'>Black tea</Link> 
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
