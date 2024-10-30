import React from "react";

const Services = () => {
  return (
    <div className=" bg-[#202324]">
      <h1 className="uppercase text-8xl font-sans py-24 text-[#D3CFCA] font-bold  pl-10 tracking-tighter">
        services{" "}
      </h1>

      <div className="w-full border-t-[1px] border-[#555656]  font-serif">
        <h3 className="text-[#D3CFCA] font-serif text-5xl font-semibold py-8 pl-10 ">
          We create eye-catching and eye-opening presentations that educate,
          inspire and influence action.
        </h3>
      </div>

      <div className="w-full border-t-[1px] border-[#555656]  font-serif flex gap-5 text-[#D3CFCA]  ">
        <div className="w-1/2 py-8 pl-10 flex flex-col justify-between">
          <div className="font-serif ">
            We do this by following
            <div>simple approach:</div>
          </div>
          <div className=" font-serif text-5xl font-semibold ">
            Holistic process
          </div>
        </div>
        <div className="w-1/2 flex justify-between">
          <div className="w-1/2 py-8 pl-10">
            <h1 className="font-serif underline ">Goal defines it all</h1>
            <h1 className="font-serif py-3">
              What do you want to achieve? Understanding the purpose of your
              presentation allows us to tailor it to ensure it hits the mark and
              drives results.
            </h1>
            <h1 className="font-serif underline">Audience is the hero</h1>
            <h1 className="font-serif py-3">
              Who is it for? What do they want? Why does it matter to them? We
              need to know your audience well enough to deliver a personalized
              presentation that they truly care about.
            </h1>
          </div>
          <div className="w-1/2  gap-5 py-8">
            <h1 className="font-serif underline">Context makes a difference</h1>
            <h1 className="font-serif py-3">
              When do you present? Online or live? At a sales meeting, at a
              conference, or just sending a cold email? We knit the context
              together to decide the style of the presentation.
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full py- bg-[#57660E] rounded-tl-3xl rounded-tr-3xl text-[#D3CFCA] p-20">
        <h1 className="font-serif text-[3vw] leading-[3.5vw] tracking-tight ">
          Let’s be honest. There are really no excuses to have a bad
          presentation anymore. No one has time for poorly communicated ideas.
          Focus on what you do best — growing your business, while we do our
          best at making your presentations awesome.
        </h1>
        
          <div className="w-full border-t-[1px] border-[#a1b562] mt-20 pt-8 flex gap-5 font-serif">
            <div className="w-1/2 ">
              <h1 className="font-serif ">Our Capabilities:</h1>
            </div>
            <div className="w-1/2 flex justify-between">
              <div className="w-1/2">
              <li>
                <ul className="uppercase">Raise Funds</ul>
              </li>
                <button className="rounded-full border-[1px] border-[#30461a] uppercase w-[12vw] mt-2 hover:bg-[#191B1C] hover:border-none ">investor deck</button>
                <button className="rounded-full border-[1px] border-[#30461a] uppercase w-[12vw] mt-2 hover:bg-[#191B1C] hover:border-none">startup pitch</button>
                
              </div>
              <div className="w-1/2 ml-52 ">
              <li>
                <ul className="uppercase">sell products</ul>
              </li>

           {["BUSNESS PROPOSAL","COMPANY PRESENTATION","PRODUCT PRESENTATION","SALES DECK","SERVICE DECK"].map((item,index)=>(
                    <button className="rounded-full border-[1px] border-[#30461a]  w-[16vw] mt-2 hover:bg-[#191B1C] hover:border-none ">{item}</button>
           ))}   
                
               
                </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Services;
