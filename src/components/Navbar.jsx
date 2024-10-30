import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed z-[999] w-full px-20 py-5 font-NeueMontreal, Roboto, sans-serif flex justify-between items-center transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"} bg-bg-[#202324] backdrop-blur-lg bg-opacity-30`}>
      <div className="logo text-[#D3CFCA] text-4xl font-bold">ochi</div>
      <div className="links flex gap-10">
        {["Home", "Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <Link
            key={index}
            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
            className={`text-md text-[#D3CFCA] capitalize ${index === 4 && "ml-32"}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
