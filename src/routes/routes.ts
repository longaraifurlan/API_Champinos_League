import { Router } from "express";
import * as playerControler from "../controllers/players-controller";
import * as ClubsController from "../controllers/club-controller"

const router = Router()

router.get("/players", playerControler.getPlayer)
router.get("/players/:id", playerControler.getPlayerById)
router.get("/players/:position", playerControler.getPlayerByPosition)
router.post("/players", playerControler.postPlayer)
router.delete("/players/:id", playerControler.deletePlayer)
router.patch("/players/:id", playerControler.updatePlayer)

router.get("/clubs", ClubsController.getClubs)


export default router