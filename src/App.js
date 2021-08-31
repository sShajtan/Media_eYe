import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header/Header";
import TimerPopup from "./components/TimerPopup/Popup";
import SoonPopup from "./components/SoonPopup/Popup";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import "./fonts/Poppins/stylesheet.css";
import "./fonts/Roboto/stylesheet.css";
import "./fonts/neumatic/stylesheet.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [showSoonPopup, setShowSoonPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showNftCollapse, setShowNftCollpase] = useState(false);

  useEffect(() => {
    if (showPopup === false) {
      setTimeout(() => {
        setShowPopup(true);
      }, 10000);
    }
  }, []);

  const toggleSoonPopup = () => {
    setShowSoonPopup(!showSoonPopup);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleNftCollapse = () => {
    setShowNftCollpase(!showNftCollapse);
  };

  return (
    <Router>
      <div className={darkTheme ? "App dark" : "App"}>
        <SoonPopup showPopup={showSoonPopup} togglePopup={toggleSoonPopup} />
        <TimerPopup showPopup={showPopup} togglePopup={togglePopup} />
        <Header
          toggleTheme={toggleTheme}
          theme={darkTheme}
          toggleSoonPopup={toggleSoonPopup}
          toggleNftCollapse={toggleNftCollapse}
          showNftCollapse={showNftCollapse}
        />
        <Switch>
          <Route path="/" exact>
            <Main
              theme={darkTheme}
              toggleSoonPopup={toggleSoonPopup}
              togglePopup={togglePopup}
              toggleNftCollapse={toggleNftCollapse}
            />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
