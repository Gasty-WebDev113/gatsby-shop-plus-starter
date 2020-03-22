import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const Card = () => {
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
}

export default Card