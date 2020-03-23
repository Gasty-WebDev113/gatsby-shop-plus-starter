import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"
import ProductCard from "../components/card"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <ProductCard />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`

export default IndexPage
