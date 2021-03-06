import React from "react"
import "./index.css"
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import DevAppareal from "./pages/DevAppareal";
import AllProducts from "./pages/AllProducts";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/devappareal">
            <DevAppareal />
          </Route>
          <Route path="/allproducts">
            <AllProducts />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
