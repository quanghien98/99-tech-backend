import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
    status?: number;
}

const errorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", error);

    const statusCode = error.status || 500;

    const message = error.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        code: statusCode,
        message,
        stack: process.env.NODE_ENV !== "production" ? error.stack : null, // Hide stack in production
    });
};

export default errorHandler;
