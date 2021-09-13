import React from 'react';
import { useHistory } from 'react-router-dom';

const Nomatch = (props) => {
  const { closeNftCollapse } = props;
  let history = useHistory();

  return (
    <div className="no_match" onClick={closeNftCollapse}>
      <div className="container">
        <div className="no_match_main">
          <a className="goBack_button" onClick={() => history.goBack()}>
            <span>&#8592; </span> GoBack
          </a>
          <img src="../../../img/404.png" />
        </div>
      </div>
    </div>
  );
};

export default Nomatch;
