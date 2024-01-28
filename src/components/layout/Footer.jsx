import React from "react";
import { useStore } from "../../store/store";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const { darkMode } = useStore();

  return (
    <div>
      <div
        className={`${
          darkMode ? `dark:bg-slate-950 text-white` : "bg-slate-100"
        }`}
      >
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1
                className={`max-w-lg text-xl font-semibold tracking-tight  xl:text-2xl `}
              >
                Subscribe LinkHub to get an update.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className={`px-4 py-2 rounded-md outline-none bg-gray-200 ${
                    darkMode
                      ? `dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 `
                      : "text-gray-700 "
                  }`}
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <p className="font-semibold ">Quick Link</p>

              <div className="flex flex-col items-start mt-3 space-y-2">
                <div className="flex flex-col items-start mt-3 space-y-2">
                  <p className="hover:text-green-500 transition duration-300">
                    Templates
                  </p>
                  <p className="hover:text-green-500 transition duration-300">
                    Contact Us
                  </p>
                  <p className="hover:text-green-500 transition duration-300">
                    Help
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold ">Services</p>

              <div className="flex flex-col items-start mt-3 space-y-2">
                <p className="hover:text-green-500 transition duration-300">
                  Copyright
                </p>
                <p className="hover:text-green-500 transition duration-300">
                  Policy
                </p>
                <p className="hover:text-green-500 transition duration-300">
                  License
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

          <div className="flex items-center justify-between mx-5">
            <div>LinkHub</div>

            <div class="flex gap-5">
              <FaTwitter size="1.5em" />
              <FaFacebook size="1.5em" />
              <FaGithub size="1.5em" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
