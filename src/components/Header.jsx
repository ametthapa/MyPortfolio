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
    <div className="flex justify-end p-5 max-w-6xl m-auto">
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
          <button className="bg-darkBlue text-white px-5 py-2 font-semibold hover:underline">
            Hire Me
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
