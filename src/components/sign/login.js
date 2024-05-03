import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./sign.css";
import transition from '../../transition';

const Login = () => {


    // Function to handle sign-in
    const handleSignIn = () => {
    // Get input values
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Retrieve stored username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate input fields
    if (!usernameInput || !passwordInput) {
      // Display error message if fields are empty
      toast.error('Please fill in all fields!');
    } else if (usernameInput === storedUsername && passwordInput === storedPassword) {
      // Redirect to home page if username and password match
      window.location.href = '/';
    } else {
      // Show alert for incorrect username or password
      toast.error('Incorrect username or password');
    }
  };

  // Function to toggle sign-up mode
  const toggleMode = () => {
    window.location.href = '/signup';
  };


  return (
    <div className='container'>
      <div className='sign-in-form'>
        <div className='back-right'>
          <h2>hello, friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <button onClick={toggleMode}>Sign up</button>
        </div>
        <div className='left'>
          <h2>Login</h2>
          <form>
            <input type='text' id='username' placeholder='Username' />
            <input type='password' id='password' placeholder='Password' />
            <button type='button' onClick={handleSignIn} className='log'>Login</button>
            <p>
              Don't have an account? <Link className='let' to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default transition(Login)   ;
