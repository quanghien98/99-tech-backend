import { Request, Response } from "express";
import ResourceService from './../services/resource'
const SUCCESS_CODE = 200;

class ResourceController {
    getResources = async (req: Request, res: Response) => {

        return res.status(SUCCESS_CODE).json({
            data: await ResourceService.getAllResources(),
            status: SUCCESS_CODE,
            success: true
        })
    };

    getResourceById = async (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) return res.status(400).json({
            message: 'Invalid request',
            status: 400,
            success: false
        })

        return res.status(SUCCESS_CODE).json({
            data: await ResourceService.getResourceById(Number(id)),
            status: SUCCESS_CODE,
            success: true
        })
    }

    createResource = async (req: Request, res: Response) => {

        return res.status(SUCCESS_CODE).json({
            data: await ResourceService.createResource(req.body),
            status: SUCCESS_CODE,
            success: true
        })
    }

    updateResource = async (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) return res.status(400).json({
            message: 'Invalid request',
            status: 400,
            success: false
        })

        return res.status(SUCCESS_CODE).json({
            data: await ResourceService.updateResource(Number.parseInt(id), req.body),
            status: SUCCESS_CODE,
            success: true
        })
    }

    deleteResource = async (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id) return res.status(400).json({
            message: 'Invalid request',
            status: 400,
            success: false
        })

        return res.status(SUCCESS_CODE).json({
            data:  await ResourceService.deleteResource(Number.parseInt(id)),
            status: SUCCESS_CODE,
            success: true
        })
    }

    


}

export default new ResourceController();
