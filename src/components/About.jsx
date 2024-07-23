import React from 'react'
import {motion} from "framer-motion"
const About = () => {

  return (
    <motion.div data-scroll data-scroll-section  className='w-full p-20 bg-[#CDEA67] rounded-tr-3xl rounded-tl-3xl text-black'>

<h1 className='font-["Neue_Montreal" ] text-[4.5vw]  leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>





<div className='flex fap-5 w-full border-t-[1px] border-[#99AD53] mt-20 pt-10'>
  <div className='w-1/2 '>
  <h1 className='text-6xl'>Our approach:</h1>
  <button className='px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center uppercase'>Read More
    <div className='w-2 h-2 bg-zinc-100 rounded-full '> </div>
  </button>
  </div>

  <div className='w-1/2 h-[55vh] rounded-3xl overflow-hidden bg-gray-600'>
  <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" />

  </div>
</div>















    </motion.div>





  )
}

export default About
