import { Check, Zap, Brain, TrendingUp, Shield, ArrowRight, Star, Crown, Rocket } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold">QuantAI</span>
          </div>
          <nav className="flex gap-6">
            <a href="/" className="hover:text-cyan-400 transition">Home</a>
            <a href="/dashboard" className="hover:text-cyan-400 transition">Dashboard</a>
            <a href="/pricing" className="text-cyan-400 font-semibold">Pricing</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Start Free. <span className="text-cyan-400">Upgrade When You See Results.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-2">
          No hype. No guarantees. Just <span className="text-white">clear trading signals + real insights</span>.
        </p>
        <p className="text-lg text-cyan-400">
          Join traders who use simple, actionable signals with entry, target, and stop-loss.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="/dashboard" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition flex items-center gap-2">
            <Rocket className="w-5 h-5" /> Try Free
          </a>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Free Plan */}
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-600 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-zinc-700 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Free</h3>
                <p className="text-3xl font-bold">₹0<span className="text-lg font-normal text-zinc-400">/mo</span></p>
              </div>
            </div>
            <p className="text-zinc-400 mb-6">Perfect to test our signals</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>2–3 signals per day</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Delayed access (10–15 min)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Basic market data</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Portfolio tracker</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500">
                <span className="w-5 h-5">✗</span>
                <span>AI insights</span>
              </li>
            </ul>
            <a href="/dashboard" className="block w-full py-3 text-center bg-zinc-700 hover:bg-zinc-600 rounded-xl font-semibold transition">
              Start Free
            </a>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="bg-gradient-from bg-no-repeat border-2 border-cyan-500 rounded-2xl p-6 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold">
              🔥 Most Popular
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-3xl font-bold">₹299<span className="text-lg font-normal text-zinc-400">/mo</span></p>
              </div>
            </div>
            <p className="text-zinc-400 mb-2">For serious traders</p>
            <p className="text-sm text-cyan-400 mb-6">🎁 3-Day Free Trial Included</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>10–15 high-quality signals/day</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>⚡ Real-time alerts (no delay)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>🤖 AI-based market insights</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Entry, target, stop-loss included</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Priority signals (before free users)</span>
              </li>
            </ul>
            <a href="/dashboard" className="block w-full py-3 text-center bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition flex items-center justify-center gap-2">
              Upgrade to Pro <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-600 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-3xl font-bold">₹1,499<span className="text-lg font-normal text-zinc-400">/mo</span></p>
              </div>
            </div>
            <p className="text-zinc-400 mb-6">For advanced users & builders</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>🔌 API access</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>🏷️ White-label usage</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <a href="/dashboard" className="block w-full py-3 text-center bg-amber-500 hover:bg-amber-600 rounded-xl font-semibold transition">
              Contact / Subscribe
            </a>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 px-4 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">📊 Recent Signal Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-center">
              <p className="text-5xl font-bold text-green-400 mb-2">70%+</p>
              <p className="text-zinc-400">Win Rate (Last 10 signals)</p>
              <p className="text-sm text-zinc-500 mt-2">*Example — updated with real data</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 text-center">
              <p className="text-5xl font-bold text-cyan-400 mb-2">500+</p>
              <p className="text-zinc-400">Traders Using QuantAI</p>
              <p className="text-sm text-zinc-500 mt-2">Growing every day</p>
            </div>
          </div>
          <p className="text-center text-zinc-400 mt-6 text-lg">
            👉 <em>We believe in honesty, not fake promises</em>
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">⚠️ No False Promises</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ What We Don't Do</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span>No guaranteed profit</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span>No "get rich quick" claims</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-400">✗</span>
                  <span>No 100% accuracy promises</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">✅ What We Do</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Clear signals with risk control</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Transparent win/loss results</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Data-driven insights only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-12 px-4 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-xl p-6">
            <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">🔒 Risk Disclaimer</h3>
            <p className="text-zinc-400">
              Trading involves risk. You may lose money. QuantAI provides <span className="text-white">data-driven insights</span>, not financial advice. All decisions are your responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">🚀 Ready to Try?</h2>
        <p className="text-xl text-zinc-400 mb-8">Start free and see how signals work</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/dashboard" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-bold text-lg transition flex items-center gap-2">
            <Star className="w-6 h-6" /> Start Free
          </a>
          <a href="/dashboard" className="px-8 py-4 bg-zinc-700 hover:bg-zinc-600 rounded-xl font-bold text-lg transition flex items-center gap-2">
            Upgrade to Pro
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800 text-center text-zinc-500">
        <p>QuantAI © 2026 | <a href="/terms" className="hover:text-white">Terms of Service</a> | <a href="/disclaimer" className="hover:text-white">Disclaimer</a></p>
      </footer>
    </div>
  );
}