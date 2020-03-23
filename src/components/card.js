import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import image from '../images/Image.jpg'
import './card.css'

const ProductCard = ({price}) => (
    <Card id="Product_Card">
        <Link className="ProductCard_Link" to="/Product">
            <Card.Img variant="top" src={image} id="ProductCard_Image" />
        </Link>
        <Card.Body>
            <Card.Title>
                <Link className="ProductCard_Link" to="/Product">
                Card Title
                </Link>
            </Card.Title>
                <Badge variant="success">New</Badge>
                <Badge className="ProductCard_Badge" variant="dark">Deluxe</Badge>
                <Badge className="ProductCard_Badge" variant="primary">Featured</Badge>
            <Card.Text id="ProductCard_Description">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <span id="ProductCard_Price">
                <Link className="ProductCard_Link" to="/Product">
                    {price}<span>$550</span><FontAwesomeIcon id="ProductCard_CartIcon" icon={faShoppingCart} color="black" size="1x"/>
                </Link>
            </span>
        </Card.Body>
    </Card>
)

export default ProductCard

ProductCard.defaultProps ={
    price: '$220',
}