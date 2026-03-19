import { useState } from "react";
import { QrCode, Check, Copy, Smartphone } from "lucide-react";

const UPI_ID = "quantai@ybl";
const PLANS = {
  monthly: { name: "Premium Monthly", price: 149, period: "month" },
  quarterly: { name: "Premium Quarterly", price: 399, period: "3 months", savings: 48 },
  yearly: { name: "Premium Yearly", price: 999, period: "year", savings: 789 }
};

export default function Payment() {
  const [selected, setSelected] = useState("monthly");
  const [paid, setPaid] = useState(false);
  const [copied, setCopied] = useState(false);

  const plan = PLANS[selected as keyof typeof PLANS];

  const copyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (paid) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
        <div className="bg-zinc-900 rounded-2xl p-8 max-w-md w-full text-center border border-green-500/50">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><Check className="w-10 h-10 text-green-500" /></div>
          <h1 className="text-2xl font-bold text-white mb-2">Payment Submitted!</h1>
          <p className="text-zinc-400 mb-6">Your payment of ₹{plan.price} is being verified. You will receive access within 30 minutes.</p>
          <button onClick={() => setPaid(false)} className="bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-xl font-semibold">Done</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-8 px-4">
        <h1 className="text-3xl font-bold text-center">Pay with UPI</h1>
        <p className="text-center text-amber-100 mt-2">Fast & Secure Payment</p>
      </div>

      <div className="max-w-lg mx-auto p-6">
        <div className="flex gap-2 mb-6">
          {Object.entries(PLANS).map(([key, p]) => (
            <button key={key} onClick={() => setSelected(key)} className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${selected === key ? "bg-amber-600 text-white" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"}`}>
              ₹{p.price}/{key === "yearly" ? "yr" : key === "quarterly" ? "3m" : "mo"}
            </button>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mb-6">
          <div className="text-center mb-6">
            <p className="text-zinc-400 text-sm">Amount to Pay</p>
            <p className="text-5xl font-bold text-amber-500">₹{plan.price}</p>
            {plan.savings && <p className="text-green-500 text-sm mt-1">Save ₹{plan.savings}/year</p>}
          </div>

          <div className="bg-white rounded-xl p-4 mb-6">
            <div className="w-48 h-48 mx-auto bg-zinc-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <QrCode className="w-24 h-24 mx-auto text-zinc-800" />
                <p className="text-zinc-600 text-xs mt-2">Scan QR Code</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-xl p-4 mb-6">
            <p className="text-zinc-400 text-sm mb-2">Or pay using UPI ID</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-lg">{UPI_ID}</span>
              <button onClick={copyUPI} className="bg-amber-600 hover:bg-amber-500 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="bg-zinc-800/50 rounded-xl p-4 mb-6">
            <p className="text-zinc-400 text-sm mb-2">How to Pay:</p>
            <ol className="text-sm text-zinc-300 space-y-1">
              <li>1. Open any UPI app (Google Pay, PhonePe, Paytm)</li>
              <li>2. Scan the QR code or enter UPI ID</li>
              <li>3. Pay ₹{plan.price}</li>
              <li>4. Click "I have Paid" below</li>
            </ol>
          </div>

          <button onClick={() => setPaid(true)} className="w-full bg-green-600 hover:bg-green-500 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2">
            <Smartphone className="w-5 h-5" />
            I have Paid - Verify
          </button>
        </div>

        <div className="text-center text-zinc-500 text-sm">
          <p>Payment secured via UPI</p>
          <p className="mt-1">You will receive access within 30 mins of verification</p>
        </div>
      </div>
    </div>
  );
}
