import React, { createContext, useState, useEffect } from "react"
import {createClient} from "contentful"

const DataContext = createContext()

function DataContextProvider({children}){
    const [products, setProducts] = useState([])
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [blogID, setBlogID] = useState("")
    
    function getData(){
        setLoading(true)
        const client = createClient({
            space: "lku7p3y5al3x",
            accessToken: "6uTK1K_DfE5uAn4_vFqqHmYAe9FMXEQXfRLoj3DiSVc"
          });
          // GET DEV APPREAL
        client.getEntries({
            content_type : "iskandar47products"
        })
        .then((res) => {
            console.log(res)
        let result = res.items
        
        result = result.map(item=>{
            const id = item.sys.id
            const {title, price, lnik} = item.fields;
            const image = item.fields.image.fields.file.url;
            const imageId = item.fields.image.fields.file.fileName;
            return {id, title, price, lnik, image, imageId }
        })
        setProducts(result)
        setLoading(false)
        })
        .catch(err => console.log(err))

        // GET BLOG POSTS
        client.getEntries({
            content_type : "blogs"
        }).then(res=> {
            
            setBlogs(res.items)
            
        })
        .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        getData()
    },[])
    return (
        <DataContext.Provider value={{products, blogs, loading, blogID, setBlogID}}>
           {children}
        </DataContext.Provider>
    )
}
export {DataContextProvider, DataContext}