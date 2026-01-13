import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";

const STORAGE_THEME = "portfolio.theme";

function App() {
  const [themeName, setThemeName] = useState(() => {
    return window.localStorage.getItem(STORAGE_THEME) || "dark";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_THEME, themeName);
  }, [themeName]);

  const theme = useMemo(() => {
    return themeName === "light" ? lightTheme : darkTheme;
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main
            theme={theme}
            themeName={themeName}
            onToggleTheme={toggleTheme}
          />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
