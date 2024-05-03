import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { images } from "../images";
import "./Home.css";

const Home = () => {

    // State to manage profile visibility
    const [profile, setProfile] = useState(false);

    // State to hold username and email
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
  
    // Load username and email from localStorage on component mount
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      const storedEmail = localStorage.getItem('email');
      setUsername(storedUsername);
      setEmail(storedEmail);

      // Display sign or profile based on user login status
      const sign = document.getElementById('sign');
      const profile = document.getElementById('profile');
      if (storedUsername) {
        sign.style.display = 'none';
        profile.style.display = 'block';
      }
    }, []);

    // Function to handle sign out
    const handleSignOut = () => {
      localStorage.clear(); // Clear localStorage
      window.location = "/"; 
    };


    // Function to toggle profile visibility
    const handleProfile = () => {
      setProfile(!profile);
    };


    // Context variables and functions
  const {
    onSent,
    recentAi,
    showResult,
    loading,
    resultData,
    input,
    setInput
  } = useContext(Context)


    // Function to handle sending input
   const clickInput = () => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      // Show error toast if user is not logged in
      toast.error('Please log in ');
      return; // Prevent further execution
    } else {
      onSent(); // Send input
    }
  };
  

 

  return (
    <div className='main'>

    {/* Navigation */}
    <div className='nav'>
      <div className='word'>
        <p>Gemini</p>
      </div>
      <div className='logsig'>
        {/* Sign-up button */}
        <div id='sign' className='signUp'>
          <Link to="/signup"><img src={images.signup} alt="Signup" /></Link>
        </div>
        {/* Profile section */}
        <div id='profile'>
            <img className='pro' onClick={handleProfile} src={images.user_icon}></img>
              {
              profile?
              <div>
                <p onClick={handleProfile}  className='ex'>X</p>
                <p className='email'>{email}</p>
                <img className='profile1' src={images.user_icon}></img>
                <p className='user'>hi,{username}!</p>
                <button type='button' onClick={handleSignOut}>
                <img src={images.signout}></img>
                  Sign out
                </button>
              </div>
            :null}
          </div>
        </div>
      </div>








       {/* Main content */}
       <div className='main-container'>
        {/* Display cards or result */}


      {!showResult?

       <>
  
       <div className='up'>
          <p className='hello'>Hello,<span>Dev.</span></p>
          <p>How can I help you today?</p>
        </div>


          {/* Cards */}

        <div className='cards'>

          <div className='card'>
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={images.compass_icon}></img>
          </div>

          <div className='card'>
            <p>Briefly summarize this concept: urban planning</p>
            <img src={images.bulb_icon}></img>
          </div>

          <div className='card'>
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={images.message_icon}></img>
          </div>

          <div className='card'>
            <p>Tell me about React js and React native</p>
            <img src={images.code_icon}></img>
          </div>

        </div>

       </>
        :

        
        <div className='result'>

           {/* Display result */}

          <div className='result-title'>
            <img src={images.user_icon}/>
            <p>{recentAi}</p>
          </div>

          <div className='result-data'>
            <img src={images.gemini_icon}></img>

            {loading?
            <div className='loader'>
                <hr></hr>
                <hr></hr>
                <hr></hr>
              </div>
            
          :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }
            

          </div>   


        </div>

        }





        <div className='down'>

          <div className='search'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'></input>
            <div>
              <img src={images.gallery_icon}></img>
              <img src={images.mic_icon}></img>
              {input?
              <img onClick={clickInput} src={images.send_icon}></img>
              :null
              }
            </div>
          </div>
          <p className='info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>


      </div>
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default Home
