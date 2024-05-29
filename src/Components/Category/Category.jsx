import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="relative flex h-[320px] items-end
           rounded-3xl bg-gradient-to-br from-black/90 to-black/70 py-10 pl-5 text-white"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="mb-[2px] text-2xl font-semibold">With</p>
                <p className="mb-2 text-4xl font-bold opacity-20 lg:text-5xl">
                  Earphone
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
              className="absolute bottom-0 w-[300px] "
            />
          </div>
          <div
            className="relative flex h-[320px] items-end
           rounded-3xl bg-gradient-to-br from-brandYellow to-brandYellow/90 py-10 pl-5 text-white"
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
                  textColor="text-brandYellow"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="img2"
              className="absolute -right-4 w-[250px] lg:top-[40px]"
            />
          </div>
          <div
            className="relative col-span-2 flex h-[320px] items-end
           rounded-3xl bg-gradient-to-br from-primary to-primary/90 py-10 pl-5 text-white"
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
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="img3"
              className="absolute -right-0 top-1/2 w-[250px] -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
