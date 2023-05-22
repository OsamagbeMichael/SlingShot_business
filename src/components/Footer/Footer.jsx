import "./Footer.css"
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Footer = () => {
  return (
    
    <footer className="footer">
        <div className="logo-container">
                 <h4>Speeds</h4>
       </div>
       <div className="social-media-icons">
            <a href="/"><i className="fab fa-facebook-f" aria-label="Facebook"></i></a>
             <a href="/"><i className="fab fa-instagram"aria-label="Instagram"></i></a>
            <a href="/"><i className="fab fa-twitter" aria-label="Twitter"></i></a>
     </div>
     
      
    
        <div className="Footer-box">
            <div className="footer-section">
                <h3> Rider</h3>
                <ul>        
                    <li> <div className="speeds"><span>Speeds</span></div></li> 
                    <li>Safety </li> 
                    <li>Sustainablity</li> 
                    <li>Map</li> 
                    <li>Insurance</li>
                </ul>
            </div>
     
  

            <div className="footer-section">
                <h3> Vehicles </h3>
                <ul>        
                    <li><div className="speeds">Speeds</div><span>Three</span></li> 
                    <li><div className="speeds">Speeds</div><span>BikeShare </span></li> 
                    <li> <div className="speeds">Speeds</div><span>Bike</span></li> 
                   
                </ul>
            </div>

            <div className="footer-section">
                <h3> Partner</h3>
                <ul>        
                    <li>Cities </li> 
                    <li>Investor </li> 
                    <li> Fleet Manager</li> 
                    <li>Platform</li> 
                    
                </ul>
            </div>


            <div className="footer-section">
                <h3> Company</h3>
                <ul>        
                    <li>About </li> 
                    <li>Careers </li> 
                    <li> Contact Us</li> 
                    <li> Press</li> 
                  
                </ul>
            </div>


         
        </div>


        <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
