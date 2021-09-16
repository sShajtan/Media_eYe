import React from 'react';
import { Profiler } from 'react';
import ProfileSupportMain from '../components/ProfileSupport/ProfileSupport';
import Sidebar from '../components/Sidebar/Sidebar';


const ProfileSupport = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="profile">
        <div className="container">
          <div className="main_profile">
            <Sidebar />
            <ProfileSupportMain />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileSupport;
