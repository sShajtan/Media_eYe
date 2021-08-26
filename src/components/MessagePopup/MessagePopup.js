import React from "react";
import "./MessagePopup.css";


class MessagePopup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.showPopup ? "popup active" : "popup"}>
        <div className="popup-wrapper" onClick={this.props.togglePopup}>
          <div
            className="main-popup defi_popup"
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
              <h2>Thank you for subscribing!
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagePopup;
