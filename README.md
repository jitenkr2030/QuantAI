# QuantAI Trading Platform

## Overview

**QuantAI** is a SaaS AI trading platform that provides users with trading signals, AI-powered market insights, and automated trading tools. Users subscribe to different tiers to access premium features.

---

## Live Platform

**URL:** https://jitenkumar.zo.space/

### Pricing (INR)
| Tier | Price | Features |
|------|-------|----------|
| Free | ₹0 | 5 signals/day, basic portfolio |
| Pro | ₹299/mo | Unlimited signals, AI insights, advanced charts, auto-trading |
| Enterprise | ₹1,499/mo | Everything in Pro + API access, white-label, priority support |

---

## Features Implemented ✅

### Tier-Based Access Control
- Signal limits enforced (Free: 5, Pro: unlimited)
- Tier-aware API responses
- Upgrade prompts for free users

### Core APIs
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/signals` | GET | Get trading signals (tier-limited) |
| `/api/portfolio` | GET/POST | Portfolio tracker |
| `/api/chart` | GET | Advanced price charts (Pro+) |
| `/api/insights` | GET | AI market insights (Pro+) |
| `/api/auto-trade` | GET/POST | Auto-trading setup (Pro+) |
| `/api/enterprise` | GET/POST | API key management (Enterprise) |
| `/api/auth` | POST | User authentication |
| `/api/payments` | POST | Stripe payment integration |

### Pages
| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/pricing` | Pricing plans (INR) |
| `/dashboard` | Main trading dashboard |
| `/terms` | Terms of Service |
| `/disclaimer` | Risk Disclaimer |

---

## API Details

### Signals API
```json
GET /api/signals?tier=free
{
  "success": true,
  "signals": [...],
  "market": { "totalSignals": 5, "buySignals": 5, "sellSignals": 0 },
  "tier": "free",
  "limit": 5
}
```

### Portfolio API
```json
GET /api/portfolio?userId=user123
POST /api/portfolio
{
  "action": "add",
  "symbol": "BTC",
  "quantity": 0.5,
  "price": 50000
}
```

### AI Insights API (Pro+)
```json
GET /api/insights?symbol=bitcoin&tier=pro
{
  "success": true,
  "insights": {
    "symbol": "BTC",
    "trend": "bullish",
    "confidence": 75,
    "price": 74000,
    "analysis": "Strong upward momentum detected",
    "support": 73000,
    "resistance": 76000
  }
}
```

### Auto-Trade API (Pro+)
```json
GET /api/auto-trade?action=status
POST /api/auto-trade?action=enable
{
  "symbol": "BTCUSDT",
  "amount": 100,
  "type": "MARKET",
  "mode": "paper"
}
```

### Enterprise API Access
```json
POST /api/enterprise?action=generate
{
  "email": "user@example.com",
  "tier": "enterprise"
}
```

---

## Technology Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Hono (Bun)
- **Data Sources:** CoinGecko API (free), Binance Testnet
- **Payments:** Stripe (ready for INR)

---

## Business Model

### Revenue Streams
1. **Subscription Revenue** - Monthly/annual subscriptions
2. **Signal Sales** - One-time signal packs
3. **Enterprise API** - B2B API access
4. **White-label** - Branded solutions for businesses

### India-Focused Features
- INR pricing (₹299, ₹1,499)
- UPI & Indian payment methods ready
- Localized support docs

---

## Legal

- **Terms of Service:** `/terms`
- **Risk Disclaimer:** `/disclaimer`
- Financial trading disclaimer prominently displayed

---

## Roadmap

- [x] Core platform
- [x] Tier-based access
- [x] Payment integration
- [x] Legal pages
- [ ] User dashboard with history
- [ ] Real broker integration
- [ ] Mobile app
- [ ] Telegram/WhatsApp signal alerts

---

*Last Updated: March 2026*
