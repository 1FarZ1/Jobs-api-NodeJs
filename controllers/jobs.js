const Job = require('../models/job');


let getAllJobs = async (req,res)=>{
    try {
        let jobs = await Job.find({
            createdBy:req.user.userId
        }).sort({createdAt:-1});
        res.status(200).json({jobs});
    } catch (error) {
        res.status(500).json(error);
    }
}

let getJob = async (req,res)=>{
    try {
        if(!req.params.id){
            return res.status(400).json({error:"Please provide job id"});
        }

        let job = await Job.findOne({
            _id:req.params.id,
            createdBy:req.user.userId
        });
        if(!job){
            return res.status(404).json({error:"Job not found"});
        }
        res.status(200).json({job});
    } catch (error) {
        res.status(500).json({
            "msg":"something went wrong",
            error
        });
    }
}

let createJob = async (req,res)=>{
    try {
        const {company,position} = req.body;
        if(!company || !position){
            return res.status(400).json({error:"Please fill all the fields"});
        }
        let jobTemp={
            company,
            position,
            createdBy:req.user.userId,
        }


        let job = await Job.create(jobTemp);
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json(error);
    }
}

let updateJob = async (req,res)=>{
    try {
        const {company,position} = req.body;
        if(!company || !position){
            return res.status(400).json({error:"Please fill all the fields"});
        }
        if(!req.params.id){
            return res.status(400).json({error:"Please provide job id"});
        }

        let job = await Job.findOneAndUpdate({
            _id:req.params.id,
            createdBy:req.user.userId,
        },{
            company,
            position
        }, {
            new: true,
            runValidators: true,
        });
        if(!job){
            return res.status(404).json({error:"Job not found"});
        }
        res.status(200).json({job});
    } catch (error) {
        res.status(500).json({
            "msg":"something went wrong",
            error
        });
    }
}

let deleteJob = async (req,res)=>{
    try {
        if(!req.params.id){
            return res.status(400).json({error:"Please provide job id"});
        }
        let job = await Job.findOneAndRemove({
            _id:req.params.id,
            createdBy:req.user.userId
        });
        
        // you can also return the deleted job
        res.status(200).json({
            msg:"Job deleted successfully"
        });
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {
    getJobs: getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}
