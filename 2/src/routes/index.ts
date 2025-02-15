import express from "express";

const router = express.Router();

import accessRouter from "./access"

const version  = 'v1'

router.use(`/${version}/api`, accessRouter)

// Maybe can add webhook .....

export default router