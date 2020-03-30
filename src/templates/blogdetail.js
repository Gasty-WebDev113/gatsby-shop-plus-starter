import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import Layout from '../components/layout'
import Seo from '../components/seo'
import Badge from 'react-bootstrap/Badge'
import './blogdetail.css'

export default class BlogDetail extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        const {blog} = this.props.pageContext
        console.log(blog)
        return(
        <Layout>
            <Seo />
            <div id="Blog_Container">
                <h1 id="Blog_Title">{blog.title}</h1>
                <h4 id="Blog_Published_At">{blog.publishedAt}</h4>
                <div id="Blog_Image">
                    <img src={blog.image.src} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog.contentHtml}} id="Blog_Content">
                </div>
                <div id="Blog_Tags">
                    <h3>Tags</h3>
                    {
                        blog.tags.map((tag) => <Badge variant="info">{tag}</Badge>)
                    }
                </div>
            </div>
        </Layout>
        )
    }

}