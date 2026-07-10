import express from "express"
import { validateRequest } from "../middlewares/validationMiddleware.mjs";
import { emailNotifyShcema } from "../validations/validationSchema.mjs";
import { notifyEmailRequest } from "../controllers/emailController/email.controller.mjs";
import { strictLimiter } from "../middlewares/rateLimiter.mjs";
const emailNotifyRouter = express.Router();

emailNotifyRouter.post("/notify", strictLimiter, validateRequest(emailNotifyShcema), notifyEmailRequest)

export default emailNotifyRouter