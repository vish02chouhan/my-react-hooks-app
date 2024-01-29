// File: src/components/LoginForm.js
import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; 
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const { user, login } = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleLogin = () => {
      login(username);
      navigate('/products'); // Redirect to product list after login
    };

    useEffect(() => {
      if (user) {
        // Redirect to products if already logged in
        navigate('/products');
      }
    }, [user, navigate]);
  


  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
