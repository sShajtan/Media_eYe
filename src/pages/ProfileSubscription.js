import React, { useState } from 'react';
import ProfileSubscriptionMain from '../components/Profile/ProfileSubscription/ProfileSubscription';
import Sidebar from '../components/Profile/Sidebar/Sidebar';
import Popup from '../components/Profile/FeaturePopup/Popup';

const ProfileSubscription = (props) => {
  const { closeNftCollapse } = props;
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="profile">
        <Popup showPopup={showPopup} togglePopup={togglePopup} />
        <div className="container">
          <div className="main_profile">
            <Sidebar />
            <ProfileSubscriptionMain togglePopup={togglePopup} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileSubscription;
