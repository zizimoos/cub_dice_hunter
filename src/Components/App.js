import React, { useEffect, useState } from "react";
import Router from "Components/Router";
import GlobalStyles from "./GlobalStyles";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn}></Router> : "Initializing..."}
      <GlobalStyles></GlobalStyles>
      {/* <footer>&copy; {new Date().getFullYear()} DiceHunter</footer> */}
    </>
  );
}

export default App;
