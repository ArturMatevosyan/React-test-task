import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import LoginPath from "./pages/login_path";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import AboutUs from "./pages/about-us";
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login_path" element = {<LoginPath/>}/>
          <Route path = "/terms" element = {<Terms/>}/>
          <Route path = "/privacy" element = {<Privacy/>}/>
          <Route path = "/about" element = {<AboutUs/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;




      
      

