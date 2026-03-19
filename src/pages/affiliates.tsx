import { ArrowRight, Link, Gift, TrendingUp, Shield, Copy, Check } from "lucide-react";

const affiliates = [
  { name: "CoinDCX", commission: "30%", description: "India's largest crypto exchange", color: "blue" },
  { name: "Binance", commission: "20%", description: "World's largest crypto exchange", color: "yellow" },
  { name: "WazirX", commission: "25%", description: "Popular Indian crypto platform", color: "purple" },
  { name: "TradingView", commission: "₹200/referral", description: "Premium charts & tools", color: "green" }
];

export default function Affiliates() {
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
          <Gift className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Affiliate Program</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Earn commissions by promoting trusted crypto platforms
          </p>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-12">
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-amber-500" />
            <div>
              <h3 className="font-semibold text-lg">High Commission Rates</h3>
              <p className="text-zinc-400">Earn up to 30% of trading fees from your referred users - forever!</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {affiliates.map((aff) => (
            <div key={aff.name} className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{aff.name}</h3>
                <span className={`text-lg font-bold text-${aff.color}-500`}>{aff.commission}</span>
              </div>
              <p className="text-zinc-400 mb-4">{aff.description}</p>
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 py-2 rounded-lg font-medium">
                Get Affiliate Link
              </button>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
              <p className="text-sm">Choose a platform and get your unique link</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
              <p className="text-sm">Share with your audience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
              <p className="text-sm">They sign up and start trading</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
              <p className="text-sm">You earn commission on their fees</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-lg">
            Start Earning Now
          </button>
        </div>
      </main>
    </div>
  );
}