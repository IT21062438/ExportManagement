// const jwt = require("jsonwebtoken");
// const ensureAuthenticated = (req, res, next) => {
//   const auth = req.headers["authorization"];
//   if (!auth) {
//     return res.status(403).json({
//       message: "Unauthorized, JWT token is require",
//     });
//   }
//   try {
//     const decoded = jwt.verify(auth, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res
//       .status(403)
//       .json({ message: "Unauthorized, JWT token wrong or expired" });
//   }
// };

// module.exports = ensureAuthenticated;

// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided', success: false });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token', success: false });
    req.user = decoded;
    next();
  });
};

const authorizeRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied: insufficient permissions', success: false });
  }
  next();
};

module.exports = { authenticate, authorizeRoles };
