import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[105vh] flex gap-5 bg-[#202324] p-20">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="font-serif text-6xl uppercase text-[#D3CFCA] font-bold leading-none tracking-tighter">
            Eye-
          </h1>
          <h1 className="text-6xl font-serif text-[#D3CFCA] font-bold  uppercase leading-none tracking-tighter">
            Opening
          </h1>
        </div>
        <div className="logo text-[#D3CFCA] text-4xl font-bold">ochi</div>
      </div>
      <div className="w-1/2">
        <h1 className="font-serif text-6xl uppercase text-[#D3CFCA] font-bold leading-none tracking-tighter">
          Presentations
        </h1>

        <div className="dets mt-10">
  <h3 className="text-[#dbd9ce] pb-5">L:</h3>
  {[
    { name: "Instagram", url: "https://www.instagram.com/ochi_design/" },
    { name: "Behance", url: "https://www.behance.net/ochi_design" },
    { name: "Facebook", url: "https://www.facebook.com/people/OCHI-presentation-design/100067218942460/" },
    { name: "Linkedin", url: "https://www.linkedin.com/company/ochi-design/" },
  ].map((item, index) => (
    <a
      className="block text-base text-[#dbd9ce] hover:underline font-sans"
      key={index}
      href={item.url}
    >
      {item.name}
    </a>
  ))}
</div>

        <div className="flex justify-between mt-10  ">
          <div className="dets">
            <h3 className="text-[#dbd9ce] pb-5">S:</h3>
            {[
              "202-1965 W 4th Ave",
              "Vancouver, Canada",
              "30 Chukarina St",
              "Lviv, Ukraine",
            ].map((item, index) => (
              <a
                className="block font-sans tracking-tighter text-base text-[#dbd9ce] hover:underline"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="dets">
            <h3 className="text-[#dbd9ce] pb-5">M:</h3>
            {[
              "Home",
              "Services",
              "Our work",
              "About us",
              "Insights",
              "Contact us",
            ].map((item, index) => (
              <a
                className="block font-sans tracking-tighter text-base text-[#dbd9ce] hover:underline"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="dets   ">
          <h3 className="text-[#dbd9ce] pb-5">E:</h3>
          {["hello@ochi.design"].map((item, index) => (
            <a
              className="block tracking-tighter text-base text-[#dbd9ce]  font-sans hover:underline"
              key={index}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
