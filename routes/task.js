import express from "express"
import {addTask,getAllTask,addSubtask,getAllSubtasks,updateSubTask,updateTask,removeTask,removeSubTask} from "../controllers/task.controller.js"
import requireAuth from "../middleware/requireAuth.js"

const router = express.Router();

router.post("/task", requireAuth, addTask)
router.get("/tasks", requireAuth, getAllTask)

router.post('/sub_task', requireAuth, addSubtask)
router.get('/sub_tasks', requireAuth, getAllSubtasks)

router.post("/update_subtask", requireAuth,updateSubTask)
router.post("/update_task", requireAuth, updateTask)


router.delete('/task', requireAuth, removeTask)
router.delete('/sub_task', requireAuth, removeSubTask)


export default router;