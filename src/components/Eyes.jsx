import React, { useEffect, useState,useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
const Eyes = () => {
  const scrollRef = useRef(null); 

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, 
      smooth: true, 
    });

    return () => {
      scroll.destroy(); 
    };
  }, []);


const [rotate,setRotate]=useState(0)


useEffect(() => {
  window.addEventListener("mousemove",(e)=>{
   const mouseX=e.clientX;
   const mouseY=e.clientY;
   let deltaX=mouseX - window.innerWidth/2;
    let deltaY=mouseY-window.innerHeight/2;
    var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI)
  setRotate(angle-180);
  })
});


  return (
    <div className="w-full h-screen  eyes overflow-hidden">
      <div data-scroll data-scroll-speed="-.4" className='w-full h-full bg-[url("/img/bgr.jpg")] bg-cover bg-center relative'>
        <div className="absolute  flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10">
          <div className="w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center">
            <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full ">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-200 rounded-full flex items-center justify-center">
          <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full ">
          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10">
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
