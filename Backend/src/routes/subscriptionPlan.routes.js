import { Router } from "express";
import { createSubscriptionPlan, deleteSubscriptionPlan, updateSubscriptionPlanDetails } from "../controllers/subscriptionPlan.controller.js";


const router = Router()

router.route('/create-subscription-plan').post(createSubscriptionPlan)
router.route('/update-subscription-plan-details').post(updateSubscriptionPlanDetails)
router.route('/delete-subscription-plan').post(deleteSubscriptionPlan)

export default router