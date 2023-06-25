import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { ScrollerMotion } from "scroller-motion";
import AppContext from "./context/AppContext";
import Loader from "./components/common/Loader";

function App() {
  const [appLoading, setAppLoading] = useState(false);
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const completeLoading = () => {
    setTimeout(() => {
      setAppLoading(false);
    }, 1000);
  };
  return (
    <AppContext.Provider value={{ completeLoading, appLoading }}>
      <ThemeProvider theme={theme}>
        {appLoading && <Loader />}
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
