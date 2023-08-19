import React, { useState } from 'react';
import './App.css';

function FormValidation() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = () => {
    // Perform validation checks and update state
  };

  return (
    <div>
      <h1>Hook Form</h1>
      <form>
        <div>
          <label>First Name:  </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstName.length > 0 && firstName.length < 2 && (
            <p className="error">First Name must be at least 2 characters</p>
          )}
        </div>

        <div>
          <label>Last Name:  </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastName.length > 0 && lastName.length < 2 && (
            <p className="error">Last Name must be at least 2 characters</p>
          )}
        </div>

        <div>
          <label>Email:  </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length > 0 && email.length < 5 && (
            <p className="error">Email must be at least 5 characters</p>
          )}
        </div>

        <div>
          <label>Password:  </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 && password.length < 8 && (
            <p className="error">Password must be at least 8 characters</p>
          )}
        </div>

        <div>
          <label>Confirm Password:  </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPassword !== password && (
            <p className="error">Passwords do not match</p>
          )}
        </div>

        <button type="button" onClick={validateForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
