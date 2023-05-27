const express = require('express');

const jobsRouter = express.Router();

const { getJobs, getJob, createJob, updateJob, deleteJob } = require('../controllers/jobs');

jobsRouter.route('/').get(getJobs).post(createJob);
jobsRouter.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

module.exports = jobsRouter;

