const jwt = require("jsonwebtoken");
const Secure = require("../Models/SecuringAPI/Secure-Model");

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token)
      return res.status(403).json({
        message: "No token provided",
      });
    const decoded = jwt.verify(token, "secretKey");
    req.userId = decoded.id;

    const user = await Secure.findById(req.userId, { password: 0 });
    if (!user)
      return res.status(404).json({
        message: "No user found",
      });
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};
