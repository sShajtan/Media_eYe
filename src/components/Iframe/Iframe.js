import React, { useEffect, useState } from 'react';
import './Iframe.css';

const Iframe = (props) => {
  const [fixedIframe, setFixedIframe] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY > 5) {
      setFixedIframe(true);
    } else {
      setFixedIframe(false);
    }
  };
  return (
    <React.Fragment>
      <div className="iframe_header">
        <img src="../../../img/iframe_header.png" />
      </div>
      <div className="iframe_wrapper">
        <iframe
          src="https://www.treasureland.market/"
          scrolling={fixedIframe ? 'yes' : 'no'}
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Iframe;
