import app from '../app.js';
import dbConnect from '../src/config/database/db.js';

// Connect to database
dbConnect().catch(error => console.error("Database connection failed:", error));

export default app;
