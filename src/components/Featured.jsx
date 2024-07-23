import React, { useState } from 'react'
import {motion, useAnimate, useAnimation} from "framer-motion";
import {Power4} from 'gsap/all'
const Featured = () => {


const[isHovering,setHovering]= useState(false)
const cards = [useAnimation(),useAnimation()]

const handleHover = ()=>{
  cards[index].start({y:"0"})

}

  return (
    <div className='w-full py-20 '>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight '>Featured projects</h1>
      </div>

<div className='px-20'>
<div className='cards w-full flex gap-10 mt-20'>


        <div onMouseLeave={()=>setHovering(false)} onMouseEnter={()=>setHovering(true)} className='cardcontainer  w-1/2 h-[75vh] relative'>
        <h1 className='absolute flex text-[#CDEA67] z-[9] text-8xl leading-none overflow-hidden tracking-tighter left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 '>
        {"FYDE".split('').map((item,index)=><motion.span className='inline-block  ' initial={{y:"100%"}} transition={{ease:[0.22,1,0.36,1],delay:index*.06}} animate={isHovering ? ({y:"0"}): ({y:"100%"})}> {item}</motion.span>)}</h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">

          <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
        </div>
        </div>

        <div onMouseLeave={()=>setHovering(false)} onMouseEnter={()=>setHovering(true)} className='cardcontainer  w-1/2 h-[75vh] relative'>
        <h1 className='absolute flex text-[#CDEA67] z-[9] text-8xl leading-none overflow-hidden tracking-tighter right-full  -translate-x-1/2 top-1/2 -translate-y-1/2 '>
        {"VISE".split('').map((item,index)=><motion.span className='inline-block  ' initial={{y:"100%"}} transition={{ease:[0.22,1,0.36,1],delay:index*.06}} animate={isHovering ? ({y:"0"}): ({y:"100%"})}> {item}</motion.span>)}</h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">

          <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
        </div>
        </div>


      </div>

</div>










<div className='px-20'>
<div className='cards w-full flex gap-10 mt-20'>


        <motion.div onHoverStart={()=>handleHover(0)} className='cardcontainer  w-1/2 h-[75vh] relative'>
        <h1 className='absolute text-[#CDEA67] z-[9] text-8xl leading-none tracking-tighter left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 '>
        {"TRAWA".split('').map((item,index)=><motion.span initial={{y:"100%"}} transition={{ease:[0.22,1,0.36,1],delay:index*.06}} animate={cards[0]}>{item}</motion.span>)}</h1>
        <div className="card w-full h-full rounded-xl overflow-hidden">

          <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
        </div>
        </motion.div>

        <div className='cardcontainer  w-1/2 h-[75vh] relative overflow-hidden'>
        <h1 className='absolute text-[#CDEA67] z-[9] text-8xl leading-none tracking-tighter right-full  translate-x-1/2 top-1/2 -translate-y-1/2 '>
        {"PREMIUMBLEND".split('').map((item,index)=><span>{item}</span>)}</h1>
        <div className="card w-full h-full rounded-xl overflow-hidden ">
          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
        </div>
        </div>


      </div>

</div>










    </div>
  )
}

export default Featured
