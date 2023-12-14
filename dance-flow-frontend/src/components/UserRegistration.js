import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/user-profiles/create/', {
        username,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Registration error:', error.response.data);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default UserRegistration;
