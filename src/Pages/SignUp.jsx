import React, { useContext, useState } from 'react';
import Login from './Login';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { AuthContext } from '../Contexts/AuthContext';





const SignUp = () => {
  const [show, setShow] = useState(false);
  const {signupWithEmailandPasswordFun , sendEmailVerificationFun} =useContext(AuthContext);
  const handleSignup = (e) => {
    
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('signup sucessfully ', { name, email, password });

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
signupWithEmailandPasswordFun(email,password).then((res) => {
sendEmailVerificationFun(res.user)  .then(() => {
            console.log('Email verification sent');
            toast.info('Please verify your email address');

          }).catch((e) => {
            console.log(e);
            toast.error(e.message);
          });
        console.log(res)
        toast.success('User Register Successfully')
      }).catch((e) => {
        console.log(e)
        toast.error(e.message)
      })

  };


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignup}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <div className='relative'>
                  <label className="label">Password</label>
                  <input type={show ? "text" : "password"} name='password' className="input" placeholder="Password" />
                  <span onClick={() => setShow(!show)} className='absolute right-[20px] top-[36px] cursor-pointer'>{show ? <FaEye /> : <IoEyeOff />}</span>
                </div>
                <div><a className="link link-hover">Forgot password?</a></div>
                <p>Have an account? <Link to='/login' className="link link-hover text-blue-500">Login</Link></p>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;