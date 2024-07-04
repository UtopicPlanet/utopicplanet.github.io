import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import websiteLogo from "../images/new_webiste_logo.png";
import instaLogo from "../images/insta_logo.svg";
import twitterLogo from "../images/twitter_logo.svg";
import linkdinLogo from "../images/linkdin_logo.svg";
import bg_2 from "../images/bg_2.png";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-cover bg-center w-full bg-fixed min-h-screen">
      {/* header */}
      <header
        className="text-white h-26 flex justify-between items-center p-5  w-full top-0 z-50"
        style={{ backgroundColor: "#E1D3B8" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div>
            <img
              className={`w-20 transition-transform duration-300 `}
              src={websiteLogo}
              alt="Buddy Up Logo"
            />
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-lg font-bold" style={{ color: "#D3674A" }}>
            support@therapybuddy.io
          </p>
          <p className="text-lg font-bold" style={{ color: "#D3674A" }}>
          +91-70057-06432
          </p>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="block md:hidden text-2xl cursor-pointer transition-transform duration-300 hover:scale-125"
          onClick={toggleMenu}
        />
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute h-26 left-0 w-full bg-black p-5 flex flex-col items-center md:hidden"
          style={{ zIndex: 49 }}
        >
          <div>
            <p className="text-lg font-bold" style={{ color: "#D3674A" }}>
            +91-70057-06432
            </p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold" style={{ color: "#D3674A" }}>
              support@therapybuddy.io
            </p>
          </div>
        </div>
      )}

      <section className="flex flex-col justify-center items-center text-center w-full max-w-6xl mx-auto px-5">
        <div className="mt-20">
          <div
            style={{ color: "#D3674A", fontFamily: "Nunito" }}
            className="text-3xl md:text-6xl font-extrabold not-italic leading-normal"
          >
            <p>Join Our Free Group</p>
            <p className=" md:mt-8">Therapy Sessions Today!</p>
          </div>
          <div>
            <div className="mt-8 text-lg font-light md:text-xl">
              <p style={{ color: "#463426", fontFamily: "Nunito" }}>
                It may seem far, but there is light at the end of the tunnel.
              </p>
              <p
                style={{
                  color: "#463426",
                  fontFamily: "Nunito",
                  marginTop: "0.5rem",
                }}
              >
                Hold our hand and let's go through it together.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
              <button
                className="text-white md:w-1/2 font-bold cursor-pointer py-3 px-10 rounded bg-[#D3674A] md:w-1/2"
                onClick={() =>
                  (window.location.href = "https://bit.ly/4bd4Mlx")
                }
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-col gap-x-32 justify-evenly mt-20 md:flex justify-center items-center text-center mt-20 w-full max-w-6xl mx-auto px-5 md:flex-row ">
          <div className="p-5">
            <img src={bg_2} alt="" />
          </div>
          <div className="text-left">
            <h2
              className="text-3xl md:text-5xl font-extrabold mt-6"
              style={{ color: "#D3674A", fontFamily: "Nunito" }}
            >
              What is
            </h2>
            <h2
              className="text-3xl md:text-5xl font-extrabold mb-8"
              style={{ color: "#D3674A", fontFamily: "Nunito" }}
            >
              Therapy Buddy?
            </h2>
            <p
              className="text-lg md:text-xl font-light mb-8"
              style={{ color: "#463426", fontFamily: "Nunito" }}
            >
              Therapy Buddy is an end-to-end tool for psychotherapists to get
              discovered by clients and manage their practice efficiently.
            </p>
            <p
              className="text-lg md:text-xl font-light mb-8"
              style={{ color: "#463426", fontFamily: "Nunito" }}
            >
              Here's what we have recognized for early-career therapists,
              specifically:
            </p>
            <ul
              className="list-disc pl-5 text-lg font-bold md:text-xl font-light mb-8"
              style={{ color: "#463426", fontFamily: "Nunito" }}
            >
              <li>Difficulty in finding supervisors</li>
              <li>Difficulty in finding clients</li>
              <li>High commission rates of 3rd party platforms</li>
            </ul>

            <p
              className="text-lg md:text-xl font-light mb-8"
              style={{ color: "#463426", fontFamily: "Nunito" }}
            >
              1st Phase Development will end by mid-July and we don't plan to
              charge commissions ever.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center w-full max-w-6xl mx-auto px-5">
        <div className="mt-20"></div>
      </section>

      <footer
        className="text-black h-auto flex flex-col justify-center text-center items-center px-5"
        style={{ backgroundColor: "#E1D3B8", textAlign: "center" }}
      >
        <img className="w-20 mt-4" src={websiteLogo} alt="Buddy Up Logo" />
        <p className="text-lg font-bold mt-4" style={{ color: "#D3674A" }}>
          Empowering Mental Health Practitioners!
        </p>
        <div>
          <div className="flex gap-6 justify-center mt-2">
            <img
              className="cursor-pointer w-4 h-4"
              src={instaLogo}
              alt="instagram"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/therapybuddyio/",
                  "_blank"
                )
              }
            />
            <img
              className="cursor-pointer w-4 h-4"
              src={twitterLogo}
              alt="twitter"
              onClick={() =>
                window.open("https://x.com/TherapyBuddyIO", "_blank")
              }
            />
            <img
              className="cursor-pointer w-4 h-4"
              src={linkdinLogo}
              alt="linkdin"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/103322295/admin/feed/posts/",
                  "_blank"
                )
              }
      
            />
          </div>
          <p
            className="text-lg mt-4 font-semibold"
            style={{ color: "#D3674A" }}
          >
            +91-70057-06432
          </p>
          <p className="text-lg  font-semibold" style={{ color: "#D3674A" }}>
            support@therapybuddy.io
          </p>
        </div>
        <div
          className="text-lg mt-4 font-semibold"
          style={{ color: "#D3674A" }}
        >
          <p>Mohali, Punjab, India, 140308</p>
          <p>© 2024 by Therapy Buddy. All rights reserved.</p>
        </div>
        <div
          className="text-lg mt-4 font-semibold flex justify-center flex-wrap gap-2"
          style={{ color: "#D3674A" }}
        >
          <p
            onClick={() =>
              window.open("https://www.utopicplanet.org/terms", "_blank")
            }
            className="cursor-pointer"
            style={{ color: "#D3674A" }}
          >
            Terms Of Use&nbsp;
          </p>
          <p
            onClick={() =>
              window.open("https://www.utopicplanet.org/privacy", "_blank")
            }
            className="cursor-pointer"
            style={{ color: "#D3674A" }}
          >
              | Privacy Policy&nbsp; 
          </p>
          <p
            onClick={() =>
              window.open("https://www.utopicplanet.org/cancellation", "_blank")
            }
            className="cursor-pointer"
            style={{ color: "#D3674A" }}
          >
            | Cancellation Policy&nbsp;
          </p>
          <p
            onClick={() =>
              window.open("https://www.utopicplanet.org/refunds", "_blank")
            }
            className="cursor-pointer"
            style={{ color: "#D3674A" }}
          >
            | Refunds Policy&nbsp;  
          </p>
          <p
            onClick={() =>
              window.open("https://www.utopicplanet.org/offers", "_blank")
            }
            className="cursor-pointer"
            style={{ color: "#D3674A" }}
          >
            | Offers Policy{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
