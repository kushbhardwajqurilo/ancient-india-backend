import crypto from 'crypto';
if (!globalThis.crypto) {
  globalThis.crypto = crypto.webcrypto;
}

import app from './app.js';
import dbConnect from './src/config/database/db.js';
let server;
const PORT = process.env.PORT || 8002;
const startServer = async () => {
  try {
    await dbConnect();
    server = app.listen(PORT, () => {
      console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}


startServer()
// Graceful Shutdown 
const shutdown = async (signal) => {
  console.log(`\n ${signal} received. Closing server...`);

  try {
    if (server) {
      server.close(() => {
        console.log(" HTTP server closed");
      });
    }

    await mongoose.connection.close();
    console.log("MongoDB connection closed");

    process.exit(0);
  } catch (err) {
    console.error(" Error during shutdown:", err);
    process.exit(1);
  }
};

// Handle signals
process.on("SIGINT", shutdown); // Ctrl + C
process.on("SIGTERM", shutdown); // PM2 / VPS stop
process.on("SIGQUIT", shutdown); // system quit

