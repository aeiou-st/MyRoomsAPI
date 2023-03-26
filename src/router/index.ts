import express from 'express'
import { routerUser } from './UserRouter'
import { routerRoom } from "./RoomRouter";

const router = express.Router();

router.use("/user", routerUser);
router.use("/room", routerRoom);

export default router