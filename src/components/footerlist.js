import React from 'react'
import Proptypes from 'prop-types'
import Nav from 'react-bootstrap/Nav'
import './footer.css'

const FooterList = ({keys, title}) => {
    console.log(keys)
    return(
    <Nav className="flex-column justify-content-start Footer_List">
        <h3 className="Footer_Title">{title}</h3>
        {
            keys.map((key) =>  <Nav.Link className="Footer_List_Item" href={`/${key}`} key={key}>{key}</Nav.Link>)
        }
    </Nav>)
}

FooterList.propTypes = {
    keys: Proptypes.arrayOf(Proptypes.string),
    title: Proptypes.string,
}

export default FooterList