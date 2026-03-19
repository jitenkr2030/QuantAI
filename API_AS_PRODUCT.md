# QuantAI Trading Platform - API as a Product

## 🚀 Live Platform
**URL:** https://jitenkumar.zo.space/

## 🔗 API Access
**URL:** https://jitenkumar.zo.space/api-access

## 📡 API Keys Management
**URL:** https://jitenkumar.zo.space/api-keys

---

## API Pricing Tiers

| Plan | Price | Requests/Day | Features |
|------|-------|-------------|----------|
| **Free** | ₹0 | 1,000 | Basic signals, 5 min cache |
| **Developer** | ₹199/mo | 10,000 | All signals, 1 min cache, priority support |
| **Enterprise** | ₹999/mo | 100,000 | Unlimited, WebSocket, white-label |

---

## API Endpoints

### GET /api/signals
Get AI trading signals
```bash
curl -X GET "https://jitenkumar.zo.space/api/signals" \
  -H "X-API-Key: your_api_key" \
  -H "Accept: application/json"
```

### GET /api/prices
Get live cryptocurrency prices
```bash
curl -X GET "https://jitenkumar.zo.space/api/prices" \
  -H "X-API-Key: your_api_key"
```

### GET /api/insights
Get detailed market insights
```bash
curl -X GET "https://jitenkumar.zo.space/api/insights?symbol=bitcoin" \
  -H "X-API-Key: your_api_key"
```

### GET /api/signals-protected
Protected endpoint with rate limiting
```bash
curl -X GET "https://jitenkumar.zo.space/api/signals-protected" \
  -H "X-API-Key: your_api_key"
```

---

## Response Example

```json
{
  "success": true,
  "signals": [
    {
      "id": "sig_btc_1234567890",
      "symbol": "BTC",
      "pair": "BTC/USDT",
      "type": "BUY",
      "entryPrice": 67000000,
      "targetPrice": 70350000,
      "stopLoss": 65660000,
      "riskReward": "1:2.5",
      "confidence": 89,
      "timeframe": "4H",
      "reason": "Golden cross detected on 4H chart"
    }
  ],
  "usage": {
    "requests": 42,
    "limit": 1000,
    "remaining": 958,
    "resetIn": 43200
  }
}
```

---

## Features Implemented

| Feature | Status |
|---------|--------|
| API Key Management | ✅ `/api-keys` page |
| Rate Limiting | ✅ Per tier limits |
| Usage Tracking | ✅ Requests counter |
| Protected Endpoints | ✅ `/api/signals-protected` |
| Plan Enforcement | ✅ Free/Dev/Enterprise tiers |
| API Documentation | ✅ `/api-access` page |
| Code Examples | ✅ cURL examples |

---

## How to Use

1. **Get API Key**: Visit `/api-keys` to create your key
2. **Choose Plan**: Free (1K/day), Developer (10K/day), Enterprise (100K/day)
3. **Make Requests**: Include `X-API-Key` header in all requests
4. **Monitor Usage**: Track usage on `/api-keys` dashboard

---

## Revenue Model

- **Free Tier**: Lead generation, builds trust
- **Developer (₹199/mo)**: Passive income from API usage
- **Enterprise (₹999/mo)**: High-margin B2B revenue

---

*Last Updated: March 2026*
