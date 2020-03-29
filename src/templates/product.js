import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons'  
import Layout from '../components/layout'
import Img from "gatsby-image"
import Seo from '../components/seo'
import { Button } from "react-bootstrap"
import './product.css'

export default class ProductTemplate extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { product } = this.props.pageContext
        console.log(product)
        return(
            <Layout>
                <Seo />
                <div id="Product_Container">
                    <div id="Product_Image">
                        <img src={product.images[0].originalSrc} />
                    </div>
                    <div id="Product_Information">
                        <h1 id="Product_Title">{product.title}</h1>
                        <h2 id="Product_Price">${product.priceRange.minVariantPrice.amount}</h2>
                        <p id="Product_Description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div id="Option_List">
                            <p>SIZE:</p>
                            <div className="Option_Button Sizes">S</div>
                            <div className="Option_Button Sizes Sizes_Selected">M</div>
                            <div className="Option_Button Sizes">L</div>
                        </div>
                        <div id="Option_List">
                            <p>COLOR:</p>
                            <div className="Option_Button Colors"><div style={{background: "yellow"}}></div></div>
                            <div className="Option_Button Colors Colors_Selected"><div style={{background: "red"}}></div></div>
                            <div className="Option_Button Colors"><div style={{background: "blue"}}></div></div>
                        </div>
                        <Button variant="success" className="List_Button" id="Product_Button">
                            <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                        </Button>
                    </div>
                </div>
            </Layout>
        )
    }
}
