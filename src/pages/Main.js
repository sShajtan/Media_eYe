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
import SoonPopup from '../components/SoonPopup/Popup';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            showSoonPopup: false,
            showNftCollapse: false

        }
        this.togglePopup = this.togglePopup.bind(this);
        this.toggleSoonPopup = this.toggleSoonPopup.bind(this);
        this.toggleNftCollapse = this.toggleNftCollapse.bind(this);
    };

    toggleNftCollapse() {
        this.setState({ showNftCollapse: !this.state.showNftCollapse });
    }

    togglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    toggleSoonPopup() {
        this.setState({ showSoonPopup: !this.state.showSoonPopup });
    }


    componentDidMount() {
        if (this.state.showPopup === false) {
            setTimeout(() => {
                this.setState({ showPopup: true })
            }, 10000);
        }
    }


    render() {
        return (
            <React.Fragment>
                <div onClick={this.toggleNftCollapse}>
                    <SoonPopup showPopup={this.state.showSoonPopup}
                        togglePopup={this.toggleSoonPopup} />
                    <TimerPopup showPopup={this.state.showPopup}
                        togglePopup={this.togglePopup} />
                    <Header toggleTheme={this.props.toggleTheme} theme={this.props.theme} toggleSoonPopup={this.toggleSoonPopup} toggleNftCollapse={this.toggleNftCollapse} showNftCollapse={this.state.showNftCollapse} />
                    <MainBlock togglePopup={this.togglePopup} />
                    <MainInfo />
                    <MainHow toggleSoonPopup={this.toggleSoonPopup} />
                    <MainHowWork />
                    {/* <Creators /> */}
                    <Tokenomics />
                    <Roadmap theme={this.props.theme} />
                    <Team />
                    <Partners theme={this.props.theme} />
                    <Community />
                    <Faq />
                    <Footer theme={this.props.theme} toggleSoonPopup={this.toggleSoonPopup} />
                </div>
            </React.Fragment>
        )
    }
}

export default Main;
