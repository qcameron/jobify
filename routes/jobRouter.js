import { Router } from "express";
import {
  validateJobInput,
  validateIdParam
} from "../middleware/validationMiddleware.js";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  showStats,
  updateJob
} from "../controllers/jobControllers.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

const router = Router();

// router.get("/", getAllJobs);
// router.post("/", createJob);

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
