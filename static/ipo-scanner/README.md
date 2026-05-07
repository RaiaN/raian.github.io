# IPO Growth Stocks Scanner

A self-hostable, single-file static web app that screens 50 high-growth IPOs from May 2024 – May 2026 across US (NYSE/Nasdaq), Asia-Pacific (HKEX, TSE, NSE/BSE, KRX), and EMEA-ex-Europe (DFM) exchanges. Includes a scoring framework, curated baseline metrics, and live last-price fetching via free APIs.

## Features

- **Framework tab** — full quantitative + qualitative + IPO-specific scoring rubric with hard disqualifiers
- **Screener tab** — sortable, filterable table; click any row to expand full company detail incl. enterprise GTM motion
- **Live prices** — auto-fetched from Stooq on load (US, Hong Kong, Tokyo); optional Twelve Data API key extends to India/Korea/Dubai
- **Filters** — sector, exchange, GTM motion, score; full-text search on company / ticker
- **Single file** — no build step, no dependencies, drop in and host

## Deploy to GitHub Pages (4 steps)

1. Create a new public GitHub repo (e.g. `ipo-scanner`)
2. Commit `index.html` to the root of the repo's `main` branch
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`, and Save
4. Within ~1 minute the site is live at `https://<your-username>.github.io/ipo-scanner/`

For a custom domain, add a `CNAME` file containing your domain at the repo root and configure DNS as per GitHub's docs.

## Live data sources

| Source | Coverage | Auth | CORS | Rate limit |
|---|---|---|---|---|
| **Stooq** | US, HK, TSE, several others | none | yes | generous (no published cap) |
| **Twelve Data** | NSE India, KRX Korea, DFM Dubai (and global) | free API key | yes | 800 calls/day free tier |

To add Twelve Data coverage:

1. Sign up at https://twelvedata.com (free, no card)
2. Copy your API key from the dashboard
3. On the deployed site, click **⚙ Settings**, paste, Save
4. The key is stored in `localStorage` on your domain — never sent anywhere except directly to Twelve Data's API

## Customising

- **Add/remove companies** — edit the `DATA` array at the top of the `<script>` block in `index.html`
- **Change scoring weights** — edit the framework cards in the Framework tab section
- **Different colour scheme** — edit the CSS variables in `:root` at the top of the `<style>` block

## Limitations

- Live prices are 15–60 min delayed depending on exchange. Use real-time platforms for execution.
- Stooq doesn't cover every ticker — non-supported rows show baked "as-of early May 2026" prices with a `cached` badge
- `localStorage` is per-domain, so the API key needs to be re-entered if you move hosts
- Browser-side fetches mean rate limits are per-user, not per-deployment — friendlier than a shared backend

## Caveat

Not investment advice. Educational framework + dataset only. Verify all metrics against primary sources (S-1, 10-K, 10-Q, RHP/DRHP, exchange filings) before any trading decision.
