import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import theorybuddyLogo from "../images/theorpybuddy.png";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen">
      <header className="bg-gray-800 text-white h-20 flex justify-between items-center px-5 fixed w-full top-0 z-50">
        <div className="flex items-center gap-2">
          <img className="w-12" src={theorybuddyLogo} alt="Buddy Up Logo" />
          <p className="text-lg text-white font-bold text-2xl md:text-4xl">Theory-Buddy</p>
        </div>
        <div
          className={`absolute top-20 left-0 w-full bg-black transition-transform duration-300 ${
            menuOpen ? "flex flex-col justify-center items-center" : "hidden"
          } md:flex md:flex-row md:relative md:top-0 md:bg-transparent md:w-auto gap-36`}
        >
          <a
            href="#"
            className="text-lg text-white font-semibold hover:text-gray-300 p-5 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg text-white font-semibold hover:text-gray-300 p-5 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="text-lg text-white font-semibold hover:text-gray-300 p-5 transition-colors duration-200"
          >
            Mail
          </a>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="block md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </header>

      <div className="relative w-full h-screen">
        <img
          src="https://s3-alpha-sig.figma.com/img/5cf4/093e/4f0d9ece972d4c797c3647bb7720249f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dx1sJcW3FLtOYzfGZrlzWkAHJAF7OcQiR87fspKLEA8RUfGJ29Wco~MyrMki9V3848cUn2AClSV0OJLmKZRFhnIbCvNMpUpGULygqY6g5JdhzhWpnZOkD7G~UNhah7S-9NSaTdZLmltXKYFrbIaNhFEIX85wt~ITpx9OaN4qfV0Dun8diRA0cc-MV0MG5NQpU8UaEnvJIFwXetFTTzM2q~8cMWI34L99fexK5pxMOduStYsfgtV9BDKp3cN30Rg6C5TnJ97LnMb~WPYk8XvI1C11wxeifAFoaVGNv9U87iTl-U6QTa3K-tl-Qmgxbrp4qyKdp3wOTjfyPi5Sc~-D9Q__"
          alt="Nature"
          className="w-full h-full object-cover border-b-2 border-black-300"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 bg-gray-200 text-center text-black rounded-lg shadow-lg p-5 w-3/4 sm:w-1/2">
          <p className="text-5xl font-bold text-brown-600">Free Group Therapy</p>
        </div>
      </div>

      <div className="mt-20 flex flex-col justify-between h-full">
        <div className="relative flex flex-col md:flex-row items-center justify-around md:my-24 gap-10">
          <div className="flex flex-col items-center relative">
            <button className="bg-blue-500 text-white w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-blue-600">
              Monday
            </button>
            <p className="mt-4 text-xl font-bold">College Students</p>
            <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-4 w-[calc(100%+1rem)] h-0.5 bg-gray-400 z-[-1]"></div>
          </div>
          <div className="flex flex-col items-center relative">
            <button className="bg-green-500 text-white w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-green-600">
              Wednesday
            </button>
            <p className="mt-4 text-xl font-bold">Freelancers/Founders</p>
            <div className="hidden md:block absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-4 w-[calc(100%+1rem)] h-0.5 bg-gray-400 z-[-1]"></div>
            <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-4 w-[calc(100%+1rem)] h-0.5 bg-gray-400 z-[-1]"></div>
          </div>
          <div className="flex flex-col items-center relative">
            <button className="bg-red-500 text-white w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-red-600">
              Friday
            </button>
            <p className="mt-4 text-xl font-bold">Working Professionals</p>
            <div className="hidden md:block absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-4 w-[calc(100%+1rem)] h-0.5 bg-gray-400 z-[-1]"></div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="w-80 h-10 bg-brown-600 text-black text-2xl font-semibold rounded-lg border-2 hover:bg-brown-500 transition duration-300 hover:bg-red-500 md:w-64 sm:w-48">
            Join Us Now
          </button>
        </div>
      </div>

      <div className="w-full mt-20 h-96 bg-[#ffbea5] text-center p-10 flex justify-center">
        <p className="text-5xl font-bold text-brown-600">Why Choose Us</p>
      </div>

      <footer className="bg-gray-800 text-white py-5 text-center w-full mt-auto">
        <p>&copy; 2024 Therapy Buddy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
