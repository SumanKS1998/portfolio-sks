import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { ScrollerMotion } from "scroller-motion";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ScrollerMotion>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ScrollerMotion>
  );
}

export default App;
