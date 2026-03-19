import { ArrowRight, MessageCircle, Send, Bell, Zap, Check, Phone } from "lucide-react";

const plans = [
  { name: "Basic", price: 99, period: "month", features: ["Telegram alerts only", "5 signals/day", "Daily summary"], color: "blue" },
  { name: "Premium", price: 299, period: "month", features: ["Telegram + WhatsApp", "15 signals/day", "Real-time alerts", "Weekly report"], color: "green" },
  { name: "VIP", price: 999, period: "month", features: ["All Premium features", "Unlimited signals", "1-on-1 support", "Custom strategies"], color: "amber" }
];

export default function Alerts() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-xl font-bold">QuantAI</a>
          <a href="/dashboard" className="text-sm text-zinc-400 hover:text-white">Dashboard</a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Bell className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Signal Alerts</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Get real-time trading signals delivered to your phone instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900 rounded-xl p-6">
            <MessageCircle className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telegram</h3>
            <p className="text-zinc-400 mb-4">Join our VIP signals channel with instant delivery</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Instant message delivery</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Price alerts</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Entry/exit notifications</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <Phone className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-zinc-400 mb-4">Get personalized alerts directly on WhatsApp</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Direct to your phone</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Voice message option</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> Priority support</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-zinc-900 rounded-xl p-6 ${plan.name === "Premium" ? "ring-2 ring-green-500" : ""}`}>
              {plan.name === "Premium" && <span className="text-xs bg-green-500 text-black px-2 py-1 rounded font-medium">POPULAR</span>}
              <h3 className="text-xl font-semibold mt-2 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">₹{plan.price}</span>
                <span className="text-zinc-500">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full ${plan.color === "green" ? "bg-green-500 hover:bg-green-600" : "bg-zinc-800 hover:bg-zinc-700"} py-2 rounded-lg font-medium`}>
                Subscribe
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-8 text-center">
          <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Never Miss a Trade</h2>
          <p className="text-zinc-400 mb-6">Get instant notifications when our AI detects high-confidence opportunities</p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg">
            Start Free Trial
          </button>
        </div>
      </main>
    </div>
  );
}