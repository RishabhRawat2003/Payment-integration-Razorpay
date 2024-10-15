import { Router } from "express";
import { allSubscriptionPlansDetails, createSubscriptionPlan, deleteSubscriptionPlan, updateSubscriptionPlanDetails } from "../controllers/subscriptionPlan.controller.js";


const router = Router()

router.route('/create-subscription-plan').post(createSubscriptionPlan)
router.route('/update-subscription-plan-details').post(updateSubscriptionPlanDetails)
router.route('/delete-subscription-plan').post(deleteSubscriptionPlan)
router.route('/all-plans').post(allSubscriptionPlansDetails)

export default router