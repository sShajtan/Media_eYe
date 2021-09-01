import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Main from "./pages/Main";
import Header from "./components/Header/Header";
import TimerPopup from "./components/TimerPopup/Popup";
import SoonPopup from "./components/SoonPopup/Popup";
import PartnersPopup from "./components/PartnersPopup/Popup";
import Footer from "./components/Footer/Footer";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import "./fonts/Poppins/stylesheet.css";
import "./fonts/Rambla/stylesheet.css";
import "./fonts/Roboto/stylesheet.css";
import "./fonts/neumatic/stylesheet.css";
import { updateTimerPopup } from "./store/app/appSlice";
import MessagePopup from "./components/MessagePopup/MessagePopup";


const App = () => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const timerPopup = useSelector((state) => state.app.timerPopup);
  const [showSoonPopup, setShowSoonPopup] = useState(false);
  const [showPartnersPopup, setShowPartnersPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showMessagePopup, setshowMessagePopup] = useState(false);
  const [showNftCollapse, setShowNftCollpase] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (timerPopup === false) {
      dispatch(updateTimerPopup());
      setTimeout(() => {
        setShowPopup(true)
      }, 10000);
    }
  });

  const toggleSoonPopup = () => {
    setShowSoonPopup(!showSoonPopup);
  };

  const togglePartnersPopup = () => {
    setShowPartnersPopup(!showPartnersPopup);
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
        <PartnersPopup showPopup={showPartnersPopup} togglePopup={togglePartnersPopup} />
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
              togglePartnersPopup={togglePartnersPopup}
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
