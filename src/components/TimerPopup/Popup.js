import React from "react";
import MessagePopup from "../MessagePopup/MessagePopup";
import emailjs from 'emailjs-com';
import "./Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      showPopup: false,
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }


  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  toggleMainPopup() {
    this.props.togglePopup();
  }


  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    if (this.state.email !== null && this.state.email !== '') {
      emailjs.sendForm('service_73soouc', 'template_uj1tp7c', event.target, 'user_1nI5rWG3deHxADsA0zfNc')
        .then((result) => {
          this.setState({ email: "", showPopup: true });
          this.toggleMainPopup();
        }, (error) => {
          alert('Message not sent')
        });
    }
  }


  render() {
    return (
      <React.Fragment>
        <div className={this.props.showPopup ? "popup active" : "popup"}>
          <div className="popup-wrapper timer_popup soon_popup timer" onClick={this.props.togglePopup}>
            <div
              className="main-popup"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="close" onClick={this.props.togglePopup}>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.800293"
                    y="17.5435"
                    width="24.8103"
                    height="2.401"
                    transform="rotate(-45 0.800293 17.5435)"
                    fill="#D2D2D2"
                  />
                  <rect
                    x="1.69775"
                    width="24.8103"
                    height="2.401"
                    transform="rotate(45 1.69775 0)"
                    fill="#D2D2D2"
                  />
                </svg>
              </div>
              <div className="popup-main">
                <h4>Newsletter</h4>
                <h6>Stay up to date with our latest updates and products</h6>
                <form onSubmit={this.handleSubmit} >
                  <input name="email" required type="email" placeholder="Your email address" value={this.state.email} onChange={this.handleChangeEmail} />
                  <button>Subscribe</button>
                </form>
                <span>By signing up you consent to receive emails from Media eYe and its subsidiaries.</span>
              </div>
            </div>
          </div>
        </div>
        <MessagePopup
          showPopup={this.state.showPopup}
          togglePopup={this.togglePopup}
        />
      </React.Fragment>
    );
  }
}

export default Popup;
