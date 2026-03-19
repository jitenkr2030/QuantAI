import { ArrowRight, Brain, Zap, TrendingUp, Shield, BarChart3, Globe, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">QuantAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
            <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
              Launch App
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            <Zap className="w-4 h-4" /> AI-Powered Trading Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Semi-Automatic<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Money System</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            You find opportunities. AI approves trades. System executes.
            The future of intelligent investing is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
              Start Trading Free <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#features" className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Signals", value: "50+" },
              { label: "Success Rate", value: "87%" },
              { label: "Coins Tracked", value: "100+" },
              { label: "Users", value: "10K+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "You Find", desc: "AI scans markets 24/7 and identifies trading opportunities based on real-time data" },
              { step: "02", title: "AI Approves", desc: "Our algorithms analyze risk, confidence levels, and market conditions" },
              { step: "03", title: "System Executes", desc: "Once approved, trades execute automatically on your connected exchange" },
            ].map((item) => (
              <div key={item.step} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <span className="text-4xl font-bold text-blue-500/30">{item.step}</span>
                <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "AI Signals", desc: "Machine learning powered trading signals with confidence scores" },
              { icon: Zap, title: "Real-Time Data", desc: "Live market data from top exchanges, updated every second" },
              { icon: BarChart3, title: "Portfolio Tracker", desc: "Track your holdings, P/L, and portfolio performance" },
              { icon: TrendingUp, title: "AI Insights", desc: "Deep market analysis and trend predictions" },
              { icon: Shield, title: "Risk Management", desc: "Stop-loss and take-profit recommendations" },
              { icon: Globe, title: "Multi-Exchange", desc: "Connect to Binance, Coinbase, and more" },
            ].map((f) => (
              <div key={f.title} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <f.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple Pricing</h2>
          <p className="text-zinc-400 text-center mb-12">Choose the plan that fits your trading style</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { tier: "Free", price: "₹0", features: ["5 signals/day", "Basic portfolio", "Market data", "Email support"], popular: false },
              { tier: "Pro", price: "₹299", features: ["Unlimited signals", "AI insights", "Auto-trading", "Priority support"], popular: true },
              { tier: "Enterprise", price: "₹1,499", features: ["Everything in Pro", "API access", "White-label", "Dedicated support"], popular: false },
            ].map((plan) => (
              <div key={plan.tier} className={`rounded-2xl p-8 border ${plan.popular ? "bg-blue-600/10 border-blue-500 scale-105" : "bg-zinc-900 border-zinc-800"}`}>
                {plan.popular && <span className="text-blue-400 text-sm font-medium">Most Popular</span>}
                <h3 className="text-xl font-bold mt-2">{plan.tier}</h3>
                <p className="text-4xl font-bold mt-4">{plan.price}<span className="text-zinc-400 text-lg">/mo</span></p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{f}
                    </li>
                  ))}
                </ul>
                <a href="/dashboard" className={`block w-full mt-8 py-3 rounded-lg font-medium text-center transition-colors ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl opacity-90 mb-8">Join thousands of traders using AI-powered signals</p>
          <a href="/dashboard" className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-3 rounded-lg font-bold hover:bg-zinc-100 transition-colors">
            Launch Platform <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-500" />
            <span className="font-bold">QuantAI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a>
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <p className="text-sm text-zinc-500">© 2026 QuantAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
