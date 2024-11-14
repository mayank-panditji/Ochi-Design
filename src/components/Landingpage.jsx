import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Landingpage = () => {

  return (
      <div className="w-full h-screen pt-1 bg-[#202324]">
        <div className="textstructure mt-40 px-20">
          {["WE CREATE","EYE OPENING","PRESENTATIONS"].map((item,index)=>{
            return  <div className="masker ">
              <div className='w-fit flex '>
                {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} 
                transition={{ease:[0.76,0,0.24,1],duration:1}}
                className=' rounded-md  mr-[1vw]
                w-[9vw] h-[4vw] relative top-[1vw] bg-[url("/img/content.jpg")] bg-contain'></motion.div>)}
              <h1 className='uppercase font-FoundersGrotesk, Roboto, sans-seriffont text-7xl text-[#D3CFCA] leading-[5vw] tracking-tighter font-medium'>{item}</h1>
              </div>
          
        </div>
          })}
           
           
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
          {["For public and private companies","From the first pitch the IPO"].map((item,index)=><p className='text-md font-sans text-[#f1ece6] leading-none tracking-tighter'>{item}</p>)}
          <div className='start flex items-center gap-5'>
            <div className="px-5 py-2 rounded-full border-[1px] border-zinc-500  text-[#f1ece6] text-sm font-sans hover:bg-[#222525] hover:border-none">START THE PROJECT</div>
            <div className="w-10 h-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center">
              <span className='rotate-[45deg]'><FaArrowUpLong /></span>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default Landingpage
