import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import ProductCard from './productcard'
import ListGroup from 'react-bootstrap/ListGroup'
import './product_list.css'
import { Button } from "react-bootstrap"

const ProductList = () => {
    const data = useStaticQuery(
        graphql`
            {
                allShopifyProduct {
                edges {
                node {
                    title
                    shopifyId
                    handle
                    description
                    tags
                    handle
                    priceRange {
                    minVariantPrice {
                        amount
                    }
                    maxVariantPrice {
                        amount
                    }
                    }
                    variants {
                        id
                        compareAtPrice
                    }
                        updatedAt
                    images {
                        originalSrc
                    }
                }
                }
            }
            }
            `)

    return(
        <div id="Product_List_Container" >
            <h1 className="List_Title">Featured</h1>
            <div id="Product_List">
                {
                    data.allShopifyProduct.edges.map(({node}) =>
                        <ProductCard {...node} key={node.id} />
                    )
                }
            </div>
            <Button variant="outline-dark" className="List_Button">View Featured</Button>
        </div>
    )
}

export default ProductList