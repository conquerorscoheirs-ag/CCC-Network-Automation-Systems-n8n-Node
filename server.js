// server.js
process.env.N8N_PORT = process.env.PORT || 5678;
process.env.N8N_HOST = process.env.RENDER_EXTERNAL_HOSTNAME;
process.env.N8N_PROTOCOL = 'https';
process.env.WEBHOOK_URL = `https://${process.env.RENDER_EXTERNAL_HOSTNAME}/`;

// Force n8n to use Postgres if the variables are set
if (process.env.DB_POSTGRESDB_HOST) {
  process.env.DB_TYPE = 'postgresdb';
}

require('n8n/bin/n8n');
