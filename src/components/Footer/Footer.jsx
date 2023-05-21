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
            <a href="#"><i className="fab fa-facebook-f"></i></a>
             <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
     </div>
   
      
    
        <div className="Footer-box">
            <div className="footer-section">
                <h3> Rider</h3>
                <ul>        
                    <li><a href = "#">How  To <div className="speeds"><span>Speeds</span></div></a> </li> 
                    <li><a href = "#"></a>Safety </li> 
                    <li><a href = "#"></a> Sustainablity</li> 
                    <li><a href = "#"></a> Map</li> 
                    <li><a href = "#"></a> Insurance</li>
                </ul>
            </div>
     
  

            <div className="footer-section">
                <h3> Vehicles </h3>
                <ul>        
                    <li><a href = "#"><div className="speeds">Speeds</div><span>Three</span></a> </li> 
                    <li><a href = "#"></a><div className="speeds">Speeds</div><span>BikeShare </span></li> 
                    <li><a href = "#"></a> <div className="speeds">Speeds</div><span>Bike</span></li> 
                   
                </ul>
            </div>

            <div className="footer-section">
                <h3> Partner</h3>
                <ul>        
                    <li><a href = "#">Cities</a> </li> 
                    <li><a href = "#"></a>Investor </li> 
                    <li><a href = "#"></a> Fleet Manager</li> 
                    <li><a href = "#"></a>Platform</li> 
                    
                </ul>
            </div>


            <div className="footer-section">
                <h3> Company</h3>
                <ul>        
                    <li><a href = "#">About</a> </li> 
                    <li><a href = "#"></a>Careers </li> 
                    <li><a href = "#"></a> Contact Us</li> 
                    <li><a href = "#"></a> Press</li> 
                  
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
