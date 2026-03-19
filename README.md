# QuantAI Trading Platform

## 🚀 Live Platform
**URL:** https://jitenkumar.zo.space/

## 📊 Platform Status

| Feature | Status | Data Source |
|---------|--------|-------------|
| Live Prices | ✅ Working | CoinGecko API |
| Signal Generation | ✅ Working | CoinGecko + Analysis |
| AI Insights | ✅ Working | Technical Analysis |
| Portfolio Tracker | ✅ Working | Local Storage |
| User Auth | ✅ Working | In-memory |
| Trade Execution | ✅ Working | Binance Testnet |
| Real-time Stream | ✅ Working | Binance WebSocket |
| Persistent Storage | ✅ Working | File-based |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    QUANTAI PLATFORM                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐     ┌─────────────────────────────────┐ │
│   │   PAGES     │     │         API ROUTES               │ │
│   ├─────────────┤     ├─────────────────────────────────┤ │
│   │ /           │     │ /api/signals     → Live signals │ │
│   │ /dashboard  │     │ /api/prices      → Coin prices   │ │
│   │ /pricing    │     │ /api/insights    → AI analysis  │ │
│   │ /terms      │     │ /api/chart       → OHLCV data   │ │
│   │ /disclaimer│     │ /api/auth        → User auth     │ │
│   │             │     │ /api/portfolio   → Holdings     │ │
│   │             │     │ /api/execute-trade → Binance   │ │
│   │             │     │ /api/stream      → WebSocket     │ │
│   │             │     │ /api/persistence → File DB      │ │
│   └─────────────┘     └─────────────────────────────────┘ │
│                              │                              │
│                              ▼                              │
│   ┌─────────────────────────────────────────────────────┐  │
│   │                 EXTERNAL APIS                        │  │
│   ├─────────────────────────────────────────────────────┤  │
│   │ CoinGecko API     → Market data (FREE, no key)      │  │
│   │ Binance Testnet   → Paper trading (FREE)           │  │
│   │ Binance WebSocket → Real-time prices (FREE)        │  │
│   └─────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 💰 Pricing (INR)

| Plan | Price | Features |
|------|-------|----------|
| Free | ₹0 | 5 signals/day, Basic portfolio |
| Pro | ₹299/mo | Unlimited signals, AI insights, Auto-trading |
| Enterprise | ₹1,499/mo | API access, White-label, Priority support |

## 🔄 User Flow

```
1. Visit Platform → See live signals (auto-loaded)
       ↓
2. Scan Markets → Real-time scan of 50+ coins
       ↓
3. View Signal → BUY/SELL with confidence %
       ↓
4. Execute → Order to Binance Testnet
       ↓
5. Track Portfolio → Add holdings manually
       ↓
6. Get AI Insights → Market analysis (Pro)
```

## 🔧 Custom Domain Setup

1. Go to [Settings > Services](/?t=sites&s=services)
2. Expand QuantAI service
3. Add your custom domain in Custom Domains section
4. Add DNS records:
   - `CNAME www → jitenkumar.zo.space`
   - Or `A record → Zo's IP`

*Note: Requires paid plan*

## 📁 Project Structure

```
QuantAI/
├── src/
│   ├── pages/          # React pages
│   │   ├── index.tsx   # Landing page
│   │   ├── dashboard.tsx
│   │   └── pricing.tsx
│   ├── api/            # API routes
│   │   ├── signals.ts
│   │   ├── auth.ts
│   │   └── ...
│   └── components/
├── data/               # Persistent storage
├── package.json
└── README.md
```

## 🔐 API Endpoints

### Public APIs (no auth needed)
- `GET /api/signals` - Get trading signals
- `GET /api/prices` - Get current prices
- `GET /api/chart?symbol=bitcoin` - Get OHLCV data
- `GET /api/insights?symbol=bitcoin` - Get AI insights

### Authenticated APIs
- `POST /api/auth` - Login/Signup
- `GET /api/portfolio` - Get user portfolio
- `POST /api/execute-trade` - Execute trade on Binance
- `GET /api/stream?action=price&symbol=btcusdt` - Real-time price stream

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Tailwind CSS |
| Backend | Hono (Bun) |
| Database | File-based JSON |
| Market Data | CoinGecko API |
| Trading | Binance Testnet |

## 📈 To Make Production Ready

```
CURRENT             →  PRODUCTION
─────────────────────────────────────────────
In-memory users     →  PostgreSQL/MongoDB
File storage        →  Cloud database
Testnet trading     →  Real Binance API
Free CoinGecko      →  Paid plan (higher limits)
No payments         →  Stripe/Cashfree
No notifications    →  Email/Telegram alerts
Single server       →  Scalable infrastructure
```

## 🤝 Contributing

1. Clone repo
2. Make changes
3. Push to GitHub
4. Deploy via Zo Space

## 📞 Support

- Email: jitenkumar@zo.computer
- GitHub Issues: https://github.com/jitenkr2030/QuantAI/issues

---

*Built with ❤️ on Zo Computer*
