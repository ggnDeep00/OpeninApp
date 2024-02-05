import express from 'express';
import {getUser,registerUser,loginUser} from '../controllers/user.controller.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

router.post("/login", loginUser);
router.post("/register",registerUser);
router.get("/user", requireAuth, getUser)

export default router;