import { useState } from "react";
import { MessageCircle, Send, Check, Zap, Users, Shield } from "lucide-react";

export default function Alerts() {
  const [copied, setCopied] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Join @QuantAIBot for FREE trading signals!");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 text-sm mb-4">
            <Zap className="w-4 h-4" />
            <span>Instant • Real-time • Reliable</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Signal Alerts via Telegram</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Get instant trading signals delivered to your Telegram. Bot is FREE - charge users for premium alerts.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Free Tier</h3>
                <p className="text-2xl font-bold text-green-500">₹0 <span className="text-sm font-normal text-zinc-400">/month</span></p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /><span>Bot access</span></li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /><span>Daily signal summary</span></li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /><span>Public channel access</span></li>
              <li className="flex items-center gap-2 text-zinc-500"><span className="w-5 h-5">✕</span><span>Real-time alerts</span></li>
            </ul>
            <a href="https://t.me/QuantAIBot" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-center transition">Get Free Bot</a>
          </div>

          <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-2xl p-6 border border-amber-500/50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-4 py-1 rounded-full">RECOMMENDED</div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Premium Alerts</h3>
                <p className="text-2xl font-bold text-amber-500">₹149 <span className="text-sm font-normal text-zinc-400">/month</span></p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-amber-500" /><span>Everything in Free</span></li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-amber-500" /><span>Instant real-time alerts</span></li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-amber-500" /><span>VIP signal channel</span></li>
              <li className="flex items-center gap-2"><Check className="w-5 h-5 text-amber-500" /><span>Priority entry points</span></li>
            </ul>
            <button onClick={() => setSubscribed(true)} className="w-full py-3 bg-amber-600 hover:bg-amber-500 rounded-xl font-semibold transition">Subscribe Now - ₹149/mo</button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-amber-500" />
            Free Telegram Bot Setup (Step by Step)
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold mb-1">Open Telegram & Search Bot</h3>
                <p className="text-zinc-400 text-sm mb-2">Search for @QuantAIBot</p>
                <a href="https://t.me/QuantAIBot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm"><Send className="w-4 h-4" /> Open Bot</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold mb-1">Click START</h3>
                <p className="text-zinc-400 text-sm">Type /start to begin receiving signals</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold mb-1">Subscribe to VIP (Optional)</h3>
                <p className="text-zinc-400 text-sm">Type /subscribe to unlock premium for ₹149/month</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-black flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold mb-1">Get Signals!</h3>
                <p className="text-zinc-400 text-sm">Receive AI-powered trading signals directly in your Telegram</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-500/30">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-green-500" />
            Revenue Model - How You Make Money
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">₹0</div>
              <p className="text-sm text-zinc-400">Your Cost to Setup</p>
              <p className="text-xs text-zinc-500 mt-1">Telegram Bot is FREE</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">₹149</div>
              <p className="text-sm text-zinc-400">Per User/Month</p>
              <p className="text-xs text-zinc-500 mt-1">Premium signal access</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
              <p className="text-sm text-zinc-400">Margin</p>
              <p className="text-xs text-zinc-500 mt-1">No product cost</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-zinc-300">
              <span className="text-green-500 font-semibold">100 users × ₹149 = ₹14,900/month</span> with zero infrastructure cost!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://t.me/QuantAIBot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 px-8 py-4 rounded-xl font-semibold transition">
            <Send className="w-5 h-5" />
            Start Your Telegram Signal Bot FREE
          </a>
        </div>
      </div>
    </div>
  );
}
