import { Router } from "express";
import * as playerControler from "../controllers/players-controller";

const router = Router()

router.get("/players", playerControler.getPlayer)
router.get("/players/:id", playerControler.getPlayerById)
router.get("/players/:position", playerControler.getPlayerByPosition)

router.post("/players", playerControler.postPlayer)


export default router