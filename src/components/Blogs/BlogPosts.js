import React, {useContext} from 'react'
import { DataContext } from '../../Context'
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"

function BlogPosts() {
    const {blogs} = useContext(DataContext)
    console.log(blogs)
    
    const blogPost = blogs.map((item)=>(
        
        <div key={item.sys.id}>
            {documentToReactComponents(item.fields.blogPost)}
        </div> 
    ))
    return (
        <div style={{width : "50%", margin : " 20vh auto", lineHeight: 2}}>
            <h1>blogs feed</h1>
            {blogPost}
        </div>
    )
}

export default BlogPosts
