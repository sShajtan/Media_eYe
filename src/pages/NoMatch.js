import React from "react";
import { useLocation, useHistory } from "react-router-dom";


const Nomatch = () => {
  let location = useLocation();
  let history = useHistory();

  return (
    <div className="no_match">
      <div className="container">
        <div className="no_match_main">
          <a className="goBack_button" onClick={() => history.goBack()}><span>&#129120; </span> GoBack</a>
          <img src="img/404.png" />
        </div>
      </div>
    </div >
  );
};

export default Nomatch;
