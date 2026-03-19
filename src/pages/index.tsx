import { ArrowRight, Brain, Zap, TrendingUp, Shield, Users, BarChart3, Menu, X, Star } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl">QuantAI</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/dashboard" className="text-zinc-300 hover:text-white transition-colors">Dashboard</a>
              <a href="/pricing" className="text-zinc-300 hover:text-white transition-colors">Pricing</a>
              <a href="/terms" className="text-zinc-300 hover:text-white transition-colors">Terms</a>
              <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-4">
            <a href="/dashboard" className="block text-zinc-300 hover:text-white py-2">Dashboard</a>
            <a href="/pricing" className="block text-zinc-300 hover:text-white py-2">Pricing</a>
            <a href="/terms" className="block text-zinc-300 hover:text-white py-2">Terms</a>
            <a href="/dashboard" className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-center">
              Get Started
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Trading Signals</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Trade Smarter with
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> AI Insights</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            Get real-time trading signals, portfolio tracking, and AI-powered market analysis. From ₹299/month.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dashboard" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              Start Free <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/pricing" className="border border-zinc-700 hover:border-zinc-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", value: "2,500+" },
            { label: "Signals Generated", value: "50K+" },
            { label: "Success Rate", value: "73%" },
            { label: "Countries", value: "45+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-zinc-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Everything You Need to Trade</h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">Powerful tools designed for both beginners and professional traders.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "AI Signals", desc: "Machine learning algorithms analyze 50+ indicators for accurate trade setups." },
              { icon: BarChart3, title: "Portfolio Tracker", desc: "Track all your holdings in one place with real-time P&L calculations." },
              { icon: TrendingUp, title: "Advanced Charts", desc: "Professional-grade charting with technical indicators and drawing tools." },
              { icon: Zap, title: "Real-Time Alerts", desc: "Instant notifications when opportunities match your criteria." },
              { icon: Shield, title: "Risk Management", desc: "Built-in stop-loss and position sizing tools to protect your capital." },
              { icon: Users, title: "Community", desc: "Join thousands of traders sharing insights and strategies." },
            ].map((feature) => (
              <div key={feature.title} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Trading Smarter Today</h2>
          <p className="text-zinc-400 mb-8">Plans starting at just ₹299/month. No hidden fees.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pricing" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-colors">
              View All Plans
            </a>
            <a href="/dashboard" className="border border-zinc-700 hover:border-zinc-600 px-8 py-4 rounded-xl font-semibold transition-colors">
              Try Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <span className="font-bold">QuantAI</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
          </div>
          <p className="text-sm text-zinc-500">© 2026 QuantAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}