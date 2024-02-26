import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Signin = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send signin data to the server for authentication
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }

      // Handle the authentication success here
      console.log('User authenticated successfully');

      // Clear any previous error
      setError(null);

      // You might want to redirect or perform additional actions upon successful signin

    } catch (error) {
      // Handle authentication errors
      setError('Invalid email or password');
      console.error('Error submitting signin form:', error.message);
    }
  };

  const signupnav =()=>{
    navigate('/sign-up');
  }

  return (
    <div className="auth-container">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Signin</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>
        Don't have an account?{' '}
        <button onClick={signupnav}>Signup</button>
      </p>
    </div>
  );
};

export default Signin;
