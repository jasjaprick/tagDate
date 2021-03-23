const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function verifyPassword(username, password) {
  if (username === 'Jorge' && password === '1234') {
    return true;
  }
  return false;
}

module.exports = { authenticateToken, verifyPassword };

// on the client side...:
// fetch(url, {
//   headers: {
//     authorization: `bearer ${token}`
//   }
// })
