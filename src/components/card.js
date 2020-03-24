import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import image from '../images/Image.jpg'
import './card.css'

const ProductCard = ({
    title,
    description,
    images,
    priceRange,
    variants,
    tags,
}) => {
    console.log(tags)
    return(
    <Card id="Product_Card">
        <Link className="ProductCard_Link" to="/Product">
            <Card.Img variant="top" src={images[0].originalSrc} id="ProductCard_Image" />
        </Link>
        <Card.Body>
            <Card.Title>
                <Link className="ProductCard_Link" to="/Product">
                {title}
                </Link>
            </Card.Title>
                {
                    tags ? tags.map(tag => 
                    <Badge className="ProductCard_Badge" variant="primary">{tag}</Badge>
                    ) : null
                } 
            <Card.Text id="ProductCard_Description">
                {description}
            </Card.Text>
            <span id="ProductCard_Price">
                <Link className="ProductCard_Link" to="/Product">
                    {priceRange.minVariantPrice.amount}
                    {
                        variants[0].compareAtPrice ? <span>$550</span> : null
                    }
                    <FontAwesomeIcon id="ProductCard_CartIcon" icon={faShoppingCart} color="black" size="1x"/>
                </Link>
            </span>
        </Card.Body>
    </Card>)
}

export default ProductCard

ProductCard.defaultProps ={
    price: '$220',
}