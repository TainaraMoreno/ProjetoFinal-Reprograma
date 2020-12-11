const express = require("express")
const router = express.Router()
const controller = require("../controller/bolsasController")


router.get("/", controller.getBolsas)

router.post("/criar", controller.criarBolsa)

router.get("/:id", controller.getById)

router.put("/:id", controller.atualizarBolsa)

router.delete("/:id", controller.deletarBolsa)


module.exports = router