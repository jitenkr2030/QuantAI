import { ArrowRight, Users, TrendingUp, DollarSign, Shield, Copy, Check } from "lucide-react";

export default function Reseller() {
  const handleSignup = () => {
    alert("Demo: Reseller signup would open here. In production, this connects to payment + dashboard.");
  };

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
          <Users className="w-16 h-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Signal Reseller Program</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Earn 50% commission by reselling QuantAI trading signals to your audience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-900 rounded-xl p-6">
            <TrendingUp className="w-10 h-10 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">50% Commission</h3>
            <p className="text-zinc-400">Get half of every payment your referred users make. Recurring revenue!</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Shield className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Signals</h3>
            <p className="text-zinc-400">Provide your audience with AI-powered trading signals backed by real data</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <DollarSign className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Payouts</h3>
            <p className="text-zinc-400">Withdraw your earnings anytime. No minimum threshold.</p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">1</span>
              <div><strong>Sign up</strong> - Get your unique referral code instantly</div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">2</span>
              <div><strong>Share</strong> - Promote using your link, social media, or YouTube</div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">3</span>
              <div><strong>Earn</strong> - Get 50% of every subscription payment forever</div>
            </li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-zinc-400 mb-6">Join the QuantAI reseller program and start earning today</p>
          <button onClick={handleSignup} className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-lg">
            Become a Reseller
          </button>
        </div>
      </main>
    </div>
  );
}