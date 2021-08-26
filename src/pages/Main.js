import React from 'react';
import Community from '../components/Community/Community';
import Creators from '../components/Creators/Creators';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainBlock from '../components/MainBlock/MainBlock';
import MainHow from '../components/MainHow/MainHow';
import MainHowWork from '../components/MainHowWork/MainHowWork';
import MainInfo from '../components/MainInfo/MainInfo';
import Partners from '../components/Partners/Partners';
import Roadmap from '../components/Roadmap/Roadmap';
import Team from '../components/Team/Team';
import Tokenomics from '../components/Tokenomics/Tokenomics';
import TimerPopup from '../components/TimerPopup/Popup';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        }
        this.togglePopup = this.togglePopup.bind(this);
    };

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }


    componentDidMount() {
        if (this.state.showPopup === false) {
            setTimeout(() => {
                this.setState({ showPopup: true })
            }, 100000000);
        }
    }


    render() {
        return (
            <React.Fragment>
                <TimerPopup showPopup={this.state.showPopup}
                    togglePopup={this.togglePopup} />
                <Header toggleTheme={this.props.toggleTheme} />
                <MainBlock />
                <MainInfo />
                <MainHow />
                <MainHowWork />
                {/* <Creators /> */}
                <Tokenomics />
                <Roadmap theme={this.props.theme} />
                <Team />
                <Partners theme={this.props.theme} />
                <Community />
                <Faq />
                <Footer theme={this.props.theme} />
            </React.Fragment>
        )
    }
}

export default Main;
