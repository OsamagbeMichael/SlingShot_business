import React from 'react'
import "./Page2.css"



import Untitled from "../Page2/Untitled.mov"

export default function Page2() {
  return (
    <div className='page2'>
      <div className="speed-label">Speeds</div>
      <video src = {Untitled} autoplay={"autoplay"}  muted loop> </video>
    </div>
  )
}
