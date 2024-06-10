import React from "react";
import {
  FaCarSide,
  FaCircleCheck,
  FaHeadphones,
  FaWallet,
} from "react-icons/fa6";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl text-primary md:text-5xl" />,
    title: "Free Shipping",
    description: "Free Shipping On All Orders",
  },
  {
    id: 2,
    icon: <FaCircleCheck className="text-4xl text-primary md:text-5xl" />,
    title: "Safe Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl text-primary md:text-5xl" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-4xl text-primary md:text-5xl" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-4">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start gap-4 sm:flex-row"
            >
              {data.icon}
              <div>
                <h1 className="font-bold lg:text-xl">{data.title}</h1>
                <h1 className="text-sm text-gray-400">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
