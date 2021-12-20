import { Link } from "react-router-dom";
import {useState} from "react";
import { CgMenu } from "react-icons/cg";

const MenuItems = [
  {
    title: "about",
  },
  {
    title: "projects",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const ToggleSwitch = () =>{
    show ? setShow(false) : setShow(true);
  };
  return (
    <>
    {/* Desktop View */}
      <div className="hidden md:flex justify-end py-5">
        <ul className="flex">
          <li className="px-5 capitalize text-darkBlue font-semibold text-lg hover:underline">
            <Link to="/" className="">
              Home
            </Link>
          </li>
          {MenuItems.map((item) => {
            return (
              <li className="px-5 capitalize text-darkBlue font-semibold text-lg hover:underline">
                <Link to={item.title} className="">
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
          <a
            href="mailto: amet.thapa27@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="bg-darkBlue text-white px-5 py-2 font-semibold hover:underline outline-none">
              Hire Me
            </button>
            </a>
          </li>
        </ul>
      </div>
    
      {/* Mobile View */}
     <div className="md:hidden">
      <div
          className="bg-darkBlue h-10 text-darkBlack font-bold flex items-center p-6 pl-10 cursor-pointer"
          onClick={ToggleSwitch}
        >
          <CgMenu className="h-6 w-6 mr-2" />
          MENU
        </div>
        {show  ? (
        <div className="flex justify-center items-center py-5">
          
          <ul className="">
            <li className="py-2 capitalize text-darkBlue font-semibold text-lg hover:underline">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            {MenuItems.map((item) => {
              return (
                <li className="py-2 capitalize text-darkBlue font-semibold text-lg hover:underline">
                  <Link to={item.title} className="">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
            <a
              href="mailto: amet.thapa27@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="bg-darkBlue text-white px-5 py-2 font-semibold hover:underline outline-none">
                Hire Me
              </button>
              </a>
            </li>
          </ul>
        </div>
        ): null};
      </div> 
      </>
  );
};
export default Header;
