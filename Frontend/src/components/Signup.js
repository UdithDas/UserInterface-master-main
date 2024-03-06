import React, { useEffect, useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Signup = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
 
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate(-1);
  // },[])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.username || !formData.email || !formData.password) {
      console.error('Please fill in all fields');
      return;
    }

    try {
      // Send signup data to the server
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }

      // Handle the server response
      const result = await response.json();
      console.log(result);

      // You might want to redirect or perform additional actions upon successful signup

    } catch (error) {
      console.error('Error submitting signup form:', error.message);
    }
  };

  const signinnav =()=>{
    navigate('/sign-in');
  }

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={signinnav}>Signin</button>
      </p>
    </div>
  );
};

export default Signup;
