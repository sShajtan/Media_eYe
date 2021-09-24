import React from 'react';
import { Profiler } from 'react';
import ProfileSubscriptionMain from '../components/ProfileSubscription/ProfileSubscription';
import Sidebar from '../components/Sidebar/Sidebar';

const ProfileSubscription = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="profile">
        <div className="container">
          <div className="main_profile">
            <Sidebar />
            <ProfileSubscriptionMain />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileSubscription;
