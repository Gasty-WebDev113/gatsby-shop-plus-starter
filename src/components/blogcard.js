import React from "react"
import {Link} from "gatsby"
import Card from 'react-bootstrap/Card'
import './blogcard.css'

const BlogCard = ({
    title,
    tags,
    date,
}) =>{
    return(
        <Link to="/blogs" className="Blog_Card_Link">
            <Card id="Blog_Card_Container">
                <Card.Img variant="top" className="Blog_Card_Image" />
                <Card.Body id="Blog_Card_Body">
                    <Card.Text className="Blog_Card_Text" id="Blog_Card_Tag">
                        {tags}
                    </Card.Text>
                    <Card.Title className="Blog_Card_Title">{title}</Card.Title>
                    <Card.Text className="Blog_Card_Text">
                        {date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default BlogCard

BlogCard.defaultProps = {
    title: "A beatiful travel to Indonesia",
    tags: "Travel",
    date: "2 years ago"
}