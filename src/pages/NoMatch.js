import React from "react";
import { useLocation } from "react-router-dom";

const Nomatch = () => {
  let location = useLocation();

  return (
    <div className="no_match">
      <div className="container">
        <div className="no_match_main">
          <img src="img/404.png" />
        </div>
      </div>
    </div>
  );
};

export default Nomatch;
