import React, { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    // localStorage.getItem("theme") === "dark" ? true : false,
    window.matchMedia("(prefers-color-scheme:dark)").matches,
  );
  useEffect(() => {
    const elementDocument = document.documentElement;
    // localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      elementDocument.classList.add("dark");
      //   elementDocument.classList.remove("light");
    } else {
      //   elementDocument.classList.add("light");
      elementDocument.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <img
        src={isDarkMode ? DarkButton : LightButton}
        alt="mode-button"
        className="w-12 cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
};

export default DarkMode;
