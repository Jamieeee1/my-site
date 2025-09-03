import { RouterProvider } from "react-router-dom";
// import { FormspreeProvider } from "@formspree/react";

import { router } from "./routes/Routes";
import { createContext, useState, useEffect } from "react";

export const SiteContext = createContext();

const ContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const mediaQueryList = window.matchMedia(query);
      const listener = () => setMatches(mediaQueryList.matches);

      mediaQueryList.addEventListener("change", listener);
      setMatches(mediaQueryList.matches); // Initial check

      return () => mediaQueryList.removeEventListener("change", listener);
    }, [query]);

    return matches;
  }

  return (
    <SiteContext.Provider value={{ navOpen, setNavOpen, useMediaQuery }}>
      {children}
    </SiteContext.Provider>
  );
};

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};

export default App;
