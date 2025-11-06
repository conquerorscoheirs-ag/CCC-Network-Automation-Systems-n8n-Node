// Render sets a dynamic port, n8n needs it
process.env.N8N_PORT = process.env.PORT;
process.env.N8N_HOST = process.env.RENDER_EXTERNAL_HOSTNAME;
process.env.WEBHOOK_URL = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}/`;

// Start n8n
require('n8n/bin/n8n');
