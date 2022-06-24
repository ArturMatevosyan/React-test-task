import React, { createContext, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import LoginPath from "./pages/login_path";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import AboutUs from "./pages/about-us";
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from "./pages/home";
export const PathContext = createContext()
export const ChangePathContext = createContext()

function App() {
  const[path,setPath] = useState("/");
  return (
    <div className="App">
      <ChangePathContext.Provider value={setPath}>
        <PathContext.Provider value={path}>
          <Router onUpdate={() => window.scrollTo(0, 0)} >
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
          </PathContext.Provider>
      </ChangePathContext.Provider>
    </div>
  );
}

export default App;




      
      

