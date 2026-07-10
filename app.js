import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import apiRouter from './src/router/index.js';
import { apiLimiter } from './src/middlewares/rateLimiter.mjs';

// Load environment variables
dotenv.config();

const app = express();
app.set("trust proxy", true)
// Middleware
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Request logging (only in non-production)
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Mount API Routes
app.use('/api/v1', apiLimiter, apiRouter);

// API Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Ancient India API is running smoothly',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  });
});

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: `Cannot find ${req.originalUrl} on this server`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && !err.isOperational && { stack: err.stack })
  });
});



export default app;
