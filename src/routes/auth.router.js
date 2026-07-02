
import { Router } from "express";

const router = Router();

// Ruta placeholder para autenticación
router.post("/login", (req, res) => {
  res.json({ message: "Login placeholder" });
});

export default router;

