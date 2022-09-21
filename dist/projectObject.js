"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const taskObject_1 = require("./taskObject");
class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
    addTask(title, dueDate, description) {
        let newTask = new taskObject_1.Task(title, dueDate, description);
        this.tasks.push(newTask);
    }
}
exports.Project = Project;
;
