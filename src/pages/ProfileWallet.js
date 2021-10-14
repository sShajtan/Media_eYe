import React from 'react';
import ProfileWalletMain from '../components/Profile/ProfileWallet/ProfileWallet';
import Sidebar from '../components/Profile/Sidebar/Sidebar';

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
