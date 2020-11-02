import React, { useContext } from 'react'
import BlogPosts from '../components/Blogs/BlogPosts'
import Loader from "../components/Loader/Loader.js"
import { DataContext } from '../Context'


function Blogs() {
    const {loading} = useContext(DataContext)
    
    return (
        <div>{loading ? <Loader /> : <BlogPosts />}</div>
    )
}

export default Blogs
