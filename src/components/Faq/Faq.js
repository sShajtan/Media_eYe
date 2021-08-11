import React from 'react';
import './Faq.css';
import WOW from 'wowjs';

class Faq extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question_1: false,
            question_2: false,
            question_3: false,
            question_4: false,
            question_5: false,
            question_6: false,
        };
    }




    render() {
        return (
            <div className="faq">
                <div className="container">
                    <h3 className="block_title">FAQ</h3>
                    <div className="faq_main">
                        <div className="faq_block animate__animated animate__fadeInRightBig wow" data-wow-duration="1s" data-wow-delay="1s">
                            <div onClick={() =>
                                this.setState({ question_1: !this.state.question_1 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5> {this.state.question_1 ? <strong className="active" ><i>|</i>|</strong> : <strong ><i>|</i>|</strong>}
                            </div>
                            <span className={this.state.question_1 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className="faq_block animate__animated animate__fadeInRightBig wow" data-wow-duration="1s" data-wow-delay="1.2s">
                            <div onClick={() =>
                                this.setState({ question_2: !this.state.question_2 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5>{this.state.question_2 ? <strong className="active" ><i>|</i>|</strong> : <strong ><i>|</i>|</strong>}
                            </div>
                            <span className={this.state.question_2 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className="faq_block animate__animated animate__fadeInRightBig wow" data-wow-duration="1s" data-wow-delay="1.4s">
                            <div onClick={() =>
                                this.setState({ question_3: !this.state.question_3 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5>{this.state.question_3 ? <strong className="active" ><i>|</i>|</strong> : <strong ><i>|</i>|</strong>}
                            </div>
                            <span className={this.state.question_3 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className="faq_block animate__animated animate__fadeInRightBig wow" data-wow-duration="1s" data-wow-delay="1.6s">
                            <div onClick={() =>
                                this.setState({ question_4: !this.state.question_4 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5>{this.state.question_4 ? <strong className="active" ><i>|</i>|</strong> : <strong ><i>|</i>|</strong>}
                            </div>
                            <span className={this.state.question_4 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className="faq_block animate__animated animate__fadeInRightBig wow" data-wow-duration="1s" data-wow-delay="1.8s">
                            <div onClick={() =>
                                this.setState({ question_5: !this.state.question_5 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5>{this.state.question_5 ? <strong className="active" ><i>|</i>|</strong> : <strong ><i>|</i>|</strong>}
                            </div>
                            <span className={this.state.question_5 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default Faq;
