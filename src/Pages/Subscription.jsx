import React from "react";
import { useNavigate } from "react-router";
import { FaCheckCircle, FaCrown } from "react-icons/fa";

const plans = [
  {
    name: "Free",
    price: 0,
    highlight: false,
    features: [
      "Limited Job Apply",
      "Basic Profile",
      "Standard Support",
      "20% Platform Fee",
    ],
  },
  {
    name: "Pro",
    price: 999,
    highlight: true,
    features: [
      "Unlimited Job Apply",
      "AI Skill Match",
      "Priority Listing",
      "10% Platform Fee",
      "Smart Wallet Access",
    ],
  },
  {
    name: "Premium",
    price: 1999,
    highlight: false,
    features: [
      "Everything in Pro",
      "Verified Badge",
      "Top Search Ranking",
      "Dedicated Support",
      "5% Platform Fee",
    ],
  },
];

const Subscription = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    navigate("/dashboard/payment", {
      state: {
        planName: plan.name,
        price: plan.price,
      },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          Upgrade Your Career 🚀
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose a plan that fits your freelancing journey.  
          Pay in Bangladeshi Taka (৳) and unlock premium features.
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-6 border transition ${
              plan.highlight
                ? "border-emerald-500 bg-gradient-to-b from-gray-900 to-black scale-105"
                : "border-gray-700 bg-gray-900"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <FaCrown /> Most Popular
              </span>
            )}

            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>

            <p className="text-3xl font-extrabold mb-4">
              ৳{plan.price}
              <span className="text-sm text-gray-400 font-normal">
                /month
              </span>
            </p>

            <ul className="space-y-3 mb-6 text-sm">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <FaCheckCircle className="text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(plan)}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.highlight
                  ? "bg-emerald-500 text-black hover:bg-emerald-400"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {plan.price === 0 ? "Continue Free" : "Subscribe Now"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-center text-gray-500 text-sm mt-12">
        Secure payments supported via Smart Wallet, Bank & Mobile Banking (bKash, Nagad, Rocket)
      </p>
    </div>
  );
};

export default Subscription;
