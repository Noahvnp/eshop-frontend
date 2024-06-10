import React from "react";
import Heading from "../Services/Heading";

import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eiusmod tempor incididunt ut labore et dolore mag. Porro?",
    publised: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosdelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eiusmod tempor incididunt ut labore et dolore mag. Porro?",
    publised: "Jan 20, 2024 by Satya",
    image: Img2,
    aosdelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eiusmod tempor incididunt ut labore et dolore mag. Porro?",
    publised: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosdelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/* Blog section */}
        <div className="grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-7">
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosdelay}
              className="bg-white dark:bg-gray-900"
              key={data.title}
            >
              {/* Image section */}
              <div className="mb-2 overflow-hidden rounded-2xl">
                <img
                  src={data.image}
                  alt=""
                  className="h-[220px] w-full rounded-2xl object-cover duration-500 hover:scale-105"
                />
              </div>
              {/* Content seciton */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.publised}</p>
                <p className="line-clamp-1 font-bold">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
