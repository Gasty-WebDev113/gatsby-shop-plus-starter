import React from "react"
import { Link } from "gatsby"
import "./landing.css"
import Image from "./image"
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const Landing = () => (
    <div>  
        <Carousel indicators={false}>
            <Carousel.Item>
                <div id="Landing_Container" >
                    <Image />
                </div>
                <div id="Landing_Title">
                    <h1>Insert Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <Button variant="success" href="/">Go to Shop</Button>
                </div>
            <Carousel.Caption>
                <p>Add Footer</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div id="Landing_Container" >
                    <Image />
                </div>
                <div id="Landing_Title">
                    <h1>Insert Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <Button variant="success" href="/">Go to Shop</Button>
                </div>
            <Carousel.Caption>
                <p>Add Footer</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div id="Landing_Container" >
                    <Image />
                </div>
                <div id="Landing_Title">
                    <h1>Insert Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <Button variant="success" href="/">Go to Shop</Button>
                </div>
            <Carousel.Caption>
                <p>Add Footer</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)

export default Landing