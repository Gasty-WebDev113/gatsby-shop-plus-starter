import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"
import ProductList from "../components/product_list"
import BlogList from "../components/bloglist"
import Footer from "../components/footer"

import '../utils/globalstyles.css'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <ProductList />
    <BlogList />
    <Footer />
  </Layout>
)

export default IndexPage
