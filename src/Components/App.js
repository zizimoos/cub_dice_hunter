import React, { useState } from "react";
import Router from "Components/Router";
import GlobalStyles from "./GlobalStyles";
import { authService } from "../fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <Router isLoggedIn={isLoggedIn}></Router>
      <footer>&copy; {new Date().getFullYear()} DiceHunter</footer>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;
