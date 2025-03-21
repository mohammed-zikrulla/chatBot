import React from "react";
import { HeaderContainer, ToggleButton } from "../../styles";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <h2>AI Chat</h2>
      <ToggleButton onClick={toggleTheme}>Toggle Dark Mode</ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
