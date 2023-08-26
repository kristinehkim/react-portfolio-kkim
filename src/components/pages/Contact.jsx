import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import {  validateEmail } from '../../utils/helpers';


export default function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [usersName, setUsersName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, user's name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'usersName') {
      setUsersName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !usersName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

  
  // If everything goes according to plan, we want to clear out the input after a successful submission.
  setUsersName('');
  setEmail('');
  setMessage('');
};

  return (
    <div className="container text-center">
      <h1>
        Contact Me!
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={usersName}
          name="usersName"
          onChange={handleInputChange}
          type="text"
          placeholder="User's Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

