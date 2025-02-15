import express from "express";
import resourceRouter from "./../resource";
const router = express.Router();
// ...Add middlewares authentication
router.use("/resource", resourceRouter);
export default router;
  