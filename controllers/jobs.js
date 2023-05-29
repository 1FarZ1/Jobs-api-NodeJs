const Job = require('../models/job');


let getJobs = async (req,res)=>{
    try {
        let jobs = await Job.find({});
        res.status(200).json({jobs});
    } catch (error) {
        res.status(500).json(error);
    }
}

let getJob = async (req,res)=>{
    try {
        let job = await Job.findById(req.params.id);
        res.status(200).json({job});
    } catch (error) {
        res.status(500).json({error});
    }
}

let createJob = async (req,res)=>{
    try {
        const {company,position} = req.body;
        if(!company || !position){
            return res.status(400).json({error:"Please fill all the fields"});
        }
        console.log(req.user);
        let jobTemp={
            company,
            position,
            createdBy:req.user.userId,
        }
        console.log(jobTemp);
        let job = await Job.create(jobTemp);
        res.status(200).json(job);
    } catch (error) {
        console.log(error)
        res.status(500).json({error});
    }
}

let updateJob = async (req,res)=>{
    try{
        let job  = Job.findById(req.params.id);
        if(!job){
            res.status(404).json({error:"Job not found"});
        }
        job = req.body;
        await job.save();
        res.status(200).json({job});

    }
    catch(error){
        res.status(500).json({error});
    }
}

let deleteJob = async (req,res)=>{
    try {
        let job = await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({job});
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}
