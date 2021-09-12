import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import MessagePopup from '../MessagePopup/MessagePopup';
import './Popup.css';
import CloseIcon from '../Icons/CloseIcon';

const Popup = (props) => {
  const { toggleMessagePopup } = props;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [twitter, setTwitter] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [text, setText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMainPopup = () => {
    props.togglePopup();
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePortfolio = (event) => {
    setPortfolio(event.target.value);
  };

  const handleChangeTwitter = (event) => {
    setTwitter(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== null && email !== '') {
      emailjs
        .sendForm(
          'service_8p76rtc',
          'template_1svg3xa',
          event.target,
          'user_EJiwvXDAMeoW6oOr4UYrR'
        )
        .then(
          (result) => {
            setEmail('');
            setName('');
            setTwitter('');
            setPortfolio('');
            setText('');
            setShowPopup(false);
            toggleMainPopup();
            toggleMessagePopup(true);
          },
          (error) => {
            alert('Message not sent');
          }
        );
    }
  };

  return (
    <React.Fragment>
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div className="popup-wrapper partners" onClick={props.togglePopup}>
          <div
            className="main-popup"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="popup-main">
              <div className="close" onClick={props.togglePopup}>
                <CloseIcon />
              </div>
              <h4>Become a partner</h4>
              <form className="partners_form" onSubmit={handleSubmit}>
                <div>
                  <label>Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </div>
                <div>
                  <label>Name</label>
                  <input
                    name="name"
                    required
                    value={name}
                    onChange={handleChangeName}
                  />
                </div>
                <div>
                  <label>Twitter</label>
                  <input
                    name="twitter"
                    value={twitter}
                    onChange={handleChangeTwitter}
                  />
                </div>
                <div>
                  <label>Portfolio Link</label>
                  <input
                    name="portfolio"
                    value={portfolio}
                    onChange={handleChangePortfolio}
                  />
                </div>
                <div className="textarea">
                  <label>Description</label>
                  <textarea
                    name="text"
                    value={text}
                    onChange={handleChangeText}
                    rows="3"
                  />
                </div>
                <button type="submit" className="partners_submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MessagePopup showPopup={showPopup} togglePopup={togglePopup} />
    </React.Fragment>
  );
};

export default Popup;
