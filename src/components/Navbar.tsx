import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: `/`},
    { id: 2, text: "About the test" },
    { id: 3, text: "Take the test", url:"/Takethetest" },
    { id: 4, text: "Meet the Dev" },
  ];

  return (
    <div className="flex justify-between items-center h-24 w-full mx-auto text-white px-16">
      <div className="flex flex-row justify-between w-full">
        <div>
          <h1 className="w-full pt-2 text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500  inline-block text-transparent bg-clip-text">
            Persona Probe
          </h1>
        </div>
        <div className="flex flex-row hidden md:flex">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              onClick={()=>{
                navigate(`${item.url}`)
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mx-2 my-4">
          Persona Probe
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
