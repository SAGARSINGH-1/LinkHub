import React from "react";
import { LuMenu } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { useStore } from "../../store/store";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useStore();

  //console.log(darkMode);

  return (
    <>
      <div className={`rounded-md ${ darkMode ? `bg-slate-800` : 'bg-slate-100'}`}>
        <div className="flex flex-row md:gap-10 items-center justify-between w-full max-w-7xl mx-auto p-3">
          <div className="header-row ">
            <h1>Link Hub</h1>
          </div>

          <div className="flex gap-5">
           
              <div className="flex items-center justify-center flex-col">
                <label className="relative inline-block w-14 h-7">
                  <input
                    type="checkbox"
                    className="opacity-0 w-0 h-0"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition duration-400 ${ darkMode ? 'bg-slate-500' : 'bg-gray-300'}`}></span>
                  <span className={`circle absolute cursor-pointer h-5 w-5 bg-white rounded-full top-1 transition duration-300 ease-in-out ${ darkMode ? 'left-8' : 'left-1.5'}`}></span>
                </label>
              </div>
           

            <div>
              <button className="bg-green-400 text-white px-3 py-1 rounded-md hover:bg-green-500">SignUp</button>
              {/* <FaCircleUser size="1.5em" /> */}
            </div>

            <div>
              <LuMenu size="1.5em" className="mt-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
