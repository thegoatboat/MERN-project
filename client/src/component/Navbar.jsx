import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Myshop from './Myshop';

const  Navigateur=()=> {
  const quantity = useSelector(state=>state.cart.quantity)

  console.log(quantity)
  return (
<div>

    <Navbar collapseOnSelect expand="lg" bg="" variant="" className='navbar'>
      <Container>
        <Link to="/" >
        <img src="image/log3.png"  width="50px" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productlist">Articles</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Service" id="collasible-nav-dropdown">
              <NavDropdown.Item href="Workshop">Workshop</NavDropdown.Item>
              <Link></Link>
              <NavDropdown.Item href="Events">Events</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="SignIn">Sign in</Nav.Link>
            <Nav.Link eventKey={2} href="login">
              login
            </Nav.Link>
            <Link to="/Myshop">
            <ShoppingCartIcon/>
            <span>{quantity}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>

  )
}

export default Navigateur