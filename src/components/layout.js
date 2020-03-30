import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer/>
        <div style={{textAlign: "center", background: "#000033", color:"white", paddingBottom: "10px"}}>
          © {new Date().getFullYear()}, Built with ❤️ by
          {` `}
          <a target="_blank" href="https://github.com/Gasty-WebDev113">Gasty-WebDev113</a>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
