const express = require('express');
const path = require('path');
const route = express.Router();

route.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

route.get('*', (req, res) => {
   res.send('Error 404, not found');
});

module.exports = route;