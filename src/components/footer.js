import React from 'react'

import reactlogo from '../images/react-logo.png'
import gatsbylogo from '../images/gatsby-icon.png'
import bootstraplogo from '../images/bootstrap-logo.png'

import FooterList from './footerlist'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => (
    <footer id="Footer_Container">
        <div id="Footer_Logo_Container">
            <h3>Made with</h3>
            <img className="Footer_Logo" src={gatsbylogo}></img>
            <img className="Footer_Logo" src={reactlogo}></img>
            <img className="Footer_Logo" src={bootstraplogo}></img>
        </div>
        <FooterList title="About" keys={["Blogs", "About Us", "Terms and Conditions", "Privacy"]} />
        <FooterList title="Our Services" keys={["Products", "Watches", "T-Shirts","Pants"]} />
       
        <Nav className="flex-column justify-content-start" id="Footer_Social">
                <Nav.Link href=""><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></Nav.Link>
                <Nav.Link href=""><FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></Nav.Link>
                <Nav.Link href=""><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></Nav.Link>
                <Nav.Link href=""><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></Nav.Link>
                <Nav.Link href=""><FontAwesomeIcon icon={['fab', 'gitlab']} size="2x" /></Nav.Link>
                <Nav.Link href=""><FontAwesomeIcon icon={['fab', 'medium']} size="2x" /></Nav.Link>
        </Nav>
    </footer>
)

export default Footer