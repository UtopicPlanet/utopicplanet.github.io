import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import theorybuddyLogo from "../images/theorpybuddy.png";
import firstGroupImage from "../images/group_image_1.png";
import secondGroupImage from "../images/group_image_2.png";
import facebookLogo from "../images/facebook_logo.svg";
import twitterLogo from "../images/twitter_logo.svg";
import instagramLogo from "../images/insta_logo.svg";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-cover bg-center w-full bg-fixed min-h-screen">
      <header
        className="text-white h-20 flex justify-between items-center px-5 fixed w-full top-0 z-50"
        style={{ backgroundColor: "#E1D3B8" }}
      >
        <div className="flex items-center gap-2">
          <img className="w-14" src={theorybuddyLogo} alt="Buddy Up Logo" />
          <div>
            <p className="text-lg font-bold" style={{ color: "#D3674A" }}>
              Therapy
            </p>
            <p className="text-lg font-bold" style={{ color: "#D3674A" }}>
              Buddy
            </p>
          </div>
        </div>
        <div
          className={`absolute top-20 left-0 w-full bg-black transition-transform duration-300 ${
            menuOpen ? "flex flex-col justify-center items-center" : "hidden"
          } md:flex md:flex-row md:relative md:top-0 md:bg-transparent md:w-auto ${
            menuOpen ? "gap-x-12" : "gap-x-36"
          }`}
        >
          <a
            href="#"
            className="text-lg text-white font-semibold hover:text-gray-300 p-5 transition-colors duration-200"
            style={{ color: "#D3674A" }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg text-white font-semibold hover:text-gray-300 p-5 transition-colors duration-200"
            style={{ color: "#D3674A" }}
          >
            About
          </a>
          <a
            href="#"
            className="text-lg text-white font-semibold hover:text-gray-300 p-5 transition-colors duration-200"
            style={{ color: "#D3674A" }}
          >
            Mail
          </a>
          <div className="md:hidden mt-4">
            <button className="hover:bg-blue-700 text-white font-bold py-2 px-6 rounded bg-[#D3674A]">
              Join Us Now
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="hover:bg-blue-700 text-white font-bold py-2 px-6 rounded bg-[#D3674A]">
            Join Us Now
          </button>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="block md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </header>

      <section className="flex flex-col justify-center items-center text-center mt-20 w-full max-w-6xl mx-auto px-5">
        <div className="mt-20">
          <div className="text-3xl font-bold">
            <p
              style={{ color: "#D3674A", fontFamily: "Nunito" }}
              className="text-2xl md:text-6xl font-extrabold not-italic leading-normal"
            >
              Join Our Free Group
            </p>
            <p
              style={{ color: "#D3674A", fontFamily: "Nunito" }}
              className="text-2xl md:text-6xl font-extrabold not-italic leading-normal mt-4"
            >
              Therapy Sessions Today!
            </p>
          </div>
          <div>
            <div className="mt-8 text-base font-light md:text-lg">
              <p style={{ color: "#463426", fontFamily: "Nunito" }}>
                Find comfort and support in a community that understands you.
                Our free
              </p>
              <p style={{ color: "#463426", fontFamily: "Nunito" }}>
                group therapy sessions provide a safe space for sharing,
                healing, and
              </p>
              <p style={{ color: "#463426", fontFamily: "Nunito" }}>
                personal growth.
              </p>
            </div>
            <p className="text-lg font-bold mt-12">Join us for</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
              <button className="hover:bg-blue-700 text-white font-bold py-3 px-10 rounded bg-[#D3674A]">
                I need Therapy
              </button>
              <button className="hover:bg-blue-700 text-white font-bold py-3 px-10 rounded bg-[#D3674A] mt-5 md:mt-0">
                I give Therapy
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:flex lg:justify-end lg:items-center lg:w-full absolute right-0 top-0 mt-96 mr-5 z-10">
  <img
    src={firstGroupImage}
    alt="Group Therapy"
    className="w-20 h-30 object-cover lg:w-44 lg:h-56 opacity-50"
    style={{ backgroundColor: "none" }} // Semi-transparent white background
  />
</div>


      <section className="flex flex-col justify-center items-center text-center mt-32 w-full max-w-6xl mx-auto px-5">
        <p
          style={{ color: "#D3674A", fontFamily: "Nunito" }}
          className="text-2xl md:text-5xl font-extrabold not-italic leading-normal"
        >
          Group Therapy
        </p>
        <div className="mt-8 text-base font-light md:text-lg">
          <p style={{ color: "#463426", fontFamily: "Nunito" }}>
            Experience the benefits of shared healing and collective growth in a
          </p>
          <p style={{ color: "#463426", fontFamily: "Nunito" }}>
            supportive and compassionate environment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
          <div className="flex flex-col items-center">
            <p className="mt-4 text-xl">College Students</p>
            <div
              className="mt-4 border text-xl font-semibold text-black w-64 h-44 rounded-lg flex flex-col items-center justify-center"
              style={{ color: "#D3674A" }}
            >
              <button>Wednesday</button>
              <p className="mt-4 text-base">Timing</p>
              <p className="mt-4 text-base text-gray-500">
                10:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-4 text-xl">Freelancers/Founders</p>
            <div
              className="mt-4 border text-xl font-semibold text-black w-64 h-44 rounded-lg flex flex-col items-center justify-center"
              style={{ color: "#D3674A" }}
            >
              <button>Wednesday</button>
              <p className="mt-4 text-base">Timing</p>
              <p className="mt-4 text-base text-gray-500">
                10:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-4 text-xl">Working Professionals</p>
            <div
              className="mt-4 border text-xl font-semibold text-black w-64 h-44 rounded-lg flex flex-col items-center justify-center"
              style={{ color: "#D3674A" }}
            >
              <button>Wednesday</button>
              <p className="mt-4 text-base">Timing</p>
              <p className="mt-4 text-base text-gray-500">
                10:00 AM - 12:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center text-center mt-20 w-full max-w-6xl mx-auto px-5">
        <p
          style={{ color: "#D3674A", fontFamily: "Nunito" }}
          className="text-2xl md:text-5xl font-extrabold not-italic leading-normal"
        >
          Why Choose Us?
        </p>
        <div className="max-w-4xl container mx-auto py-12 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Integrity */}
            <div className="flex-1 p-4">
              <h2
                className="text-xl md:text-2xl font-semibold text-center mb-6 border w-56 h-12 bg-gray-200 pt-2"
                style={{ color: "#D3674A", fontFamily: "Nunito", margin: "auto", marginBottom: "20px"
                }}
                >
                  Integrity
                </h2>
                <ul className="list-disc pl-5 text-base text-left md:text-lg">
                  <li>Honest and transparent interactions</li>
                  <li>Accurate, truthful information</li>
                  <li>Ethical practices ensuring your well-being</li>
                  <li>Trust-based, respectful relationship</li>
                  <li>Safe, supportive therapy environment</li>
                </ul>
              </div>
  
              {/* Professionalism */}
              <div className="flex-1 p-4">
                <h2
                  className="text-xl md:text-2xl font-semibold text-center mb-6 border w-56 h-12 bg-gray-200 pt-2"
                  style={{ color: "#D3674A", fontFamily: "Nunito", margin: "auto", marginBottom: "20px" }}
                >
                  Professionalism
                </h2>
                <ul className="list-disc pl-5 text-base text-left md:text-lg">
                  <li>Licensed, empathetic therapists</li>
                  <li>Adherence to professional standards</li>
                  <li>Prompt, thorough care</li>
                  <li>Focus on your unique needs</li>
                  <li>Committed to best mental health outcomes</li>
                </ul>
              </div>
  
              {/* Confidentiality */}
              <div className="flex-1 p-4">
                <h2
                  className="text-xl md:text-2xl font-semibold text-center mb-8 border w-56 h-12 bg-gray-200 pt-2"
                  style={{ color: "#D3674A", fontFamily: "Nunito", margin: "auto", marginBottom: "20px" }}
                >
                  Confidentiality
                </h2>
                <ul className="list-disc pl-5 text-base text-left md:text-lg">
                  <li>Prioritizing your privacy</li>
                  <li>Secure data handling</li>
                  <li>Adherence to legal and ethical guidelines</li>
                  <li>Safe space for personal issues</li>
                  <li>Trustworthy, confidential environment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 w-full max-w-4xl container mx-auto py-12 px-4 flex flex-wrap justify-center gap-12">
  {/* Therapy Buddy */}
  <div className="flex-1 p-4 max-w-xs">
    <h2
      className="text-xl font-semibold text-left mb-6 pt-2"
      style={{ color: "#D3674A", fontFamily: "Nunito" }}
    >
      Therapy Buddy
    </h2>
    <p className="text-sm font-thin" style={{ fontFamily: "Nunito", lineHeight: "normal" }}>
      Hello, we are ABC, trying to make an effort to put the right people for you to get the best results. Just insight
    </p>
    <input type="text" placeholder="🔍 search" className="border border-gray-300 p-2 mt-4 w-full" />
    <div className="flex justify-start gap-4 mt-4">
      <img src={facebookLogo} alt="Facebook" />
      <img src={twitterLogo} alt="Twitter" />
      <img src={instagramLogo} alt="Instagram" />
    </div>
  </div>

  {/* Product */}
  <div className="flex-1 p-4 max-w-xs">
    <h2
      className="text-xl font-semibold text-left mb-6 pt-2"
      style={{ color: "#D3674A", fontFamily: "Nunito" }}
    >
      Product
    </h2>
    <ul className="text-sm font-thin" style={{ fontFamily: "Nunito", lineHeight: "normal" }}>
      <li className="mb-2">Autocapture</li>
      <li className="mb-2">Data Governance</li>
      <li className="mb-2">Virtual Events</li>
      <li className="mb-2">Virtual Users</li>
      <li className="mb-2">Behavioral Analytics</li>
      <li className="mb-2">Behavioral Analytics</li>
      <li className="mb-2">Connect</li>
    </ul>
  </div>

  {/* Explore */}
  <div className="flex-1 p-4 max-w-xs">
    <h2
      className="text-xl font-semibold text-left mb-6 pt-2"
      style={{ color: "#D3674A", fontFamily: "Nunito" }}
    >
      Explore
    </h2>
    <ul className="text-sm font-thin" style={{ fontFamily: "Nunito", lineHeight: "normal" }}>
      <li className="mb-2">Resource</li>
      <li className="mb-2">Blog</li>
      <li className="mb-2">Document</li>
    </ul>
  </div>

  {/* Company */}
  <div className="flex-1 p-4 max-w-xs">
    <h2
      className="text-xl font-semibold text-left mb-6 pt-2"
      style={{ color: "#D3674A", fontFamily: "Nunito" }}
    >
      Company
    </h2>
    <ul className="text-sm font-thin" style={{ fontFamily: "Nunito", lineHeight: "normal" }}>
      <li className="mb-2">About us</li>
      <li className="mb-2">Partners</li>
      <li className="mb-2">Customers</li>
      <li className="mb-2">Document</li>
    </ul>
  </div>
   </section>  
        <footer className="text-white h-14 flex justify-between text-center items-center px-5 mt-5" style={{ backgroundColor: "#E1D3B8",textAlign:"center" }}>
          <p>&copy; 2024 Therapy Buddy. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default Home;
  