import React from 'react';
import ProfileSettingsMain from '../components/Profile/ProfileSettings/ProfileSettings';
import Sidebar from '../components/Profile/Sidebar/Sidebar';

const ProfileSettings = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="profile">
        <div className="container">
          <div className="main_profile">
            <Sidebar />
            <ProfileSettingsMain />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileSettings;
