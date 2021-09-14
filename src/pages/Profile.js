import React from 'react';
import ProfileMain from '../components/ProfileMain/ProfileMain';
import Sidebar from '../components/Sidebar/Sidebar';


const Profile = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="profile">
        <div className="container">
            <Sidebar />
            <ProfileMain />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;