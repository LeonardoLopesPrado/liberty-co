var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.get("/listarMaquinas/:idGestor", function (req, res) {
    maquinaController.listarMaquinas(req, res);
});

router.post("/cadastrarMaquina/:idGestor", function (req, res) {
    maquinaController.cadastrarMaquina(req, res);
})

module.exports = router;