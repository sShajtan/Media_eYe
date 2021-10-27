import React, { useState } from 'react';
import './MainForm.css';
import emailjs from 'emailjs-com';

const MainForm = (props) => {
  const [email, setEmail] = useState(' ');
  const { toggleMessagePopup } = props;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== null && email !== '') {
      emailjs
        .sendForm(
          'service_8p76rtc',
          'template_3pxskgn',
          event.target,
          'user_EJiwvXDAMeoW6oOr4UYrR'
        )
        .then(
          (result) => {
            setEmail('');
            toggleMessagePopup(true);
          },
          (error) => {
            alert('Message not sent');
          }
        );
    }
  };

  return (
    <div className="container">
      <div
        className="main_form_main wow animate__animated animate__fadeIn"
        data-wow-delay="1s"
      >
        <h2>Sign up to recieve the latest news and updates!</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            required
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="example@gmail.com"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MainForm;
