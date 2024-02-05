import cron from 'node-cron';
import twilioService from "./twilioService.js";
import {updateTaskPriority} from "../controllers/task.controller.js";

class CronScheduler {

    callUser = async (user_phone_number) => {
        await twilioService.createCall(user_phone_number)
    }

    updatePriority = (task_id, priority_type) => {
        updateTaskPriority(priority_type, task_id)
        this.callUser(number)
    }

    createTaskScheduler(user_id) {
        let count = 0;
        const taskPriorityUpdater = cron.schedule('30 23 * * *', () => {
            console.log('called this day');
            count++;
            switch (count) {
                case 0:
                    this.updatePriority(user_id, 1);
                    break;
                case 1:
                case 2:
                    this.updatePriority(user_id, 2);
                    break;
                case 3:
                case 4:
                    this.updatePriority(user_id, 3);
                    break;
                default:
                    taskPriorityUpdater.stop()
            }
        });
    }
}

const cronScheduler = new CronScheduler()

export default cronScheduler