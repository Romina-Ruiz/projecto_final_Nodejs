
import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

// prefijo: /api/auth
// Ruta placeholder para autenticación
router.post("/login", login);

export default router;

