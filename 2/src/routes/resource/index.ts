import express, {Request, Response} from "express";
const router = express.Router();
import {AsyncHandler} from '../../helpers/async-handler';
import ResourceController from '../../controllers/resource';

router.get("/", AsyncHandler(ResourceController.getResources));

router.get("/:id", AsyncHandler(ResourceController.getResourceById));

router.post("/", AsyncHandler(ResourceController.createResource));

router.put("/:id", AsyncHandler(ResourceController.updateResource));

router.delete("/:id", AsyncHandler(ResourceController.deleteResource));

export default router