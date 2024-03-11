import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPES } from "../utils/constants.js";

const jobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPES),
      default: JOB_TYPES.FULL_TIME
    },
    jobLocation: {
      type: String,
      default: "my city"
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

jobSchema.statics.findByID = function (id) {
  return this.findOne({ _id: id });
};

export default mongoose.model("Job", jobSchema);
