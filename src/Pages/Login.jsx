import React, {  use, useContext, useRef, useState } from 'react';
import SignUp from './SignUp';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { IoEyeOff } from 'react-icons/io5';
import { AuthContext } from '../Contexts/AuthContext';


const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const location = useLocation();
  const form = location.state || '/';
  console.log('Current location:', location);
  const nevigate =useNavigate();

  const {sendPasswordResetEmailFun , 
    signInWithEmailAndPasswordFun
    ,setUser,user} 

  = useContext(AuthContext);

  if(user) {
    nevigate('/')
    return;
  }
 
  const [show, setShow] = useState(false);
  const emailref = useRef(null);

  const handleReset = () => {
    console.log(emailref.current.value);
    const email = emailref.current.value;
    if(!email){
      toast.error('Please enter your email address');
      return;
    }
    sendPasswordResetEmailFun(email).then(() => {
      toast.success('Password reset email sent');
    }).catch((err) => {
      console.log(err);
      toast.error(err.message);
    })

  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signInWithEmailAndPasswordFun(email, password).then((res) => {
        if (!res.user.emailVerified) {
          toast.error('Please verify your email before logging in');
          return;
        }
        console.log(res);
        setUser(res.user);
        
        toast.success('Login successful');
        nevigate(form);
      }).catch((err) => {
        console.log(err);
        toast.error(err.message);
      })


  };

  

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success('Google sign-in successful');
        nevigate(form);
      }).catch((err) => {
        console.log(err);
        toast.error(err.message);
      })

  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} >
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input ref={emailref} type="email" name='email' className="input" placeholder="Email" />
                  <div className='relative'>
                    <label className="label">Password</label>
                    <input type={show ? "text" : "password"} name='password' className="input" placeholder="Password" />
                    <span onClick={() => setShow(!show)} className='absolute right-5 top-9 cursor-pointer'>{show ? <FaEye /> : <IoEyeOff />}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="link link-hover"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <p>Have not account? <Link to='/signup' className="link link-hover text-blue-500">Sign up</Link></p>
                  <button className="btn btn-neutral mt-4">Login</button>
                  {/* divider */}
                  <div className='flex items-center justify-center gap-2 my-2'>
                    <div className='h-px w-16 bg-white/70'></div>
                    <span className='text-sm text-white/70'>or</span>
                    <div className='h-px w-16 bg-white/70'></div>
                  </div>
                  <button onClick={handleGoogleSignIn} className="btn btn-outline btn-neutral mt-4 text-white cursor-pointer"> <FaGoogle />
                    Login with Google</button>
                </fieldset>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;