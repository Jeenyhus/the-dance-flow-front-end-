import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; // Update the path based on the actual location
import DanceStudiosList from './components/DanceStudiosList'; // Update the path based on the actual location

const App = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const handleLogin = (token) => {
    setAuthToken(token);
  };

  return (
    <div>
      {!authToken ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <h2>Welcome!</h2>
          <DanceStudiosList authToken={authToken} />
          {/* Add other components that require authentication */}
        </>
      )}
    </div>
  );
};

export default App;
