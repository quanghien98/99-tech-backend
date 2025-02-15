import dotenv from "dotenv";
dotenv.config();

interface AppConfiguration {
    port: number,
    name: string,
    env: string
}

const config: Record<string, AppConfiguration> = {
    'development': {
        port: Number.parseInt(process.env.APP_PORT ?? '8888', 10),
        name: process.env.APP_NAME || "99Tech",
        env: process.env.NODE_ENV || "development",
    },
    'production': {
        port: Number.parseInt(process.env.APP_PORT ?? '63708', 10),
        name: process.env.APP_NAME || "99Tech",
        env: process.env.NODE_ENV || "production"
    },
    'local': {
        port:Number.parseInt(process.env.APP_PORT ?? '63708', 10),
        name: process.env.APP_NAME || "99Tech",
        env: process.env.NODE_ENV || "local"
    },
}

const env = process.env.NODE_ENV || 'local'
export default config[ env ]