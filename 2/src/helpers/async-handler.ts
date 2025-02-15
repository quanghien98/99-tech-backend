import { Request, Response, NextFunction } from "express";

export function AsyncHandler(fn: Function) {
    return (req: Request, res: Response, next:NextFunction) => {
        fn(req, res, next).catch(next);
    }
}