import React from 'react'
import "./Page2.css"


import Untitled from "../Page2/Untitled.mp4"

export default function Page2() {
  return (
    <div className='page2'>
      <video src = {Untitled} autoplay={"autoplay"}  muted loop> </video>
    </div>
  )
}
