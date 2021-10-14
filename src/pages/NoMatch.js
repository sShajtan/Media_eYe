import React from 'react';
import { useHistory } from 'react-router-dom';

const Nomatch = (props) => {
  const { closeNftCollapse } = props;
  let history = useHistory();

  return (
    <div className="no_match" onClick={closeNftCollapse}>
      <div className="container">
        <div className="no_match_main">
          <button className="goBack_button" onClick={() => history.goBack()}>
            <span>&#8592; </span> GoBack
          </button>
          <img src="../../../img/404.png" alt="404" />
        </div>
      </div>
    </div>
  );
};

export default Nomatch;
