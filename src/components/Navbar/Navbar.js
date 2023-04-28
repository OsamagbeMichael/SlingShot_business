import React,{useState} from 'react'
import "./NavBarStyle.css"
import {HiOutlineMenuAlt4} from 'react-icons/hi'

export default function Navbar() {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className= 'navbar'>
        <div className="logo">
            <h2>Speeds</h2>
        </div>

    <ul className={click?'nav-menu active' : 'nav-menu'}>
        <li>
            Ride

        </li>
        <li>Location</li>
        <li>Partners</li>
  

    <ul className='oregon'>
    <li>
      <button class="button-1"> Blog </button>  
     
        </li>
        <li>
        <button class = "button-2">  Rent Now</button>  
            </li>
    </ul>
    </ul>
    <div className="hamburger" onClick={handleClick}> 
    {click ? (<HiOutlineMenuAlt4 className='icon' size={20} style = {{}}/>) : (<HiOutlineMenuAlt4 className='icon' size={20} style = {{}}/>) }
    </div>
    </div>
    
      
    
  )
}
