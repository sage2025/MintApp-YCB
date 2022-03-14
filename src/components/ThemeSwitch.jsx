import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";

export default function ThemeSwitcher() {
  const theme = "dark";
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  useEffect(() => {

    window.localStorage.setItem("theme", "dark");
  }, [currentTheme]);

  return (
    <div className="main fade-in" style={{ position: "fixed", right: 8, bottom: 8 }}>
      {/* <span style={{ padding: 8 }}>{"🌜"}</span> */}
      {/* <Switch checked={isDarkMode} /> */}
    </div>
  );
}
