process.env.N8N_PORT = process.env.PORT;
process.env.N8N_HOST = process.env.RENDER_EXTERNAL_HOSTNAME;
process.env.N8N_PROTOCOL = 'https';
process.env.WEBHOOK_URL = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}/`;

// Start n8n
require('n8n/bin/n8n');
