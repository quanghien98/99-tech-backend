import dotenv from "dotenv";
import { Dialect } from "sequelize";
dotenv.config();

interface PoolConfig {
    max: number;
    min: number;
    acquire: number,
    idle: number
}

interface DBConfig {
    host: string;
    dialect: Dialect;
    database: string;
    username: string;
    password: string;
    port: number;
    pool: PoolConfig;
    seederStorage: string
}

const config: Record<string, DBConfig> = {
    development: {
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: (process.env.DB_DIALECT as Dialect) ?? "mysql",
        database: process.env.DB_NAME || "db_99tech",
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "root",
        port: Number(process.env.DB_PORT) || 3306,
        seederStorage: 'sequelize',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
			idle: 10000
        }
    },
    production: {
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: (process.env.DB_DIALECT as Dialect) ?? "mysql",
        database: process.env.DB_NAME || "db_99tech",
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "root",
        port: Number(process.env.DB_PORT) || 3306,
        seederStorage: 'sequelize',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
			idle: 10000
        }
    },
    local: {
        host: process.env.DB_HOST || "127.0.0.1",
        dialect: (process.env.DB_DIALECT as Dialect) ?? "mysql",
        database: process.env.DB_NAME || "db_99tech",
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "",
        port: Number(process.env.DB_PORT) || 3306,
        seederStorage: 'sequelize',
        pool: {
            max: 5,
            min: 1,
            acquire: 30000,
			idle: 10000
        }
    }
};

// Get the current environment
const env: string = process.env.NODE_ENV || "development";

// Export the correct configuration based on the environment
export default config[env];
