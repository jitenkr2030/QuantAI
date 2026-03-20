import { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [activeTab, setActiveTab] = useState("signals");
  const [portfolio, setPortfolio] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("quantai_user");
    if (savedUser) setUser(JSON.parse(savedUser));
    fetchSignals();
  }, []);

  const fetchSignals = async () => {
    try {
      const res = await fetch("https://jitenkumar.zo.space/api/signals");
      const data = await res.json();
      if (data.success) setOpportunities(data.signals || []);
    } catch (e) { console.error("Failed to fetch signals"); }
  };

  const handleExecute = (signal) => {
    if (!user) {
      setShowAuth(true);
      setAuthMode("login");
    } else {
      alert(`Trade executed for ${signal.coin?.toUpperCase()} at $${signal.entryPrice}\n\nThis would connect to your broker API in production.`);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = { email: formData.get("email"), name: "User", tier: "free" };
    setUser(newUser);
    localStorage.setItem("quantai_user", JSON.stringify(newUser));
    setShowAuth(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = { email: formData.get("email"), name: formData.get("name"), tier: "free" };
    setUser(newUser);
    localStorage.setItem("quantai_user", JSON.stringify(newUser));
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("quantai_user");
  };

  const handleUpgrade = (plan) => {
    if (!user) {
      setShowAuth(true);
      setAuthMode("signup");
    } else {
      window.location.href = "/pay?plan=" + plan;
    }
  };

  const handleAddAsset = (asset) => {
    if (!user) {
      setShowAuth(true);
      setAuthMode("signup");
    } else {
      setPortfolio([...portfolio, { ...asset, id: Date.now() }]);
      alert("Asset added! Track in Portfolio tab.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#fff", padding: "20px" }}>
      {showAuth && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#1a1a2e", padding: "30px", borderRadius: "12px", maxWidth: "400px", width: "90%" }}>
            <h2 style={{ marginBottom: "20px" }}>{authMode === "login" ? "Login" : "Sign Up"}</h2>
            <form onSubmit={authMode === "login" ? handleLogin : handleSignup}>
              {authMode === "signup" && <input name="name" placeholder="Name" required style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #333", background: "#0a0a0f", color: "#fff" }} />}
              <input name="email" type="email" placeholder="Email" required style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #333", background: "#0a0a0f", color: "#fff" }} />
              <input name="password" type="password" placeholder="Password" required style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "6px", border: "1px solid #333", background: "#0a0a0f", color: "#fff" }} />
              <button type="submit" style={{ width: "100%", padding: "12px", background: "#6366f1", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>{authMode === "login" ? "Login" : "Sign Up"}</button>
            </form>
            <p style={{ marginTop: "15px", textAlign: "center", color: "#888" }}>
              {authMode === "login" ? "Don't have an account?" : "Already have an account?"} <button onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")} style={{ background: "none", border: "none", color: "#6366f1", cursor: "pointer" }}>{authMode === "login" ? "Sign Up" : "Login"}</button>
            </p>
            <button onClick={() => setShowAuth(false)} style={{ marginTop: "10px", width: "100%", padding: "8px", background: "#333", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      )}

      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "10px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>QuantAI Dashboard</h1>
        <nav style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["signals", "portfolio", "pricing", "alerts", "reseller", "affiliates", "courses", "api-access"].map(tab => (
            <button key={tab} onClick={() => window.location.href = "/" + (tab === "signals" ? "dashboard" : tab)} style={{ padding: "8px 16px", background: activeTab === tab ? "#6366f1" : "#1a1a2e", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", textTransform: "capitalize" }}>{tab.replace("-", " ")}</button>
          ))}
        </nav>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {user ? <><span style={{ color: "#888" }}>{user.email}</span><button onClick={handleLogout} style={{ padding: "8px 16px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>Logout</button></> : <button onClick={() => setShowAuth(true)} style={{ padding: "8px 16px", background: "#6366f1", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>Login / Sign Up</button>}
        </div>
      </header>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {["signals", "portfolio", "pricing"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "10px 20px", background: activeTab === tab ? "#6366f1" : "#1a1a2e", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", textTransform: "capitalize" }}>{tab}</button>
        ))}
      </div>

      {activeTab === "signals" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {opportunities.length === 0 ? (
              <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px", background: "#1a1a2e", borderRadius: "12px" }}>
                <p style={{ color: "#888", marginBottom: "20px" }}>Scanning market for opportunities...</p>
                <button onClick={fetchSignals} style={{ padding: "10px 20px", background: "#6366f1", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>Scan Now</button>
              </div>
            ) : opportunities.map((sig) => (
              <div key={sig.id} style={{ background: "#1a1a2e", padding: "20px", borderRadius: "12px", border: sig.type === "BUY" ? "1px solid #22c55e" : "1px solid #ef4444" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>{sig.coin?.toUpperCase() || sig.symbol?.toUpperCase()}</span>
                  <span style={{ padding: "4px 12px", borderRadius: "20px", background: sig.type === "BUY" ? "#22c55e" : "#ef4444", color: "#fff", fontWeight: "bold", fontSize: "12px" }}>{sig.type}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px" }}>
                  <div><p style={{ color: "#888", fontSize: "12px" }}>Entry</p><p style={{ fontWeight: "bold" }}>${sig.entryPrice?.toFixed(2)}</p></div>
                  <div><p style={{ color: "#888", fontSize: "12px" }}>Target</p><p style={{ fontWeight: "bold" }}>${sig.targetPrice?.toFixed(2)}</p></div>
                  <div><p style={{ color: "#888", fontSize: "12px" }}>Stop Loss</p><p style={{ fontWeight: "bold", color: "#ef4444" }}>${sig.stopLoss?.toFixed(2)}</p></div>
                  <div><p style={{ color: "#888", fontSize: "12px" }}>Confidence</p><p style={{ fontWeight: "bold", color: "#22c55e" }}>{sig.confidence || sig.winRate || 85}%</p></div>
                </div>
                <p style={{ color: "#888", fontSize: "12px", marginBottom: "12px" }}>{sig.reason || sig.description || "Strong momentum signal"}</p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => handleExecute(sig)} style={{ flex: 1, padding: "10px", background: "#6366f1", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>Execute</button>
                  <button onClick={() => user ? alert("Copied! Share with your Telegram group.") : (setShowAuth(true), setAuthMode("signup"))} style={{ flex: 1, padding: "10px", background: "#1a1a2e", color: "#fff", border: "1px solid #333", borderRadius: "6px", cursor: "pointer" }}>Resell</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "portfolio" && (
        <div style={{ background: "#1a1a2e", padding: "30px", borderRadius: "12px" }}>
          <h2 style={{ marginBottom: "20px" }}>Portfolio Tracker</h2>
          {portfolio.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <p style={{ color: "#888", marginBottom: "20px" }}>No assets yet. Add your first asset to track.</p>
              <button onClick={() => user ? setShowAuth(false) : (setShowAuth(true), setAuthMode("signup"))} style={{ padding: "12px 24px", background: "#6366f1", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Add Asset</button>
            </div>
          ) : (
            <div style={{ display: "grid", gap: "12px" }}>
              {portfolio.map(asset => (
                <div key={asset.id} style={{ display: "flex", justifyContent: "space-between", padding: "15px", background: "#0a0a0f", borderRadius: "8px" }}>
                  <span style={{ fontWeight: "bold" }}>{asset.coin?.toUpperCase()}</span>
                  <span style={{ color: "#22c55e" }}>+{((asset.currentPrice - asset.entryPrice) / asset.entryPrice * 100).toFixed(2)}%</span>
                </div>
              ))}
            </div>
          )}
          {!user && <p style={{ color: "#888", marginTop: "20px", textAlign: "center" }}>Sign up to save and track your portfolio</p>}
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button onClick={() => handleUpgrade("pro")} style={{ padding: "12px 24px", background: "#6366f1", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Upgrade to Pro</button>
          </div>
        </div>
      )}

      {activeTab === "pricing" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
          {[{ name: "Free", price: 0, features: ["5 signals/day", "Basic signals", "Email support"] }, { name: "Pro", price: 1999, features: ["Unlimited signals", "Priority support", "Telegram access", "Portfolio tracker"] }, { name: "Enterprise", price: 9999, features: ["Everything in Pro", "API access", "White-label", "Dedicated support"] }].map(plan => (
            <div key={plan.name} style={{ background: "#1a1a2e", padding: "30px", borderRadius: "12px", textAlign: "center" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>{plan.name}</h3>
              <p style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>{plan.price === 0 ? "Free" : "₹" + plan.price.toLocaleString()}<span style={{ fontSize: "14px", color: "#888" }}>/month</span></p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
                {plan.features.map(f => <li key={f} style={{ padding: "8px", color: "#888" }}>✓ {f}</li>)}
              </ul>
              <button onClick={() => handleUpgrade(plan.name.toLowerCase())} style={{ width: "100%", padding: "12px", background: plan.name === "Pro" ? "#6366f1" : "#1a1a2e", color: "#fff", border: plan.name === "Pro" ? "none" : "1px solid #333", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>{plan.price === 0 ? "Current Plan" : "Upgrade"}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
