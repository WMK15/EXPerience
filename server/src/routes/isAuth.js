const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.isAuthenticated) {
    res.status(200).json({ isAuthenticated: true });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

module.exports = router;
