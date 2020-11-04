import React, {useContext} from 'react'
import { DataContext } from '../../Context'
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import useStyles from "./Styles"
import {Grid} from "@material-ui/core"
import BlogCard from './BlogCard'
import "./BlogPost.css"

function BlogPosts() {
    const classes = useStyles()
    const {blogs, blogID, setBlogID} = useContext(DataContext)
    console.log(blogs)

    const blogPost = blogs.filter((item) => item.sys.id === blogID )
            .map((item)=> (
            <div className={classes.blogPost} key={item.sys.id}>
                <h1 className={classes.heading}>
                {item.fields.blogTitle} 
                </h1>
                {documentToReactComponents(item.fields.blogPost)}
            </div> 
    ))
    const blogsGrid = blogs.map((item)=>(
        
            <BlogCard 
            handleClick={()=>{
                window.scrollTo(0,0)
                setBlogID(item.sys.id)
            }}
            title={item.fields.blogTitle}
            key={item.sys.id}
            />
    ))

    return (
        <>
        <div className={classes.blogPostContainer}>
            {blogPost}
        </div>
        <h1 style={{textAlign : "center", margin : "10vh"}}>
            {blogPost.length > 0 ? "Learn More ..." : "Blogs"}
        </h1>
        <Grid className={classes.blogGrid} spacing={3} container >
            {blogsGrid}
        </Grid>
        </>
    )
}

export default BlogPosts
