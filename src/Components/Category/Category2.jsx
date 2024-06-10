import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="to-gray-1000 relative flex h-[320px] items-end rounded-3xl 
            bg-gradient-to-br from-gray-300/90 py-10 pl-5 text-white sm:col-span-2"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-2 text-4xl font-bold opacity-40 lg:text-5xl">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="img1"
              className="absolute -right-0 top-1/2 w-[250px] -translate-y-1/2"
            />
          </div>
          <div
            className="relative flex h-[320px] items-start rounded-3xl 
          bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 py-10 pl-5 text-white"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-2 text-4xl font-bold opacity-20 lg:text-5xl">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="img1"
              className="absolute bottom-0 w-[300px] "
            />
          </div>
          <div
            className="relative flex h-[320px] items-start rounded-3xl
             bg-gradient-to-br from-brandBlue to-brandBlue/90 py-10 pl-5 text-white"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-2 text-4xl font-bold opacity-40 lg:text-5xl">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="img2"
              className="absolute bottom-0 right-0 w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
