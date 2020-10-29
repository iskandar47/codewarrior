import React, { createContext, useState, useEffect } from "react"
import {createClient} from "contentful"

const DataContext = createContext()

function DataContextProvider({children}){
    const [products, setProducts] = useState([])
    
    function getData(){
        const client = createClient({
            space: "lku7p3y5al3x",
            accessToken: "6uTK1K_DfE5uAn4_vFqqHmYAe9FMXEQXfRLoj3DiSVc"
          });
        client.getEntries()
        .then((res) => {
        let result = res.items
        result = result.map(item=>{
            const id = item.sys.id
            const {title, price, lnik} = item.fields;
            const image = item.fields.image.fields.file.url;
            const imageId = item.fields.image.fields.file.fileName;
            return {id, title, price, lnik, image, imageId }
        })
        setProducts(result)
        })
        .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        getData()
    },[])
    return (
        <DataContext.Provider value={products}>
           {children}
        </DataContext.Provider>
    )
}
export {DataContextProvider, DataContext}