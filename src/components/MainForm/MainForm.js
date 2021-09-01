import React, { useState } from "react";
import "./MainForm.css";
import emailjs from "emailjs-com";

const MainForm = (props) => {
  const [email, setEmail] = useState('');
  const { toggleMessagePopup } = props;

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email !== null && this.state.email !== "") {
      emailjs
        .sendForm(
          "service_73soouc",
          "template_uj1tp7c",
          event.target,
          "user_1nI5rWG3deHxADsA0zfNc"
        )
        .then(
          (result) => {
            toggleMessagePopup();
          },
          (error) => {
            alert("Message not sent");
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
        <h2>
          Sign up here to receive the latest news and updates of our projects!
        </h2>
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
