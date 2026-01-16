import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../Contexts/AuthContext";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/dashboard";

  const {
    sendPasswordResetEmailFun,
    signInWithEmailAndPasswordFun,
    setUser,
    user,
    loading,
  } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const emailRef = useRef(null);

  /* 🔐 already logged in → dashboard */
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  /* 🔁 Reset Password */
  const handleReset = () => {
    const email = emailRef.current?.value;
    if (!email) {
      toast.error("Please enter your email first");
      return;
    }

    sendPasswordResetEmailFun(email)
      .then(() => toast.success("Password reset email sent"))
      .catch((err) => toast.error(err.message));
  };

  /* 📧 Email + Password Login */
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPasswordFun(email, password)
      .then((res) => {
        if (!res.user.emailVerified) {
          toast.error("Please verify your email before login");
          return;
        }

        setUser(res.user);
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  /* 🟢 Google Login */
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        toast.success("Google login successful");
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT INFO */}
        <div className="hidden md:flex flex-col justify-center p-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome Back 👋</h1>
          <p className="text-gray-300 mb-6">
            Login to continue your journey on our AI-powered freelancing platform.
          </p>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>✔ AI Skill Gap Analysis</li>
            <li>✔ Smart Wallet & Secure Payments</li>
            <li>✔ Verified Profiles</li>
            <li>✔ Real-time Collaboration</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-emerald-500"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-sm text-gray-300">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-emerald-500"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-10 cursor-pointer text-gray-400"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-between text-sm text-gray-400">
              <button
                type="button"
                onClick={handleReset}
                className="hover:text-emerald-400 transition"
              >
                Forgot password?
              </button>
              <Link to="/signup" className="hover:text-emerald-400 transition">
                Create account
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition">
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-3 rounded-xl border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/10 transition"
            >
              <FaGoogle /> Continue with Google
            </button>
          </form>

          {/* Role Info */}
          <p className="text-center text-xs text-gray-500 mt-6">
            One account works for both{" "}
            <span className="text-white">Freelancers</span> &{" "}
            <span className="text-white">Service Providers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
