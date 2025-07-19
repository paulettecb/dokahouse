const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require('path');
require('dotenv').config();

const API_BASE = 'https://api.stagingeb.com/v1';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api', async (req, res) => {
  try {
    const url = API_BASE + req.path + (req.originalUrl.includes('?') ? req.originalUrl.substring(req.originalUrl.indexOf('?')) : '');
    const options = {
      method: req.method,
      headers: {
        'X-Authorization': process.env.EASYBROKER_TOKEN,
        'Content-Type': 'application/json',
      },
    };
    if (req.method !== 'GET' && req.body && Object.keys(req.body).length) {
      options.body = JSON.stringify(req.body);
    }
    const response = await fetch(url, options);
    const data = await response.text();

    res.status(response.status);
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Proxy error' });
  }
});

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '../dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
