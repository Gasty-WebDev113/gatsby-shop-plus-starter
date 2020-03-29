import React from 'react'
import FooterList from './footerlist'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => (
    <footer id="Footer_Container">
        <h3 style={{marginRight:"35px", color:"white" ,height: "90px", width: "90px"}}>Insert Logo</h3>
        <FooterList title="About" keys={["Products", "Blogs", "About Us"]} />
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