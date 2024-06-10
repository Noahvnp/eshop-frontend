import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="flex min-h-[550px] items-center justify-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 items-center gap-6 rounded-3xl text-white md:grid-cols-3"
        >
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="text-4xl font-bold uppercase lg:text-7xl"
            >
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
          </div>
          <div data-aos="zoom-in" className="flex h-full items-center">
            <img
              src={data.image}
              alt=""
              className="mx-auto w-[250px] scale-125 object-cover drop-shadow-2xl md:w-[340px]"
            />
          </div>
          <div className=" flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-in" className="text-xl font-bold">
              {data.title2}
            </p>
            <p data-aos="fade-up" className="text-3xl font-bold sm:text-5xl ">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-sm leading-5 tracking-wide">
              {data.title4}
            </p>
            <div>
              <button
                data-aos="fade-up"
                data-aos-offset="0"
                style={{ color: data.bgColor }}
                className="rounded-full bg-white px-4 py-2"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
