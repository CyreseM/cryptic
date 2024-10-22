import React from 'react'
import './SignUp.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react'
import signimg from './assets/img/signup1.png'
import Button from './component/Button'


const SignUp = () => {
  const API_URL = 'http://localhost:3500/users'
  const [emailvalue, setemailvalue] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate= useNavigate()



  const postToAPI = async () => {
    console.log("executed");
    
    // Create the user object here with the latest values
    const user = { email: emailvalue, password: password };
    
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    try {
        const response = await fetch(API_URL, postOptions);
        const data = await response.json();
        console.log(data); // Log the response from the server
        navigate('/AccountType');
    } catch (error) {
        console.error("Error:", error); // Handle any errors
    }
};

  useEffect(()=>{setemailvalue(location.state?.email ?? '')}, [])
  
  console.log (emailvalue)
 
  console.log(location)

  return (
    <div>
      <nav className='signnav'>
        <Link className="logo" to="/" style={{textDecoration:"none"}}>
          <h1>Cryptic</h1>
        </Link>
      </nav>
        
        <div className='signhero'>
          <div className="hero-pic">
            <img src={signimg} alt="graph image" />
          </div>

          <div className='Signup'>
              <form className='Signupform' action="post">
                <label>Start Your Investment <br/>Journey</label>
                <input type="text" placeholder='Email address' value={emailvalue} onChange={(e)=>{setemailvalue(e.target.value)}}/>
                <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <input type="password"  placeholder='Repeat password'/>
                <div className='subsec'>
                  <p>Got an account? <Link to = "/SignIn">Sign in</Link></p>
                  <Button 
                  width="100px"
                  height="30px"
                  color= "white"
                  bgcolor='rgba(0,212,255,1)'
                  text= "Submit"
                  click={()=>{postToAPI()}}
                    />

                </div>
               
              </form>
          </div>
        </div>
    </div>
  )
}

export default SignUp
