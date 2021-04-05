const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController.js");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// crear una tarea
// api/tareas

router.post(
  "/",
  auth,
  [
    check("nombre", "El Nombre es obligatorio").not().isEmpty(),
    check("proyecto", "El Proyecto es obligatorio").not().isEmpty(),
  ],
  tareaController.crearTarea
);
router.get("/", auth, tareaController.obtenerTareas);
//actualizar Tarea
router.put("/:id", auth, tareaController.actualizarTarea);
router.delete("/:id", auth, tareaController.eliminarTarea);

module.exports = router;
