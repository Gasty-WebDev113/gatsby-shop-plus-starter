import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import BlogCard from './blogcard'
import FirstBlog from './firstblog'
import './bloglist.css'
import { Button } from "react-bootstrap"

const BlogList = () => {
    const blogdata = useStaticQuery(
        graphql`
        {
            allShopifyArticle(skip: 1){
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

    return(
        <div id="Blog_List_Background">
            <div id="Blog_List_Container">
                <h1 id="Blog_List_Title">New Blogs !!!</h1>
                <div id="Blogs">
                    <div id="First_Blog">
                        <FirstBlog/>
                    </div>
                    <div id="Blogs_List">
                        {
                            blogdata.allShopifyArticle.edges.map(({node}) => 
                                <BlogCard {...node} />
                            )
                        }
                    </div>
                </div>
                <Button variant="outline-primary">View Featured</Button>
            </div>
        </div>
    )
}
export default BlogList