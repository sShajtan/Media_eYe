import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Main from "./pages/Main";
import Header from "./components/Header/Header";
import TimerPopup from "./components/TimerPopup/Popup";
import SoonPopup from "./components/SoonPopup/Popup";
import Footer from "./components/Footer/Footer";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import "./fonts/Poppins/stylesheet.css";
import "./fonts/Roboto/stylesheet.css";
import "./fonts/neumatic/stylesheet.css";
import MessagePopup from "./components/MessagePopup/MessagePopup";


const App = () => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [showSoonPopup, setShowSoonPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showMessagePopup, setshowMessagePopup] = useState(false);
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

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleNftCollapse = () => {
    setShowNftCollpase(!showNftCollapse);
  };

  const toggleMessagePopup = () => {
    setshowMessagePopup(!showMessagePopup);
  };

  const closeNftCollapse = () => {
    setShowNftCollpase(false);
  }

  return (
    <Router>
      <div className={darkTheme ? "App dark" : "App"}>
        <SoonPopup showPopup={showSoonPopup} togglePopup={toggleSoonPopup} />
        <TimerPopup showPopup={showPopup} togglePopup={togglePopup} />
        <MessagePopup showPopup={showMessagePopup} togglePopup={toggleMessagePopup}
        />
        <Header
          toggleSoonPopup={toggleSoonPopup}
          toggleNftCollapse={toggleNftCollapse}
          showNftCollapse={showNftCollapse}
        />
        <Switch>
          <Route path="/" exact>
            <Main
              toggleSoonPopup={toggleSoonPopup}
              togglePopup={togglePopup}
              toggleMessagePopup={toggleMessagePopup}
              toggleNftCollapse={toggleNftCollapse}
              closeNftCollapse={closeNftCollapse}
            />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer toggleSoonPopup={toggleSoonPopup} />
      </div>
    </Router>
  );
};

export default App;
