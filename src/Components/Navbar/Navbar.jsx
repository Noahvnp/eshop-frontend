import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    title: "About",
    link: "/#about",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    title: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    title: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    title: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="relative z-40 bg-white duration-200 dark:bg-gray-900 dark:text-white">
      <div className="py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-2xl font-semibold uppercase tracking-widest text-primary sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks?.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
                {/* Drop dowm */}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] py-2 font-semibold text-gray-500 dark:hover:text-white"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="duration-300 group-hover:rotate-180" />
                    </span>
                  </a>
                  {/* Drop down links */}
                  <div
                    className="absolute z-[9999] hidden w-[200px] rounded-md bg-white p-3
                  text-black shadow-md group-hover:block dark:bg-gray-900 dark:text-white"
                  >
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 font-semibold text-gray-500 
                            duration-200 hover:bg-primary/20 hover:text-black dark:hover:text-white"
                          >
                            {data.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            {/* Search */}
            <div className="group relative hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-600 
                            duration-200 group-hover:text-primary dark:text-gray-400"
              />
            </div>
            {/* Order Cart */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div
                className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center
              rounded-full bg-red-500 text-xs text-white"
              >
                4
              </div>
            </button>
            {/* Dark mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
