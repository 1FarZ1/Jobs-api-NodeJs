

let getJobs = async (req,res)=>{
    try {
        let jobs = await Job.find();
        res.status(200).json({jobs});
    } catch (error) {
        res.status(500).json({error});
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
        let job = await Job.create(req.body);
        res.status(200).json({job});
    } catch (error) {
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
