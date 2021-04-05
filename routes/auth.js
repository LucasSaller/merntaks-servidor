// Rutas para autenticar
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

// crea un usuario api/usuarios iniciar sesion

router.post("/", authController.autenticarUsuario);
router.get("/", auth, authController.usuarioAutenticado);
module.exports = router;
