import { useState, useEffect } from "react";
import { Brain, Zap, TrendingUp, Menu, X, CreditCard, Shield, LogOut, User, BarChart3, Plus, Loader2, CheckCircle } from "lucide-react";

interface Signal {
  id: string;
  symbol: string;
  name: string;
  type: "BUY" | "SELL";
  price: number;
  change24h: number;
  confidence: number;
  reason: string;
}

const fmt = (val: number | string | undefined | null, decimals = 2) => {
  const n = Number(val ?? 0);
  return isNaN(n) ? "0" : n.toFixed(decimals);
};

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signals");
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(false);
  const [scanStatus, setScanStatus] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<{name: string; tier: string} | null>(null);

  const loadSignals = async () => {
    setLoading(true);
    setScanStatus("Loading signals...");
    try {
      const res = await fetch("/api/signals");
      const data = await res.json();
      if (data.success) {
        setSignals(data.signals || []);
      }
    } catch {}
    setLoading(false);
    setScanStatus("");
  };

  const scanMarkets = async () => {
    setLoading(true);
    setScanStatus("Scanning 50+ coins...");
    try {
      const res = await fetch("/api/scan-opportunities");
      const data = await res.json();
      if (data.success) {
        setSignals(data.opportunities || []);
        setScanStatus(`Found ${data.opportunities?.length || 0} opportunities!`);
      }
    } catch {
      setScanStatus("Scan failed");
    }
    setLoading(false);
    setTimeout(() => setScanStatus(""), 3000);
  };

  const executeTrade = async (signal: Signal) => {
    if (!confirm(`${signal.type} ${signal.symbol} at $${signal.price}?`)) return;
    try {
      const res = await fetch("/api/execute-trade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          symbol: signal.symbol.replace("USDT", ""),
          type: signal.type,
          amount: 100,
          price: signal.price
        })
      });
      const data = await res.json();
      if (data.success) {
        alert(`Order placed: ${signal.type} ${signal.symbol}`);
      } else {
        alert("Order failed: " + (data.error || "Unknown error"));
      }
    } catch {
      alert("Network error");
    }
  };

  useEffect(() => {
    loadSignals();
    const saved = localStorage.getItem("quantai_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">QuantAI</span>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 hover:bg-zinc-800 rounded-lg">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-2">
            {["signals", "portfolio", "pricing"].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg capitalize ${activeTab === tab ? "bg-blue-600" : "hover:bg-zinc-800"}`}
              >
                {tab}
              </button>
            ))}
            <button onClick={() => setShowLogin(true)} className="w-full text-left px-4 py-3 rounded-lg hover:bg-zinc-800">
              {user ? user.name : "Login"}
            </button>
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="pt-16 p-4">
        {activeTab === "signals" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Trading Signals</h2>
                <p className="text-zinc-400 text-sm">{scanStatus || `${signals.length} opportunities`}</p>
              </div>
              <button onClick={scanMarkets} disabled={loading} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                {loading ? "Scanning..." : "Scan Markets"}
              </button>
            </div>

            <div className="space-y-4">
              {signals.length === 0 && !loading && (
                <div className="text-center py-12 bg-zinc-900 rounded-xl border border-zinc-800">
                  <Brain className="w-16 h-16 mx-auto text-zinc-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">No Signals</h3>
                  <p className="text-zinc-400">Click "Scan Markets" to find opportunities</p>
                </div>
              )}
              {signals.map((s) => (
                <div key={s.id} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${s.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                        {s.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{s.symbol}</h3>
                        <p className="text-zinc-400 text-sm">{s.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${Number(s.price ?? 0).toLocaleString()}</p>
                      <p className={s.change24h >= 0 ? "text-green-400 text-sm" : "text-red-400 text-sm"}>
                        {s.change24h >= 0 ? "+" : ""}{fmt(s.change24h)}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${s.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                      {s.type}
                    </span>
                    <span className="text-zinc-400 text-sm">Confidence: {fmt(s.confidence)}%</span>
                    <button onClick={() => executeTrade(s)} className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Execute
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 text-center">
              <BarChart3 className="w-16 h-16 mx-auto text-zinc-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Track Your Holdings</h3>
              <p className="text-zinc-400 mb-4">Add assets to track your portfolio value</p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium">
                <Plus className="w-4 h-4 inline mr-2" /> Add Asset
              </button>
            </div>
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tier: "Free", price: "₹0", features: ["5 signals/day", "Basic portfolio", "Market data"] },
                { tier: "Pro", price: "₹299", popular: true, features: ["Unlimited signals", "AI insights", "Auto-trading"] },
                { tier: "Enterprise", price: "₹1,499", features: ["API access", "White-label", "Priority support"] },
              ].map((plan) => (
                <div key={plan.tier} className={`rounded-xl p-6 border ${plan.popular ? "bg-blue-600/10 border-blue-500" : "bg-zinc-900 border-zinc-800"}`}>
                  {plan.popular && <span className="text-blue-400 text-sm">Most Popular</span>}
                  <h3 className="text-xl font-bold mt-2">{plan.tier}</h3>
                  <p className="text-3xl font-bold mt-4">{plan.price}<span className="text-zinc-400 text-sm">/mo</span></p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-zinc-300"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />{f}</li>)}
                  </ul>
                  <button className={`w-full mt-6 py-2 rounded-lg font-medium ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-zinc-800 hover:bg-zinc-700"}`}>
                    {plan.tier === "Free" ? "Current" : "Subscribe"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowLogin(false)}>
          <div className="bg-zinc-900 rounded-2xl p-6 w-full max-w-md border border-zinc-800" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-6">Login to QuantAI</h3>
            <form onSubmit={(e) => { e.preventDefault(); setUser({name: "Demo User", tier: "free"}); setShowLogin(false); localStorage.setItem("quantai_user", JSON.stringify({name: "Demo User", tier: "free"})); }} className="space-y-4">
              <input type="email" placeholder="Email" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" required />
              <input type="password" placeholder="Password" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" required />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
