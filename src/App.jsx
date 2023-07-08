import { useState, useMemo, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Stack,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AppContext from "./context/AppContext";
import Loader from "./components/common/Loader";
import { FooterText } from "./components/styles/fonts";
import PhoneLoader from "./components/common/phone/PhoneLoader";

function App() {
  let theme = createTheme();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  theme = responsiveFontSizes(theme);

  const [loadingAnimationComplete, setLoadingAnimationComplete] =
    useState(true);
  const [appLoading, setAppLoading] = useState({
    projectOne: true,
    projectTwo: true,
  });
  const completeFirstProjectLoading = () => {
    setAppLoading((prev) => ({ ...prev, projectOne: false }));
  };

  const completeSecondProjectLoading = () => {
    setAppLoading((prev) => ({ ...prev, projectTwo: false }));
  };

  const contextValue = useMemo(
    () => ({
      completeFirstProjectLoading,
      completeSecondProjectLoading,
      appLoading,
      loadingAnimationComplete,
    }),
    [appLoading, loadingAnimationComplete]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <Stack>
        <ThemeProvider theme={theme}>
          {isDesktop ? (
            <Loader
              appLoading={appLoading}
              setLoadingAnimationComplete={setLoadingAnimationComplete}
            />
          ) : (
            <PhoneLoader
              setLoadingAnimationComplete={setLoadingAnimationComplete}
            />
          )}
          <Stack
            sx={{
              height: loadingAnimationComplete ? "100vh" : "100%",
              overflow: loadingAnimationComplete ? "hidden" : "visible",
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route element={<Home />} path="/" />
              </Routes>
            </BrowserRouter>
          </Stack>
        </ThemeProvider>
      </Stack>
    </AppContext.Provider>
  );
}

export default App;
