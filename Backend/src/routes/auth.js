const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller");

router.post("/login", async (req, res) => {
  const { usuario, contrasena_usuario } = req.body;
  try {
    await authController.login(req);
    res.json({ valid: true });
  } catch (error) {
    if (error === "NICK_NAME_NOT_FOUND" || error === "NICK_NAME_AND_PASS_NOT_MATCH") {
      res.json({
        valid: false,
        msg: error,
      });
    } else {
      console.log(error);
    }
  }
});

router.post("/signin", async (req, res) => {
  try {
    await authController.signin(req);
    res.json({ valid: true });
  } catch (error) {
    if (error === "ERR_DUP_ENTRY") {
      res.json({
        valid: false,
        msg: error,
      });
    } else {
      console.log(error);
    }
  }
});

module.exports = router;
