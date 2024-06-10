import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/50 backdrop-blur-sm">
            <div
              className="fixed left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white 
                  p-4 shadow-md duration-200 dark:bg-gray-900 dark:text-white"
            >
              <div className="flex items-center justify-between">
                <h1>Order now</h1>
                <div>
                  <IoMdClose
                    className="cursor-pointer text-2xl"
                    onClick={handleOrderPopup}
                  />
                </div>
              </div>
              <div className="mt-4">
                <input type="text" placeholder="Name" className="form-input" />
                <input type="text" placeholder="Email" className="form-input" />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input"
                />
                <div className="flex justify-center">
                  <Button
                    text="Order now"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
