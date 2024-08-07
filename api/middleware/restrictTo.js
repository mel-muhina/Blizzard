const User = require("../models/User");

const restrictTo = (roles) => {
  return async (req, res, next) => {
    const user = await User.findByUsername(req.user);

    if (roles.includes(user.role)) return next();

    res.status(401).json({
      success: false,
      message: "You are not authorized to perform this action",
    });
  };
};

module.exports = restrictTo;
