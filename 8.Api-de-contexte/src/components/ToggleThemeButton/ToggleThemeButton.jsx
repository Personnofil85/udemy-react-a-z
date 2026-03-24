import { useContext } from "react";
import "./ToggleThemeButton.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { ThemeContext } from "../../context/ThemeProvider.jsx";

export default function ToggleThemeButton() {
  const { toggleTheme, darkMode } = useContext(ThemeContext);
  console.log(darkMode, toggleTheme);

  return (
    <button className="toggle-theme-btn" onClick={toggleTheme}>
      <span>Go {darkMode ? "Light" : "Dark"}</span>
      <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  );
}
