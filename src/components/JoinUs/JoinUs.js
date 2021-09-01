import React from 'react';
import './JoinUs.css';

const JoinUs = (props) => {
    const { togglePartnersPopup } = props;
    return (
        <div className="join_us">
            <div className="main_join_us">
                <img alt="join us" src="img/join_us.png" />
                <button className="join_us_button" onClick={togglePartnersPopup}>Become a partner</button>
            </div>
        </div >
    );
};


export default JoinUs;
