import { Router } from "express"
import { userDetails, userLogin, userRegister } from "../controllers/user.controller.js"

const router = Router()

router.route('/register').post(userRegister)
router.route('/login').post(userLogin)
router.route('/user-details').post(userDetails)

export default router;
