import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'


const Header = ({ siteTitle }) => (
  <header
    id="Container"
  >
    <div
      id="Title_Container"
    >
      <h1>
        <Link
          to="/"
          id="Title"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav id="Menu">
       <ol className="Menu_Option">
        <Link className="Menu_Option_Title" to="/"> Shirts </Link>
       </ol>
       <ol className="Menu_Option">
        <Link className="Menu_Option_Title" to="/"> Pants </Link>
       </ol>
       <ol className="Menu_Option">
        <Link className="Menu_Option_Title" to="/" > Shoes </Link>
       </ol>
       <ol className="Menu_Option">
        <Link className="Menu_Option_Title" to="/" > Watchs </Link>
       </ol>
       <ol className="Menu_Option">
        <Link className="Menu_Option_Title" to="/" > Contact </Link>
       </ol>
     </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
