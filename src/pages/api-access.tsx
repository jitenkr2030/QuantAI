import { ArrowRight, Code, Key, Zap, Copy, Check, ExternalLink } from "lucide-react";

const plans = [
  { name: "Starter", price: 499, calls: "1,000/mo", features: ["Basic signals API", "5 supported coins", "Email support"] },
  { name: "Developer", price: 1499, calls: "10,000/mo", features: ["Full signals API", "50+ coins", "Priority support", "Webhooks"] },
  { name: "Business", price: 2999, calls: "Unlimited", features: ["All Developer features", "Real-time streaming", "Custom indicators", "Dedicated support"] },
  { name: "Enterprise", price: 9999, calls: "Unlimited + White-label", features: ["Everything in Business", "Custom integration", "SLA guarantee", "Account manager"] }
];

export default function ApiAccess() {
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
          <Code className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">API Access</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Integrate AI-powered trading signals into your own applications
          </p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4">Quick Example</h2>
          <pre className="bg-zinc-950 p-4 rounded-lg text-sm overflow-x-auto">
{`// Fetch latest signals
fetch('https://jitenkumar.zo.space/api/signals', {
  headers: { 'X-API-Key': 'YOUR_API_KEY' }
})
.then(res => res.json())
.then(data => console.log(data.signals));`}
          </pre>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">₹{plan.price}</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <p className="text-sm text-blue-400 mb-4">{plan.calls}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-medium">
                Get API Key
              </button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900 rounded-xl p-6 text-center">
            <Zap className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Fast Integration</h3>
            <p className="text-sm text-zinc-400">RESTful API with comprehensive documentation</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6 text-center">
            <Key className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-sm text-zinc-400">API keys with rate limiting and encryption</p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6 text-center">
            <ExternalLink className="w-10 h-10 text-purple-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Webhooks</h3>
            <p className="text-sm text-zinc-400">Get instant notifications for new signals</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-8 py-3 rounded-lg">
            Start Free Trial
          </button>
        </div>
      </main>
    </div>
  );
}