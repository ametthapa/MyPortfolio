import { Link } from "react-router-dom";
const MenuItems = [
  {
    title: "about",
  },
  {
    title: "projects",
  },
  {
    title: "contact",
  },
];

const Header = () => {
  return (
    <div className="flex justify-end py-5">
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
  );
};
export default Header;
