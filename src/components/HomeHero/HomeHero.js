import React, {useState, useEffect} from 'react';
import "./HomeHero.css"
import {Button} from "@material-ui/core"
import { Link } from 'react-router-dom';


export default function HomeHero() {
  const [mobileView, setMobileView] = useState(false)
  
  function handleWindow(){
    
      if (window.innerWidth >960) {
        setMobileView(false)
      } if (window.innerWidth <= 960) {
        setMobileView(true)
      }
  }
  useEffect(()=>{
    window.addEventListener("resize", handleWindow)
    return ()=> window.removeEventListener("resize", handleWindow)
  },[])
  
  function add (){
    if (!mobileView){
    return (
      <div className="bottom-ad">
        <div className="description">
            <h1>this is title</h1>
            <p>this is some paragraph about this section and products</p>
            <Button variant="outlined">SHOP NOW</Button>
        </div>
        <img alt="" src="./canvaBG2.png" />
      </div>
    )
  } else {
    return (
      <div className="bottom-ad">
        <img alt="" src="./canvaBG2.png" />
        <div className="description">
            <h1>this is title</h1>
            <p>this is some paragraph about this section and products</p>
            <Button variant="outlined">SHOP NOW</Button>
        </div>
      </div>
    )
  }
  }

  return (
    <div className="hero-container">
      <div className="top-home-page">
        <img alt="homepage" src="./canvaBG2.png"/>
        <div className="hero">
            <h1>CODE WARRIORS..</h1>
            <p>this is some paragraph about products and blogs</p>
            <div className="hero-btns">
              <Link to="/devappareal"><Button>Dev appareal</Button></Link>
              <Link to="./blogs"><Button>Dev Blogs</Button></Link>
            </div>
        </div>
      </div>
      <div className="bottom-home-page">
        <div className="top-ad">
            <img alt="" src="./CODE WARRIORS REALM.png" />
            <div className="description">
              <h1>this is title</h1>
              <p>this is some paragraph about this section and products</p>
              <Button variant="outlined">SHOP NOW</Button>
          </div>
        </div>
        {add()}
      </div>
    </div>
  );
}
/* https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80 */