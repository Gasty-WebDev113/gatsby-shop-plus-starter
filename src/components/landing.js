import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./landing.css"
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const Landing = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return(
    <div>  
        <Carousel indicators={false}>
            <Carousel.Item>
                <div id="Landing_Container" >
                    <Img fluid={data.placeholderImage.childImageSharp.fluid}  />
                </div>
            <Carousel.Caption>
                <div id="Landing_Title">
                    <h1>Insert Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <Button variant="success" href="/">Go to Shop</Button>
                </div>
                <div id="Landing_Footer">
                    <p>Add Footer</p>
                </div>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div id="Landing_Container" >
                    <Img fluid={data.placeholderImage.childImageSharp.fluid}  />
                </div>
            <Carousel.Caption>
                <div id="Landing_Title">
                    <h1>Insert Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <Button variant="success" href="/">Go to Shop</Button>
                </div>
                <div id="Landing_Footer">
                    <p>Add Footer</p>
                </div>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div id="Landing_Container" >
                    <Img fluid={data.placeholderImage.childImageSharp.fluid}  />
                </div>
            <Carousel.Caption>
                <div id="Landing_Title">
                    <h1>Insert Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <Button variant="success" href="/">Go to Shop</Button>
                </div>
                <div id="Landing_Footer">
                    <p>Add Footer</p>
                </div>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Landing