import "./style.css";
import { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";

const Introduction = () => {
  const ToggleDarkTheme = () =>{

  }
  const ToggleLightTheme = () =>{
    
  }

  useEffect(() => {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    const textArray = [" Web", "React"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.innerHTML += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.innerHTML = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    setTimeout(type, newTextDelay + 250);
  });

  return (
    <div className="lg:flex justify-between md:grid md:grid-cols-1 pt-12 pb-28">
      <div className="col-span-2">
        <div className="text-xl py-5">Hi there!</div>
        <div className="text-darkBlack text-4xl font-bold pb-5">
          Amrit Thapa.
        </div>
        <div className="text-darkBlue font-semibold text-xl pb-5">
          <span className="typed-text"></span> Developer
          <span
            className="bg-darkBlue inline-block ml-1 w-1 cursor"
            id="cursor"
          >
            &nbsp;
          </span>
        </div>
        <div className="pb-5">
          <ul className="flex text-lightBlack">
            <li className="pr-2">Fast Learner,</li>
            <li className="pr-2">Self Motivated,</li>
            <li>Energetic</li>
          </ul>
        </div>
        <div className="flex mb-5 md:p-0">
          <a
            href="https://www.facebook.com/one.polar27/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer h-10 w-10 mr-2 rounded-full border border-gray-200 flex justify-center items-center transition ease-in duration-300 hover:-translate-y-2">
              <CgFacebook className="h-4 w-4" />
            </div>
          </a>
          <a
            href="https://github.com/ametthapa"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer h-10 w-10 mr-2 rounded-full border border-gray-200 flex justify-center items-center hover:bg-primary transition ease-in duration-300 hover:-translate-y-2">
              <FaGithub className="h-4 w-4" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/amritthapa27/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer h-10 w-10 mr-2 rounded-full border border-gray-200 flex justify-center items-center hover:bg-primary transition ease-in duration-300 hover:-translate-y-2">
              <FaLinkedinIn className="h-4 w-4" />
            </div>
          </a>
          <a
            href="https://www.hackerrank.com/amet_thapa27"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer h-10 w-10 mr-2 rounded-full border border-gray-200 flex justify-center items-center hover:bg-primary transition ease-in duration-300 hover:-translate-y-2">
              <FaHackerrank className="h-4 w-4" />
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/18PKTtBDwG5meV_0TODqZPQLVCVjf8R-T/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="bg-darkBlue text-white px-5 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-2">
              Get Resume
            </button>
          </a>
          <Link to="/about">
            <button className="text-white px-5 py-2 ml-5 font-semibold rounded-md border border-darkBlue text-lightBlack transition ease-in duration-300 hover:-translate-y-2">
              About Me
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-1">
        <img
          src="../image/PP.jpg"
          alt="Profile"
          className="h-72 rounded-full"
        />
        {/* <div className="flex flex-col justify-between">
          <div>Wanna Change theme?</div>
          <div className="flex justif-between">
            <div className="bg-darkBlack text-white p-2" onClick={ToggleDarkTheme}><button>Dark</button></div>
            <div className="bg-white border border-gray-200 p-2 text-darkBlack ml-10" onClick={ToggleLightTheme}><button>Light</button></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Introduction;
