import React, { useState } from 'react';

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const [message, setMessage] = useState('Click a button!');

  const handleClick = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>{message}</h1>
      <Button onClick={() => handleClick('Button 1 clicked!')} label="Button 1" />
      <Button onClick={() => handleClick('Button 2 clicked!')} label="Button 2" />
    </div>
  );
}

export default App;