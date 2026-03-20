# RAFlow - SaaS for SEBI Research Analysts

## 🏛️ What is RAFlow?

**RAFlow** is a B2B SaaS platform built for **SEBI Registered Research Analysts** in India. We help RAs manage compliance, clients, and generate SEBI-compliant reports - all in one place.

---

## ✅ Features Implemented

### 1. 📈 NSE/BSE Market Data Integration
- **API**: `/api/market-data?symbol=RELIANCE`
- Real-time stock prices from NSE/BSE
- Watchlist support
- Price, change, volume, market cap, P/E ratio
- 52-week high/low data

### 2. 📄 SEBI-Compliant Report Generation
- **API**: `/api/sebi-report`
- Auto-generates reports with mandatory SEBI disclosures
- Includes analyst certification
- Risk disclosure section
- Conflict of interest declaration
- Download as PDF format

### 3. 📱 WhatsApp Alerts
- **API**: `/api/whatsapp-alert`
- Send research updates to clients
- Instant market alerts
- Template-based messaging
- Ready for WhatsApp Business API integration

### 4. ✅ Compliance Calendar
- **API**: `/api/compliance`
- Tracks all SEBI deadlines
- Monthly, quarterly, annual compliance tasks
- Penalty warnings
- NISM certification tracking
- System audit reminders

### 5. 👥 Client Management & Invoicing
- **Client API**: `/api/clients`
- **Invoice API**: `/api/invoice`
- Track client subscriptions
- Generate GST-compliant invoices
- UPI/Bank transfer payment details
- Renewal reminders

---

## 💰 Pricing (India-Market)

| Plan | Price | Target |
|------|-------|--------|
| Starter | ₹999/mo | New RAs |
| Pro | ₹2,999/mo | Growing RAs |
| Enterprise | ₹9,999/mo | RA Firms |

---

## 🔧 Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS (mobile-first)
- **Backend**: Hono.js API routes
- **Hosting**: Zo Space
- **Data**: Yahoo Finance / NSE BSE APIs

---

## 📊 Competitive Advantage

| Feature | RAFlow | Global Tools |
|---------|--------|--------------|
| SEBI Compliance | ✅ Native | ❌ None |
| Price | ₹999-9,999/mo | $500+/mo |
| Mobile-First | ✅ Yes | ❌ Desktop |
| GST Invoicing | ✅ India | ❌ Global |

---

## 🚀 Quick Start

1. Visit `/dashboard` - Main dashboard
2. Visit `/market` - NSE/BSE data
3. Visit `/pricing` - Plans & pricing
4. Visit `/register` - Create account

---

## 📋 SEBI Compliance Checklist (Built-in)

- [x] Analyst Certification
- [x] Risk Disclosure
- [x] Conflict of Interest Declaration
- [x] Performance History Disclosure
- [x] Monthly/Quarterly Reports
- [x] Annual Compliance Certificate

---

## 🔗 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/market-data` | GET | NSE/BSE stock data |
| `/api/sebi-report` | GET | Generate compliance report |
| `/api/compliance` | GET | Get compliance tasks |
| `/api/clients` | GET | List all clients |
| `/api/invoice` | GET | Generate invoice |
| `/api/whatsapp-alert` | POST | Send WhatsApp alert |

---

*Built for SEBI Research Analysts in India 🇮🇳*
