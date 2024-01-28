import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { useStore } from "../../store/store";

export default function AddLinks() {

  const {darkMode} = useStore();


  return (
    <div>
      <div className="flex justify-around flex-wrap">
        <div className="flex flex-col items-center my-auto">
          <h1 className="text-xl font-semibold">Add Links</h1>

          <div className={`flex text rounded-md p-3 m-2 h-[7vh] w-[30vw] ${darkMode ? "bg-slate-700 text-gray-100" : "bg-gray-200"}`}>
            <FaTwitter size="1.5em" className="my-auto" />
            <input
              type="text"
              className={`text bg-gray-200 px-3 mx-2 w-full outline-none ${darkMode ? "bg-slate-700" : "bg-gray-200"}`}
              placeholder="Links..."
            />
          </div>

          <div className={`flex text rounded-md p-3 m-2 h-[7vh] w-[30vw] ${darkMode ? "bg-slate-700 text-gray-100" : "bg-gray-200"}`}>
            <FaTwitter size="1.5em" className="my-auto" />
            <input
              type="text"
              className={`text bg-gray-200 px-3 mx-2 w-full outline-none ${darkMode ? "bg-slate-700" : "bg-gray-200"}`}
              placeholder="Links..."
            />
          </div>

          <div className={`flex text rounded-md p-3 m-2 h-[7vh] w-[30vw] ${darkMode ? "bg-slate-700 text-gray-100" : "bg-gray-200"}`}>
            <FaTwitter size="1.5em" className="my-auto" />
            <input
              type="text"
              className={`text bg-gray-200 px-3 mx-2 w-full outline-none ${darkMode ? "bg-slate-700" : "bg-gray-200"}`}
              placeholder="Links..."
            />
          </div>

          <div className={`flex text rounded-md p-3 m-2 h-[7vh] w-[30vw] ${darkMode ? "bg-slate-700 text-gray-100" : "bg-gray-200"}`}>
            <FaTwitter size="1.5em" className="my-auto" />
            <input
              type="text"
              className={`text bg-gray-200 px-3 mx-2 w-full outline-none ${darkMode ? "bg-slate-700" : "bg-gray-200"}`}
              placeholder="Links..."
            />
          </div>
          
          <button className="bg-green-400 text-white px-3 py-1 rounded-md">
            Add Links
          </button>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-center text-lg font-semibold">Preview</h1>
          <div className="my-5">
            <img src="../phone.png" alt="phone"/>
          </div>

          <div className="flex">
            <div className={`flex text rounded-md p-3 m-2 h-[7vh] w-[25vw] ${darkMode ? "bg-slate-700 text-gray-100" : "bg-gray-200"}`}>
              <input
                type="text"
                className={`text px-3 mx-2 w-full outline-none ${darkMode ? "bg-slate-700" : "bg-gray-200"}`}
                placeholder="Generated Links"
                readOnly
              />
            </div>

            <button className="bg-green-400 text-white px-5 py-1  m-2 rounded-md">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
