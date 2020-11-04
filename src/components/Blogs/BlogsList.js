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
        onClick={(e)=> setBlogID(item.sys.id)} 
        key={item.sys.id} 
        >
        {item.fields.blogTitle}
        <i 
        className="fas fa-chevron-right"
        style={{paddingLeft : "8px"}} 
        >
        </i>
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
                 position : "absolute",
                 fontSize : "32px",
                 padding : "16px 16px 16px 6px",
                 backgroundColor : "#FAFAFA",
                 borderRadius : "0 50% 50% 0",
                 borderRight : "1px solid #CCC",
                 borderTop : "1px solid #CCC",
                 borderBottom : "1px solid #CCC",
                 right : "-42px",
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