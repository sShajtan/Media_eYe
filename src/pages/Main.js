import React from "react";
import Community from "../components/Community/Community";
import Faq from "../components/Faq/Faq";
import MainBlock from "../components/MainBlock/MainBlock";
// import Creators from "../components/Creators/Creators";
import MainHow from "../components/MainHow/MainHow";
import MainHowWork from "../components/MainHowWork/MainHowWork";
import MainInfo from "../components/MainInfo/MainInfo";
import Partners from "../components/Partners/Partners";
import Roadmap from "../components/Roadmap/Roadmap";
import Team from "../components/Team/Team";
import Tokenomics from "../components/Tokenomics/Tokenomics";

const Main = (props) => {
  const { toggleNftCollapse, toggleSoonPopup, togglePopup } = props;

  return (
    <React.Fragment>
      <div onClick={toggleNftCollapse}>
        <MainBlock togglePopup={togglePopup} />
        <MainInfo />
        <MainHow toggleSoonPopup={toggleSoonPopup} />
        <MainHowWork />
        {/* <Creators /> */}
        <Tokenomics />
        <Roadmap />
        <Team />
        <Partners />
        <Community />
        <Faq />
      </div>
    </React.Fragment>
  );
};

export default Main;
