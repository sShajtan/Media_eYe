import React from 'react';
import Community from '../components/Community/Community';
import Creators from '../components/Creators/Creators';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainBlock from '../components/MainBlock/MainBlock';
import MainHow from '../components/MainHow/MainHow';
import MainInfo from '../components/MainInfo/MainInfo';
import Partners from '../components/Partners/Partners';
import Roadmap from '../components/Roadmap/Roadmap';
import Team from '../components/Team/Team';
import Tokenomics from '../components/Tokenomics/Tokenomics';

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <MainBlock />
                <MainInfo />
                <MainHow />
                <Creators />
                <Tokenomics />
                <Roadmap />
                <Team />
                <Partners />
                <Community />
                <Faq />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Main;
