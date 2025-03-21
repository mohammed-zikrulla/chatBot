import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Switch } from "@mui/material";

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch checked={isDarkMode} onChange={toggleTheme} />
  );
};

export default DarkModeToggle;
