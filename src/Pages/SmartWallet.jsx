import React, { useState } from "react";
import { banks } from "../data/bank";
import { mobileBanks } from "../data/mobileBank";
import { FaWallet, FaPlus, FaMinus } from "react-icons/fa";

const SmartWallet = () => {
  const [balance, setBalance] = useState(1245.50);
  const [amount, setAmount] = useState("");
  const [selectedBank, setSelectedBank] = useState(banks[0]);
  const [selectedMobile, setSelectedMobile] = useState(mobileBanks[0].name);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Credit", amount: 500, method: "BRAC Bank", date: "2026-01-17" },
    { id: 2, type: "Debit", amount: 200, method: "bKash", date: "2026-01-16" },
  ]);

  const [useBank, setUseBank] = useState(true); // toggle between bank and mobile

  const handleAddMoney = () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return alert("Enter a valid amount");

    const method = useBank ? selectedBank : selectedMobile;

    setBalance(prev => prev + amt);
    setTransactions(prev => [
      { id: prev.length + 1, type: "Credit", amount: amt, method, date: new Date().toLocaleDateString() },
      ...prev
    ]);

    setAmount("");
    alert(`${amt} added via ${method}`);
  };

  const handleWithdraw = () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return alert("Enter a valid amount");
    if (amt > balance) return alert("Insufficient balance");

    const method = useBank ? selectedBank : selectedMobile;

    setBalance(prev => prev - amt);
    setTransactions(prev => [
      { id: prev.length + 1, type: "Debit", amount: amt, method, date: new Date().toLocaleDateString() },
      ...prev
    ]);

    setAmount("");
    alert(`${amt} withdrawn via ${method}`);
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg space-y-6">
      {/* Wallet Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaWallet className="text-emerald-500 text-3xl"/>
          <div>
            <p className="text-gray-400 text-sm">Current Balance</p>
            <h2 className="text-2xl font-bold">${balance.toFixed(2)}</h2>
          </div>
        </div>
      </div>

      {/* Toggle Payment Method */}
      <div className="flex gap-4">
        <button
          onClick={() => setUseBank(true)}
          className={`px-4 py-2 rounded-lg ${useBank ? "bg-emerald-500" : "bg-gray-700"}`}
        >
          Bank
        </button>
        <button
          onClick={() => setUseBank(false)}
          className={`px-4 py-2 rounded-lg ${!useBank ? "bg-emerald-500" : "bg-gray-700"}`}
        >
          Mobile Banking
        </button>
      </div>

      {/* Add / Withdraw Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 rounded-lg bg-gray-800 text-white flex-1"
        />

        {useBank ? (
          <select 
            value={selectedBank} 
            onChange={(e) => setSelectedBank(e.target.value)}
            className="p-2 rounded-lg bg-gray-800 text-white flex-1"
          >
            {banks.map(bank => (
              <option key={bank} value={bank}>{bank}</option>
            ))}
          </select>
        ) : (
          <div className="flex gap-3 overflow-x-auto">
            {mobileBanks.map(bank => (
              <div 
                key={bank.name}
                onClick={() => setSelectedMobile(bank.name)}
                className={`flex flex-col items-center p-2 rounded-lg cursor-pointer border-2 ${
                  selectedMobile === bank.name ? "border-emerald-500" : "border-gray-700"
                }`}
              >
                <img src={bank.logo} alt={bank.name} className="w-12 h-12 object-contain"/>
                <span className="text-xs mt-1">{bank.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button onClick={handleAddMoney} className="bg-emerald-500 px-4 py-2 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-emerald-600 transition">
          <FaPlus /> Add Money
        </button>
        <button onClick={handleWithdraw} className="bg-red-500 px-4 py-2 rounded-lg flex-1 flex items-center justify-center gap-2 hover:bg-red-600 transition">
          <FaMinus /> Withdraw
        </button>
      </div>

      {/* Transaction History */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {transactions.map(tx => (
            <div key={tx.id} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
              <div>
                <p className="font-semibold">{tx.type} - ${tx.amount}</p>
                <p className="text-gray-400 text-sm">{tx.method}</p>
              </div>
              <span className="text-gray-400 text-sm">{tx.date}</span>
            </div>
          ))}
          {transactions.length === 0 && <p className="text-gray-400 text-sm">No transactions yet</p>}
        </div>
      </div>
    </div>
  );
};

export default SmartWallet;
