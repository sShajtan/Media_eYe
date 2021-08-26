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
                    <img className="title" src="img/faq_title.png" />
                    <div className="faq_main">
                        <div className={this.state.question_1 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1s">
                            <div onClick={() =>
                                this.setState({ question_1: !this.state.question_1 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5> <strong className={this.state.question_1 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_1 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className={this.state.question_2 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.2s">
                            <div onClick={() =>
                                this.setState({ question_2: !this.state.question_2 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5><strong className={this.state.question_2 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_2 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className={this.state.question_3 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.4s">
                            <div onClick={() =>
                                this.setState({ question_3: !this.state.question_3 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5><strong className={this.state.question_3 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_3 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className={this.state.question_4 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.6s">
                            <div onClick={() =>
                                this.setState({ question_4: !this.state.question_4 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5><strong className={this.state.question_4 ? 'active' : null} >
                                    &#10095;</strong>
                            </div>
                            <span className={this.state.question_4 ? "active" : null}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className={this.state.question_5 ? "faq_block animate__animated animate__fadeIn wow active" : "faq_block animate__animated animate__fadeIn wow"} data-wow-duration="1s" data-wow-delay="1.8s">
                            <div onClick={() =>
                                this.setState({ question_5: !this.state.question_5 })
                            }>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ? </h5><strong className={this.state.question_5 ? 'active' : null} >
                                    &#10095;</strong>
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
