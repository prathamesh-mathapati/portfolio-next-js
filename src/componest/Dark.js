import React, { useState } from "react";
import "./Dark.css";
import { MdDarkMode } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";

export const Dark = () => {
  const [darkMode, setDark] = useState(false);
  const handelDarkmode = () => {
    setDark(!darkMode);
  };
  return (
    <div
      className={`dark-mode-class ${darkMode ? "dark-mode" : "light-mode"}`}
      onClick={handelDarkmode}
    >
      {darkMode ? (
        <>
          {" "}
          <MdDarkMode />
          <p>Dark Mode</p>
        </>
      ) : (
        <>
          <MdWbSunny />
          <p>light Mode</p>
        </>
      )}
    </div>
  );
};
