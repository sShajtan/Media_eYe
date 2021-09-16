import React from 'react';
import { Profiler } from 'react';
import ProfileWalletMain from '../components/ProfileWallet/ProfileWallet';
import Sidebar from '../components/Sidebar/Sidebar';


const ProfileWallet = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="profile">
        <div className="container">
          <div className="main_profile">
            <Sidebar />
            <ProfileWalletMain />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileWallet;
