import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./sign.css";
import transition from '../../transition';

const Signup = () => {


  // Function to handle sign-up
    const handleSignUp = () => {
    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input fields
    if (!username || !email || !password) {
      toast.error('Please fill in all fields!');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Save user data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to sign-in component
    window.location.href = '/signin';
  };

  // Function to toggle sign-in mode
  const toggleMode = () => {
    window.location.href = '/signin';
  };

  return (
    <div className='container'>
      <div className='sign-up-form'>
        <div className='back-left'>
          <h2>welcome back!</h2>
          <p>to keep connected with us please login with your personal info </p>
          <button onClick={toggleMode}>Sign in</button>
        </div>
        <div className='right'>
          <h2>register</h2>
          <form>
            <input type='text' id='username' placeholder=' Username' />
            <input type='email' id='email' placeholder=' Email' />
            <input type='password' id='password' placeholder=' Password' />
            <button type="button" onClick={handleSignUp}>register</button>
            <p>
              already have an account 
              <Link className='let' to="/signin">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default transition (Signup);
