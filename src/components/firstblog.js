import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Card from 'react-bootstrap/Card'
import './firstblog.css'
import Img from "gatsby-image"

const FirstBlog = () => {
    const firstblog = useStaticQuery(
        graphql`
        {
            allShopifyArticle(limit: 1){
                edges{
                    node{
                        id
                        title
                        tags
                        publishedAt(fromNow: true)
                        image {
                            localFile {
                                childImageSharp {
                                fluid(maxWidth: 900) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                                }
                            }
                        }
                    }
                }
            }
        }`
    )
    const firstblogdata = firstblog.allShopifyArticle.edges[0].node
    console.log(firstblog)
    return(
        <Link to="/blogs" className="Blog_Card_Link">
            <Card id="First_Blog_Container">
                <div id="First_Blog_Image">
                    <Img variant="top" fluid={firstblogdata.image.localFile.childImageSharp.fluid}/>
                </div>
                <Card.Body id="Blog_Card_Body">
                    <Card.Text className="Blog_Card_Text" id="Blog_Card_Tag">
                        {firstblogdata.tags}
                    </Card.Text>
                    <Card.Title className="Blog_Card_Title">{firstblogdata.title}</Card.Title>
                    <Card.Text className="Blog_Card_Text">
                        {firstblogdata.publishedAt}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default FirstBlog