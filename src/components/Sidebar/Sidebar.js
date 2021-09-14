import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.css';


const Sidebar = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);

  return (
    <div className="sidebar">
            укпукеукпу
    </div>
  );
};

export default Sidebar;
