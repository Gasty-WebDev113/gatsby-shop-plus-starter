import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
