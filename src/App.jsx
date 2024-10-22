import './App.css'
import Button from './component/Button'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const navigate= useNavigate()

  function startinv(){
     const email = input
      navigate('/SignUp',{state:{email}})
    
  }

  return (
    <>
      <nav>
        <h1>Cryptic</h1>
        <div className='menu'> 
            <p>Personal</p>
            <p>Business</p>
            <p>Developer</p>
            <p>Learn</p>
         </div>
         <div className='signlog'>
          <Button 
            width="60px"
            height="30px"
            color= 'rgba(0,212,255,1)'
            bgcolor='transparent'
            text="Log In"
              />
            <Link to="/SignUp" style={{textDecoration:"none"}}>
              <Button 
                width="200px"
                height="30px"
                color= "white"
                bgcolor='rgba(0,212,255,1)'
                text="Sign Up"
                click ={()=>{console.log('click'); setInput('') }}
                  />
            </Link>
         </div>
      </nav>

      <div className='hero'>
        <div>
          <div className="lefthero">
            <p>
              Invest and <br/>earn way more
            </p> 
            <p>
              Go beyond savings. Plant a seed for your best future.
            </p>
            <form className='heroform' action="post" >
              <input type="text" 
              value={input} 
              placeholder='Your email...'
              onChange ={e => setInput(e.target.value)}
               />
              
              <Button 
                width="200px"
                height="30px"
                color= "white"
                bgcolor='rgba(0,212,255,1)'
                text="Start Investing"
                click ={()=>{startinv(); console.log('clicked')}}
                  />
           
            </form>
           

          </div>
          <div className="righthero">
            <div className='hero-pic'>
                    
            </div>
          </div>
        </div>
           
      </div>

  
    </>
  )
}

export default App
