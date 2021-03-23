const jwt = require('jsonwebtoken');
const { verifyPassword } = require('./authService');

const loginController = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = { name: username, password: password };
  const credentials = verifyPassword(username, password);
  if (credentials === false) {
    res.send('Invalid username or password!');
  }
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  // res.cookie('token', accessToken, { httpOnly: true });
  res.status(200).send('Welcome, ' + user.name);
};

module.exports = loginController;
