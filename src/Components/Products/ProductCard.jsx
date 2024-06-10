import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-4">
        {/* Card Section */}
        {data.map((data, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosdelay}
            className="group"
            key={index}
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] rounded-md object-cover"
              />
              {/* Hover button */}
              <div
                className="absolute left-1/2 top-1/2 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 items-center
                justify-center text-center duration-200 group-hover:flex group-hover:backdrop-blur-sm"
              >
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
