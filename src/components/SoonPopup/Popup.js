import React from "react";
import MessagePopup from "../MessagePopup/MessagePopup";
import emailjs from 'emailjs-com';
import "./Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    }
    this.togglePopup = this.togglePopup.bind(this);
  }


  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  toggleMainPopup() {
    this.props.togglePopup();
  }







  render() {
    return (
      <React.Fragment>
        <div className={this.props.showPopup ? "popup active" : "popup"}>
          <div className="popup-wrapper timer_popup soon_popup" onClick={this.props.togglePopup}>
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
              <div className="popup-main soon">
                <h4>We are building something great!</h4>
                <div className="links">
                  <a href="https://medium.com/@MeDIAeYeNFT" target="_blank"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M20 0C8.95536 0 0 8.95536 0 20C0 31.0446 8.95536 40 20 40C31.0446 40 40 31.0446 40 20C40 8.95536 31.0446 0 20 0ZM31.4286 11.3259L29.6071 13.0714C29.4464 13.192 29.3705 13.3884 29.4018 13.5804V26.4241C29.3705 26.6205 29.4464 26.817 29.6071 26.933L31.3929 28.6786V29.067H22.4286V28.6964L24.2723 26.9063C24.4554 26.7232 24.4554 26.6696 24.4554 26.3973V16.0045L19.3214 29.0223H18.6295L12.6562 16.0045V24.7321C12.6027 25.0982 12.7321 25.4688 12.9911 25.7321L15.3929 28.6384V29.0268H8.57143V28.6384L10.9732 25.7321C11.0998 25.6014 11.1939 25.4429 11.2482 25.2692C11.3025 25.0956 11.3153 24.9117 11.2857 24.7321V14.6429C11.317 14.3616 11.2098 14.0893 10.9955 13.8973L8.86161 11.3259V10.9375H15.4911L20.6071 22.1652L25.1116 10.9464H31.4286V11.3259Z" fill="#3E3E3E" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  </a >
                  <a href="https://t.me/MeDIAeYeNFTofficial" target="_blank"><svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M20 1.48145C8.95161 1.48145 0 10.1533 0 20.8564C0 31.5596 8.95161 40.2314 20 40.2314C31.0484 40.2314 40 31.5596 40 20.8564C40 10.1533 31.0484 1.48145 20 1.48145ZM29.8226 14.7549L26.5403 29.7393C26.2984 30.8018 25.6452 31.0596 24.7339 30.5596L19.7339 26.9893L17.3226 29.2393C17.0565 29.4971 16.8306 29.7158 16.3145 29.7158L16.6694 24.7861L25.9355 16.6768C26.3387 16.333 25.8468 16.1377 25.3145 16.4814L13.8629 23.4658L8.92742 21.9736C7.85484 21.6455 7.83065 20.9346 9.15323 20.4346L28.4355 13.2314C29.3306 12.9189 30.1129 13.4424 29.8226 14.7549Z" fill="#3E3E3E" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="40" height="40" fill="white" transform="translate(0 0.856445)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </a >
                  <a href="https://twitter.com/MeDIAeYeNFT" target="_blank"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.4049 8.2283C38.0132 8.84497 36.5182 9.26163 34.9465 9.44997C36.5682 8.47962 37.7814 6.95241 38.3599 5.1533C36.8363 6.05828 35.1688 6.69529 33.4299 7.03663C32.2605 5.78807 30.7116 4.96051 29.0237 4.68242C27.3358 4.40434 25.6034 4.69128 24.0953 5.49872C22.5872 6.30616 21.3878 7.5889 20.6834 9.14781C19.9791 10.7067 19.8091 12.4545 20.1999 14.12C17.1127 13.965 14.0926 13.1625 11.3356 11.7648C8.57856 10.3671 6.14626 8.40523 4.19652 6.00663C3.52986 7.15663 3.14652 8.48997 3.14652 9.90997C3.14578 11.1883 3.46058 12.447 4.06299 13.5745C4.6654 14.702 5.53679 15.6634 6.59986 16.3733C5.36698 16.3341 4.16131 16.0009 3.08319 15.4016V15.5016C3.08307 17.2945 3.70324 19.0323 4.8385 20.42C5.97375 21.8077 7.55414 22.7598 9.31152 23.115C8.16783 23.4245 6.96875 23.4701 5.80486 23.2483C6.30069 24.791 7.26652 26.14 8.56714 27.1065C9.86775 28.073 11.4381 28.6086 13.0582 28.6383C10.3079 30.7973 6.91134 31.9684 3.41486 31.9633C2.79549 31.9635 2.17665 31.9273 1.56152 31.855C5.11065 34.1369 9.24209 35.348 13.4615 35.3433C27.7449 35.3433 35.5532 23.5133 35.5532 13.2533C35.5532 12.92 35.5449 12.5833 35.5299 12.25C37.0487 11.1516 38.3597 9.79146 39.4015 8.2333L39.4049 8.2283Z" fill="#3E3E3E" />
                  </svg>
                  </a >
                </div>
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
