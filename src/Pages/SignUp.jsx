import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Contexts/AuthContext";

const SignUp = () => {
  const [show, setShow] = useState(false);

  const {
    signupWithEmailandPasswordFun,
    sendEmailVerificationFun,
  } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    signupWithEmailandPasswordFun(email, password)
      .then((res) => {
        sendEmailVerificationFun(res.user)
          .then(() => {
            toast.info("Please verify your email address");
          })
          .catch((err) => toast.error(err.message));

        toast.success("Account created successfully");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-slate-900/60 py-14 px-4">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT INFO */}
        <div className="hidden md:flex flex-col justify-center p-10 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Create Your Account 
          </h1>
          <p className="text-gray-300 mb-6">
            Join our AI-powered platform and start your journey as a freelancer
            or service provider.
          </p>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>✔ AI Skill Gap Analysis</li>
            <li>✔ Smart Job Matching</li>
            <li>✔ Secure Wallet & Payments</li>
            <li>✔ Verified Profiles</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-emerald-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
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
                placeholder="Create a strong password"
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

            {/* Submit */}
            <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition">
              Create Account
            </button>
          </form>

          {/* Login redirect */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-400 hover:underline">
              Login
            </Link>
          </p>

          {/* info */}
          <p className="text-center text-xs text-gray-500 mt-4">
            One account works for both Freelancers & Service Providers
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
