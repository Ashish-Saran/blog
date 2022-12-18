require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const path = require('path');

require('./server/database')();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', require('./server/router'));

app.listen(3001, () => console.log('server running'));