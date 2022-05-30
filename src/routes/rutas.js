const express = require('express');
const router = express.Router();
const {crearUsuario, revisarUsuario, borrarUsuarios,crearUsuariosDeCsv} = require("../controllers/controladorUsuario");
// const multer = require('multer');

// const upload = multer({
//     dest:"../uploads"
// });

router.post('/cargarCsv',crearUsuariosDeCsv);
router.post("/crearUsuario",crearUsuario);
router.get("/autenticar/:nombreDeUsuario/:clave/:idEvento",revisarUsuario);
router.get("/borrarUsuarios",borrarUsuarios);





module.exports = router;