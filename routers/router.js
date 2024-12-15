const express= require('express')
const userController=require('../controllers/userControler')
const taskController=require('../controllers/TaskController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

const router= express.Router();

// user Register path:http://localhost:3000/register
router.post('/register',userController.registerController)

// user login path:http://localhost:3000/login
router.post('/login',userController.loginController)

// add task path:http://localhost:3000/add-task
router.post('/add-task',jwtMiddleware,taskController.addTaskController)

// get pending task path:http://localhost:3000/pending-task
router.get('/pending-task',jwtMiddleware,taskController.getPendingTasks)

// get high priority task path:http://localhost:3000/high-task
router.get('/high-task',jwtMiddleware,taskController.getHighPriorityTaskController)

// get medium priority task path:http://localhost:3000/medium-task
router.get('/medium-task',jwtMiddleware,taskController.getMediumPriorityTaskController)

// get low priority task path:http://localhost:3000/low-task
router.get('/low-task',jwtMiddleware,taskController.getlowPriorityTaskController)

// get low priority task path:http://localhost:3000/completed-task
router.get('/completed-task',jwtMiddleware,taskController.getCompletedTaskController)

// delete task path:http://localhost:3000/delete-task
router.delete('/:id/delete-task', jwtMiddleware, taskController.deleteTaskController);

// edit task path:http://localhost:3000/edit-task
router.put('/:id/edit-task', jwtMiddleware, taskController.editTaskController);

// update status path:http://localhost:3000/update-task
router.patch('/:id/update-task', jwtMiddleware, taskController.updateStatusController);

module.exports=router;