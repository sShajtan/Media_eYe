import React, { useEffect } from 'react';
import Iframe from '../components/Iframe/Iframe';
import { updateTheme } from '../store/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';

const Treasureland = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);
  const dispatch = useDispatch();
  const { closeNftCollapse, togglePopup } = props;
  const toggleTheme = () => {
    dispatch(updateTheme());
  };

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <Iframe />
      </div>
    </React.Fragment>
  );
};

export default Treasureland;
