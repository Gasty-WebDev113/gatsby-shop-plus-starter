import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import ProductCard from './card'
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
            <h1 id="Product_List_Title">Featured</h1>
            <div id="Product_List">
                {
                    data.allShopifyProduct.edges.map(({node}) =>
                        <ProductCard {...node} />
                    )
                }
            </div>
            <Button variant="outline-dark">View Featured</Button>
        </div>
    )
}

export default ProductList