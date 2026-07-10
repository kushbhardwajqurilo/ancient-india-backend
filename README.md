# Ancient India Backend

Backend service powered by Node.js and Express.

## Features

- Modern ES Modules (`import`/`export`)
- CORS enabled
- Request logging using `morgan`
- Environment variables config using `dotenv`
- Development auto-restart using `nodemon`

## Getting Started

### Prerequisites

- Node.js (version 20+)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Production run:
   ```bash
   npm start
   ```

## Folder Structure

```
src/
├── config/          # Configurations (DB, etc.)
├── controllers/     # Controller logic
├── middleware/      # Custom middlewares
├── models/          # Data models
├── routes/          # Express route declarations
└── app.js           # Express app bootstrap
```
