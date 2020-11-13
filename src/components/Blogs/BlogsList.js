import React, {useState, useContext} from 'react'
import useStyles from "./Styles"
import { DataContext } from '../../Context'


function BlogsList() {
    const classes = useStyles()
    const {blogs, setBlogID} = useContext(DataContext)
    const [hovered, setHovered] = useState(false)
    
    
    const blogTitles = blogs.map((item)=> (
        <li 
        className={classes.listItem}
        onClick={ 
            (e)=> {
                setBlogID(item.sys.id)
                window.scrollTo(0,0)
            }
        } 
        key={item.sys.id} 
        >
        {item.fields.blogTitle}
        
        </li>
    ))

    return (
        <div 
        className={hovered ? classes.listActive :classes.blogsListContainer}
        onMouseLeave={()=> setHovered(false)}
        >
            <i
             onMouseEnter={()=> setHovered(true)}
             onClick={()=> setHovered(!hovered)}
             className="fas fa-chevron-right"
             style={{
                 color : "#FF4536",
                 position : "absolute",
                 fontSize : "32px",
                 padding : "16px 16px 16px 6px",
                 backgroundColor : "#F3F3F3",
                 borderRadius : "0 50% 50% 0",
                 borderRight : "1px solid #F3F3F3",
                 borderTop : "1px solid #F3F3F3",
                 borderBottom : "1px solid #F3F3F3",
                 right : "-44px",
                 top: "40%",
             }}
             ></i>
            <ul className={classes.blogsList}>
                <h1 style={{height : "10vh", paddingTop : "20px", textAlign : "center"}}>Hot Topics</h1>
                {blogTitles}
            </ul>
        </div>
    )
}

export default BlogsList
