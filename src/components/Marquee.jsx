import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl '>
      <div className='text border-t-2 border-b-2 border-x-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration:5}} className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-bold pr-10 uppercase -mb-[7vw] pt-10 ' >We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration:5}} className='text-[24vw] leading-none font-["Founders_Grotesk_X-Condensed"] font-bold pr-20 uppercase -mb-[7vw] pt-10 ' >We are ochi</motion.h1>

      </div>


    </div>



  )
}

export default Marquee
