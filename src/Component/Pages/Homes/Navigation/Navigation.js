import React,{useState,useEffect} from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
const Navigation = () => {

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <div>

<nav bg="" expand="lg" className={(isSticky) ? "navbar  navbar-expand-lg navbar-dark bg-info texts fixed-top" : "navbar text-danger  texts navbar-expand-lg bg color text-danger"}>
            <div className="container">
              <a className="navbar-brand d-flex align-items-center" href="https://www.google.com/">  <img src="https://i.ibb.co/1Twn4KC/11.png" alt="" width="130" height="79" className="d-inline-block align-text-top "/>
                <span className="ms-3 "></span></a>
              <button style={{color:"black"}} className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{color:"black"}} className="navbar-toggler-icon "></span>
              </button>
              <div className="collapse navbar-collapse "  id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li className="nav-item">
                  
                    <Link style={{marginRight:"20px"}} className="nav" to="">Home</Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link style={{marginRight:"20px"}} className="nav" to="">About</Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link style={{marginRight:"20px"}} className="nav" to="">Our Services</Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link style={{marginRight:"20px"}} className="nav" to="">Service Map</Link>
                  </li>

               

        <li className="nav-item">
                  <Link style={{marginRight:"20px"}} className="nav" to="">Contact Us</Link>
                   </li>
        <li className="nav-item">
                  <Link  style={{marginRight:""}} className="sign" to="">Sign in</Link>
                   </li>
                 
                
               

                



                
                 
                
                </ul>
               
              </div>
            </div>
          </nav>


    
            
        </div>
    );
};

export default Navigation;