import React, { useState } from 'react';

function FormValidation() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
    setError(''); // Reset error when user types
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setError('Name is required!');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Form with Input Validation</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you for submitting, {name}!</p>
      )}
    </div>
  );
}

export default FormValidation;