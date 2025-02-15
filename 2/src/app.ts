import express , {Request, Response} from "express";
import dotenv from "dotenv";
import Database from './dbs/init-mysql'
import router from './routes';
import errorHandler from './helpers/error-handler';

dotenv.config();

const app = express();
Database.testConnection();

// Middleware
app.use(express.json());

app.use('/', router);

app.use((req: Request, res: Response) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler (MUST BE THE LAST MIDDLEWARE)
app.use(errorHandler);

export default app;
