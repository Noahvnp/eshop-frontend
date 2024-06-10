import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaMobile,
  FaTwitter,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid pb-20 pt-5 md:grid-cols-3">
          {/* Company detail */}
          <div className="px-4 py-8">
            <a
              href="#"
              className="text-2xl font-semibold uppercase tracking-widest text-primary sm:text-3xl"
            >
              Eshop
            </a>
            <p className="pt-3 text-gray-600 dark:text-white/70 lg:pr-24">
              Lorem ipsum dolor sit, amet consectetur adipicising elit. Maiores
              alias cum
            </p>
          </div>

          {/* Footer Links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 duration-300 hover:text-black dark:text-gray-400 hover:dark:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 duration-300 hover:text-black dark:text-gray-400 hover:dark:text-white"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="col-span-2 px-4 py-8 sm:col-auto">
              <h1 className="mb-3 text-xl font-bold sm:text-left">Address</h1>
              <div className="">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Can Tho, Viet Nam</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <FaMobile />
                  <p>+84123456789</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href="#">
                    <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaLinkedinIn className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaTwitter className="text-3xl duration-300 hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
