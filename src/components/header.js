import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTshirt, faBook, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'  
// For more information of Icons go to FontAwsome React Documentation
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => (
    <Navbar bg="dark" expand="lg" id="Container">
      <Navbar.Brand href="#home">
        <h1>
          <Link to="/" id="Title" >
            {siteTitle}
          </Link>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav inline className="d-flex justify-content-end" id="Menu_Items" >
          <Nav.Link>
            <Link className="Menu_Option_Title" to="/"> 
              <FontAwesomeIcon className="Menu_Option_Icon" icon={faTshirt} color="white" size="1x"/>Products 
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Menu_Option_Title" to="/"> 
              <FontAwesomeIcon className="Menu_Option_Icon" icon={faBook} color="white" size="1x"/>Blogs 
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Menu_Option_Title" to="/"> 
              <FontAwesomeIcon className="Menu_Option_Icon" icon={faUser} color="white" size="1x"/>About Us 
            </Link>            
          </Nav.Link>
          <Nav.Link>
            <Link className="Menu_Option_Title" to="/"> 
            <FontAwesomeIcon className="Menu_Option_Icon" icon={faPaperPlane} color="white" size="1x"/>Contact 
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="Menu_Option_Title" to="/"> 
              <FontAwesomeIcon className="Menu_Option_Title" icon={faShoppingCart} color="white" size="lg"/>
            </Link>
          </Nav.Link>
        </Nav>
       </Navbar.Collapse>
    </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
