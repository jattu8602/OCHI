import { delay } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX-window.innerWidth/2;
      let deltaY = mouseY-window.innerHeight/2;
      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      setRotate(angle-180)

    })
  })


  return (
    <div className='eyes w-full h-screen overflow-hidden '>
      <div data-scroll data-scroll-speed= "-.7"  className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
<div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
<div className='w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-[#F4F4F4]'>

  <div className='w-2/3 relative h-2/3 rounded-full bg-[#212121]'>
  <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 w-full h-1'>
  <div className='w-10 h-10 rounded-full bg-[#F4F4F4]'></div>
  </div>


  </div>
</div>
<div className='w-[15vw] flex items-center justify-center rounded-full h-[15vw] bg-[#F4F4F4]'>
<div className='w-2/3 relative h-2/3 rounded-full bg-[#212121]'>
<div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 w-full h-1'>
  <div className='w-10 h-10 rounded-full bg-[#F4F4F4]'></div>
  </div>


  </div>
</div>
</div>


      </div>



    </div>
  )
}

export default Eyes
