import React, { useContext } from 'react'
import BlogPosts from '../components/Blogs/BlogPosts'
import Loader from "../components/Loader/Loader.js"
import { DataContext } from '../Context'
import useStyles from "./Styles"
import BlogsList from '../components/Blogs/BlogsList'


function Blogs() {
    const classes = useStyles()

    const {loading} = useContext(DataContext)
    
    return (
        <div className={classes.blogsPage}>
            <BlogsList />
            {loading ? <Loader /> : <BlogPosts />}
        </div>
    )
}

export default Blogs
