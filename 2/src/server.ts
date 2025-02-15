import app from "./app"; 
import appConfig from "./configs/config-app";

// Start the server
const server = app.listen(appConfig.port, () => {
    console.log(`${appConfig.name} started on port ${appConfig.port}`);
});

// Handle process termination
process.on("SIGINT", () => {
    server.close((err?: Error) => {
        console.log(`Closed Server ${appConfig.name} On Port: ${appConfig.port}`);
        process.exit(err ? 1 : 0);
    });
});
