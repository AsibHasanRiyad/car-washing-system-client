import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // State for toggling submenu

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onToggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between w-full px-4 mx-auto text-white bg-teal-400 lg:px-10">
      <div>
        <img
          className="w-16 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
          alt="logo"
        />
      </div>

      <div
        className={`absolute md:static duration-500 text-2xl md:text-base bg-gray-800 md:bg-transparent md:min-h-fit  ${
          menuOpen
            ? "right-0 h-[90vh] md:h-fit flex justify-center items-center"
            : "right-[-100%] h-[90vh] md:h-fit"
        } top-full md:w-auto w-full flex items-center px-5`}
      >
        <ul
          className={`flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8 ${
            !menuOpen && "hidden md:flex"
          }`}
        >
          {/* Slot Menu Item with Submenu */}
          <li className="relative group">
            {/* Main Slot Menu */}
            <a
              className="cursor-pointer hover:text-gray-500"
              onClick={onToggleSubmenu}
            >
              Slot
            </a>

            {/* Submenu */}
            <ul
              className={`absolute md:absolute md:group-hover:block ${
                submenuOpen ? "block" : "hidden"
              } bg-gray-700 md:bg-white text-white md:text-white rounded-lg shadow-lg p-4 top-full left-0 w-40 md:w-48`}
            >
              <li className="hover:text-gray-400">
                <a href="#">Slot 1</a>
              </li>
              <li className="hover:text-gray-400">
                <a href="#">Slot 2</a>
              </li>
              <li className="hover:text-gray-400">
                <a href="#">Slot 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Solution
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Resource
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Developers
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar buttons */}
      <div className="flex items-center gap-6">
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Sign in
        </button>

        {/* Mobile menu icon */}
        <button
          onClick={onToggleMenu}
          name={menuOpen ? "close" : "menu"}
          className="text-3xl cursor-pointer md:hidden"
        >
          <CiMenuBurger />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
