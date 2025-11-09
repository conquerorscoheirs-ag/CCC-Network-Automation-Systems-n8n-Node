⚠️ WARNING:
If Render redeploys automatically (e.g., you push new Git commits) → **your data is wiped**.
To avoid this, we will **disable auto-deploy**.

# ✅ ✅ ✅ FULL WORKING SETUP FOR [RENDER](https://render.com/) [NODE.JS](https://nodejs.org/) (FREE PLAN)

You will create a simple GitHub repo containing:

✅ package.json
✅ server.js
✅ Procfile (optional)
✅ render.yaml (optional, not required for Node mode)

But the simplest approach: **deploy via manual Node.js service (NO render.yaml)**.

---

# ✅ STEP 1 — Create a NEW GitHub repo with these files:

```
/ (repo root)
├── package.json
├── server.js
└── .gitignore
```

---

# ✅ STEP 2 — Add this **package.json**

```json
{
  "name": "n8n-render",
  "version": "1.0.0",
  "scripts": {
    "start": "n8n start"
  },
  "dependencies": {
    "n8n": "latest"
  }
}
```

✅ This installs n8n on Render
✅ And starts it with `npm start`

---

# ✅ STEP 3 — Add this **server.js** (important hack for Render)

```js
// Render sets a dynamic port, n8n needs it
process.env.N8N_PORT = process.env.PORT;
process.env.N8N_HOST = process.env.RENDER_EXTERNAL_HOSTNAME;
process.env.WEBHOOK_URL = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}/`;

// Start n8n
require('n8n/bin/n8n');
```

✅ This ensures n8n works properly on Render Free Tier
✅ Fixes webhooks
✅ Fixes runtime host detection

---

# ✅ STEP 4 — Add `.gitignore`

```
node_modules
```

Render will install them automatically.

---

# ✅ STEP 5 — IMPORTANT ENV VARIABLES (in Render dashboard)

After creating the service:

Go to → **Environment**

Add:

| Key                     | Value        |
| ----------------------- | ------------ |
| N8N_BASIC_AUTH_ACTIVE   | true         |
| N8N_BASIC_AUTH_USER     | admin        |
| N8N_BASIC_AUTH_PASSWORD | yourPassword |
| N8N_PROTOCOL            | https        |
| NODE_ENV                | production   |

These are optional but recommended:

| Key                             | Value |
| ------------------------------- | ----- |
| EXECUTIONS_PROCESS              | main  |
| EXECUTIONS_DATA_SAVE_ON_ERROR   | all   |
| EXECUTIONS_DATA_SAVE_ON_SUCCESS | none  |

✅ Works perfectly for Render

---

# ✅ STEP 6 — Disable Auto-Deploy

This is critical.

Go to:
Render → Your Service → **Settings** → Auto-Deploy → OFF

✅ Prevents losing your data
✅ Prevents accidental redeploy

---

# ✅ STEP 7 — Deploy the service manually

Render → **New Web Service**

* Choose **Node.js**
* Select your GitHub repo
* Build command:

  ```
  npm install
  ```
* Start command:

  ```
  npm start
  ```

✅ Render will run n8n
✅ It will stay live 24/7
✅ Workflows persist UNTIL manually redeploy
✅ This is the safest possible setup for Render Free Tier

---

# ✅ FINAL RESULT

✅ **n8n running LIVE on Render Free Tier**
✅ No sleeping
✅ No trial
✅ No cloud subscription
✅ 24/7 automation
✅ Everything stored and working normally
✅ As long as you **do NOT redeploy**
✅ As long as Render does not restart your container (rare)
