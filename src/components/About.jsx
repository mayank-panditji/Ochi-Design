import React from "react";

const About = () => {
  return (
    <div className="w-full py- bg-[#57660E] rounded-tl-3xl rounded-tr-3xl text-[#D3CFCA] p-20">
      <h1 className="font-serif text-[3vw] leading-[3.5vw] tracking-tight ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-8 flex gap-5 font-serif">
        <div className="w-1/2 ">
          <h1 className="font-serif text-xl">What you can expect:</h1>
          
        </div>
        <div className="w-1/2 flex justify-between">
         <div className="w-1/2">
         <h1 className="font-serif ">
         We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1>
         <h1 className="font-serif mt-6"> We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
         </div>
         <div className="w-1/2 ml-52 py-32">
         <h3 className=" pb-5">S:</h3>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <a
                className="block text-base hover:underline font-sans"
                key={index}
              >
                {item}
              </a>
            )
          )}
         </div>
        </div>
      </div>


      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-8 flex gap-5 font-serif">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="px-8 py-3 bg-zinc-900 rounded-full mt-10 text-white gap-10 flex items-center uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl">
          <img
            src="/img/Homepage.jpg"
            className="rounded-3xl"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default About;
