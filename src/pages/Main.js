import React from 'react';
import { useSelector } from 'react-redux';
import Community from '../components/Community/Community';
import Faq from '../components/Faq/Faq';
import MainBlock from '../components/MainBlock/MainBlock';
import MainHow from '../components/MainHow/MainHow';
import MainHowWork from '../components/MainHowWork/MainHowWork';
import MainInfo from '../components/MainInfo/MainInfo';
import Partners from '../components/Partners/Partners';
import Roadmap from '../components/Roadmap/Roadmap';
import Team from '../components/Team/Team';
import MainForm from '../components/MainForm/MainForm';
import Tokenomics from '../components/Tokenomics/Tokenomics';

const Main = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const {
    togglePartnersPopup,
    toggleBusinessPopup,
    toggleSoonPopup,
    togglePopup,
    closeNftCollapse,
    toggleMessagePopup
  } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <MainBlock togglePopup={togglePopup} darkTheme={darkTheme} />
        <MainInfo darkTheme={darkTheme} />
        <MainHow toggleSoonPopup={toggleSoonPopup} darkTheme={darkTheme} />
        <MainHowWork
          togglePartnersPopup={togglePartnersPopup}
          toggleMessagePopup={toggleMessagePopup}
          darkTheme={darkTheme}
        />
        <Tokenomics darkTheme={darkTheme} />
        <Roadmap darkTheme={darkTheme} />
        <Team darkTheme={darkTheme} />
        <Partners
          toggleBusinessPopup={toggleBusinessPopup}
          toggleMessagePopup={toggleMessagePopup}
          darkTheme={darkTheme}
        />
        <Community darkTheme={darkTheme} />
        <MainForm toggleMessagePopup={toggleMessagePopup} />
        <Faq darkTheme={darkTheme} />
      </div>
    </React.Fragment>
  );
};

export default Main;
