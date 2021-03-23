const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { authenticateToken } = require('./authService');
const loginController = require('./authControllers');

app.use(express.json());
app.use(morgan('tiny'));
app.use(cookieParser());

app.get('/posts', authenticateToken, (req, res) => {
  res.send('Here are the posts...');
});

app.post('/login', loginController);

app.listen(3001, () => {
  console.log('AuthServer is up on 3001');
});
