import express from "express";
import { restart, shutdown, suspend } from "../controllers";

const router = express.Router();

router.post("/api/v1/restart", restart);
router.post("/api/v1/shutdown", shutdown);
router.post("/api/v1/suspend", suspend);

export { router };
