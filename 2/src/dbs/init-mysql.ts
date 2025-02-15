import { Sequelize, Dialect } from "sequelize";
import dbConfig from "../configs/config-mysql";
console.log(dbConfig);

class Database {
    private static instance: Sequelize;

    private constructor() { }

    public static getInstance(): Sequelize {

        if (!Database.instance) {
            Database.instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
                host: dbConfig.host,
                dialect: dbConfig.dialect as Dialect || "mysql", // Ensure correct typing
                pool: dbConfig.pool,
                port: dbConfig.port,
                logging: false,
            });

            console.log("✅ Database connection initialized!");
        }
        return Database.instance;
    }

    public static async testConnection(): Promise<void> {
        try {
            if(!Database.instance) {
                this.getInstance();
            }
            await Database.instance.authenticate();
            console.log("✅ Database connected successfully!");
        } catch (error) {
            console.error("❌ Database connection failed:", error);
        }
    }

    public static async closeConnection(): Promise<void> {
        if (Database.instance) {
            await Database.instance.close();
            console.log("🔴 Database connection closed.");
        }
    }
}

export default Database;
