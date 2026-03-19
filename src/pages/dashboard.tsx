import { useState, useEffect } from "react";
import { Brain, Zap, Menu, X, LogOut, Crown, BarChart3, CheckCircle, Loader2 } from "lucide-react";

interface Signal {
  id: string;
  symbol: string;
  name: string;
  type: "BUY" | "SELL";
  entryPrice: number;
  targetPrice: number;
  stopLoss: number;
  riskReward: string;
  confidence: number;
  timeframe: string;
  reason: string;
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signals");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [signals, setSignals] = useState<Signal[]>([]);
  const [loading, setLoading] = useState(false);
  const [scanStatus, setScanStatus] = useState("");

  const fmtINR = (val: any) => {
    const n = Number(val ?? 0);
    return isNaN(n) ? "₹0" : "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const loadSignals = async () => {
    setLoading(true);
    setScanStatus("Scanning markets...");
    try {
      const res = await fetch("/api/signals");
      const data = await res.json();
      if (data.success && data.signals) {
        setSignals(data.signals.slice(0, 10));
        setScanStatus(`${data.signals.length} opportunities found`);
      }
    } catch (err) { console.error(err); }
    setLoading(false);
    setTimeout(() => setScanStatus(""), 3000);
  };

  useEffect(() => { loadSignals(); }, []);

  const executeTrade = (signal: Signal) => {
    alert(`${signal.type} ${signal.symbol}/USDT\n\nEntry: ${fmtINR(signal.entryPrice)}\nTarget: ${fmtINR(signal.targetPrice)}\nStop: ${fmtINR(signal.stopLoss)}\nRisk/Reward: ${signal.riskReward}\n\n${signal.reason}`);
  };

  const navItems = [
    { id: "signals", label: "Signals", icon: Brain },
    { id: "portfolio", label: "Portfolio", icon: BarChart3 },
    { id: "pricing", label: "Upgrade", icon: Crown },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"><Brain className="w-5 h-5" /></div>
          <span className="font-bold">QuantAI</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X /> : <Menu />}</button>
      </header>

      {mobileMenuOpen && (
        <nav className="lg:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-2">
          {navItems.map(item => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeTab === item.id ? "bg-blue-600" : "hover:bg-zinc-800"}`}>
              <item.icon className="w-5 h-5" /><span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}

      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-zinc-900 border-r border-zinc-800 flex-col">
        <div className="p-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"><Brain className="w-6 h-6" /></div>
            <div><h1 className="font-bold">QuantAI</h1><p className="text-xs text-zinc-500">Trading Platform</p></div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${activeTab === item.id ? "bg-blue-600" : "hover:bg-zinc-800 text-zinc-300"}`}>
              <item.icon className="w-5 h-5" /><span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <button onClick={() => setShowAuthModal(true)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-zinc-800 text-zinc-300">
            <LogOut className="w-5 h-5" /><span>Login / Signup</span>
          </button>
        </div>
      </aside>

      <main className="lg:ml-64 pt-16 lg:pt-0 p-4 lg:p-8">
        {activeTab === "signals" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Trading Signals</h2>
                <p className="text-zinc-400 text-sm">{loading ? scanStatus : scanStatus || `${signals.length} opportunities`}</p>
              </div>
              <button onClick={loadSignals} disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                {loading ? "Scanning..." : "Scan Markets"}
              </button>
            </div>

            <div className="space-y-4">
              {signals.map(signal => (
                <div key={signal.id} className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                  <div className={`px-4 py-3 flex items-center justify-between ${signal.type === "BUY" ? "bg-green-900/30" : "bg-red-900/30"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${signal.type === "BUY" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                        {signal.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <h3 className="font-bold">{signal.symbol}/USDT</h3>
                        <p className="text-zinc-400 text-xs">{signal.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${signal.type === "BUY" ? "bg-green-500" : "bg-red-500"}`}>{signal.type}</span>
                      <span className="bg-zinc-800 px-2 py-1 rounded text-xs">{signal.timeframe}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                        <p className="text-zinc-400 text-xs">Entry</p>
                        <p className="font-bold text-green-400">{fmtINR(signal.entryPrice)}</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                        <p className="text-zinc-400 text-xs">Target</p>
                        <p className="font-bold text-blue-400">{fmtINR(signal.targetPrice)}</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                        <p className="text-zinc-400 text-xs">Stop Loss</p>
                        <p className="font-bold text-red-400">{fmtINR(signal.stopLoss)}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-zinc-400 text-sm">Risk/Reward: <span className="text-yellow-400 font-bold">{signal.riskReward}</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400 text-sm">Confidence:</span>
                        <div className="w-20 h-2 bg-zinc-800 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{width: `${signal.confidence}%`}} /></div>
                        <span className="text-sm font-bold">{signal.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">💡 {signal.reason}</p>
                    <button onClick={() => executeTrade(signal)} className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" /> Execute {signal.type}
                    </button>
                  </div>
                  <div className="px-4 py-2 bg-zinc-800/50 text-center">
                    <p className="text-zinc-500 text-xs">⚠️ Not financial advice. Trade at your own risk.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Portfolio Tracker</h2>
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 text-center">
              <BarChart3 className="w-16 h-16 mx-auto text-zinc-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-zinc-400">Add assets and track your portfolio performance</p>
            </div>
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Upgrade Your Plan</h2>
            <div className="grid gap-4">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <h3 className="font-bold">Free</h3><p className="text-zinc-400">₹0/mo</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-900/30 to-cyan-800/10 border-2 border-cyan-500 rounded-xl p-4">
                <h3 className="font-bold text-cyan-400">Pro ⭐</h3><p className="text-cyan-400 font-bold">₹299/mo</p>
                <p className="text-xs text-zinc-400 mt-2">10-15 signals/day • AI Insights • Real-time alerts</p>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                <h3 className="font-bold text-amber-400">Enterprise</h3><p className="text-amber-400 font-bold">₹1,499/mo</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowAuthModal(false)}>
          <div className="bg-zinc-900 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-4">{authMode === "login" ? "Login" : "Sign Up"}</h3>
            <div className="space-y-4">
              {authMode === "signup" && <input type="text" placeholder="Name" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" />}
              <input type="email" placeholder="Email" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" />
              <input type="password" placeholder="Password" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2" />
              <button className="w-full bg-blue-600 py-2 rounded-lg font-medium">Submit</button>
            </div>
            <p className="mt-4 text-center text-sm text-zinc-400">
              {authMode === "login" ? "No account? " : "Have account? "}
              <button onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")} className="text-blue-400">Switch</button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
