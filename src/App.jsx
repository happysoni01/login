import { AtSign } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import './assets/styles/style.css'
import { useState } from 'react';
const App=()=>{
  const initialDetails={
    username:"",
    password:""
  }
  const [details,setDetails]=useState(initialDetails);
    const usernameChange=(event)=>{
      setDetails({...details,username:event.target.value})
    }
    const passwordChange=(event)=>{
      setDetails({...details,password:event.target.value})
    }
    const submit=(event)=>{
      console.log(details);
    }
  return(
    <div className='page'>
      <nav>
        <div className='navbar'>
      <ul><li>Summer Internship</li>
      <li>Institute Solutions</li>
      <li>Events</li>
      <li>About Us</li>
      <li>Certification</li></ul>
      </div>
      <p className='login'>Login</p>
      </nav>
    <div className="container">
      <h1>Login Your Account</h1>
      <p className='subtext'>Hi Dear, Enter your email address and password, and start your learning journey.</p>
      <div className="form-box">
        <div className='text-field'>
        <label >Email Address*</label>
        <br />
        <div className='input-field'>
        <AtSign size={30} />
        <input onChange={usernameChange} type="Email" placeholder="Enter Your Email" />
        </div>
        </div>
        <div className='text-field'>
        <label >Password*</label>
        <br />
        <div className='input-field'>
        <KeyRound size={30} />
        <input onChange={passwordChange} type="password" placeholder="Set Your Password" />
        </div>
        <p>Forgot Password</p>
        </div>
        <button onClick={submit} className='btn'>Login Now <ChevronRight size={18} color="#ffffff" strokeWidth={4} style={{ background: 'transparent' }} /></button>
        <hr />
        <button > Sign In with Google</button>
      </div>
      <p className='signup'>Don't have an account ? Sign Up</p>
    </div>
    </div>
  )
}
export default App;