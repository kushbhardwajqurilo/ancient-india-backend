import { Router } from 'express';
import emailNotifyRouter from '../routes/emailNotifyRoutes.mjs';

const router = Router();

router.use("/email", emailNotifyRouter)

export default router;
