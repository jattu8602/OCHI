import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100  flex items-center px-[70px] gap-5'>
      <div className='cardcontainer w-1/2  h-[50vh]'>
      <div className='card relative rounded-xl  w-full  h-full bg-[#004D43] flex items-center justify-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full'>©2019-2022</button>
      </div>

      </div>
      <div className='cardcontainer flex w-1/2 h-[50vh] gap-5  '>
      <div className='card relative flex items-center justify-center  rounded-xl  w-1/2 h-full bg-[#212121]'>
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full'>RATING 5.0 ON CLUTCH</button></div>
      <div className='card relative rounded-xl w-1/2  h-full flex items-center justify-center bg-[#212121]'>
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full'>BUSINESS BOOTCAMP ALUMNI</button></div>
      </div>


    </div>
  )
}

export default Cards
