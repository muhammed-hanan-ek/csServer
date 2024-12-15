const tasks = require('../models/TaskModel')

// Add tasks
exports.addTaskController=async(req,res)=>{
    console.log("inside addTaskController");
    const{title,description,date,priority,status}=req.body;
    try{
        const newTask=new tasks({
            title,
            description,
            date,
            priority,
            status,
            userId:req.userId
        });
        const savedTask = await newTask.save()
        res.status(200).json(savedTask)
    }catch(err){
        console.log(err);    
    }
}

// get pending tasks
exports.getPendingTasks = async (req, res) => {
    console.log("Inside getPendingTasks");
    try {
        const pendingTasks = await tasks.find({ userId:req.userId,status:"pending"});
        res.status(200).json(pendingTasks);
        console.log(pendingTasks);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks", error: err });
    }
};

// get high priority tasks
exports.getHighPriorityTaskController = async (req, res) => {
    console.log("Inside getHighPriorityTaskController");
    try {
        const highPriorityTask = await tasks.find({ userId:req.userId,priority:"high"});
        res.status(200).json(highPriorityTask);        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks", error: err });
    }
};

// get medium priority tasks
exports.getMediumPriorityTaskController = async (req, res) => {
    console.log("Inside getMediumPriorityTaskController");
    try {
        const mediumPriorityTask = await tasks.find({ userId:req.userId,priority:"medium"});
        res.status(200).json(mediumPriorityTask);        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks", error: err });
    }
};

// get low priority tasksk

exports.getlowPriorityTaskController = async (req, res) => {
    console.log("Inside getlowPriorityTaskController");
    try {
        const lowPriorityTask = await tasks.find({ userId:req.userId,priority:"low"});
        res.status(200).json(lowPriorityTask);        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks", error: err });
    }
};

// get completed tasks

exports.getCompletedTaskController = async (req, res) => {
    console.log("Inside getCompletedTaskController");
    try {
        const completedTask = await tasks.find({ userId:req.userId,status:"Completed"});
        res.status(200).json(completedTask);        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching tasks", error: err });
    }
};

// // Delete task
exports.deleteTaskController = async (req, res) => {
    console.log("Inside deleteExpenseController");
    const { id } = req.params;
    try {
        const deletedTask = await tasks.findByIdAndDelete(id);
        res.status(200).json(deletedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting expense", error: err });
    }
};

// edit task
exports.editTaskController = async (req, res) => {
    console.log("Inside editTaskController");
    const { id } = req.params;
    const editedData = req.body;
    try {
        const updatedTask = await tasks.findByIdAndUpdate(id, editedData, { new: true });
        res.status(200).json(updatedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error editing expense", error: err });
    }
};

// update status
exports.updateStatusController = async (req, res) => {
    console.log("Inside updateStatusController");
    const { id } = req.params;
    const editedData = req.body;
    try {
        const updatedstatus = await tasks.findByIdAndUpdate(id, editedData, { new: true });
        res.status(200).json(updatedstatus);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error editing expense", error: err });
    }
};