"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.Project = exports.AllProjects = void 0;
const uuid_1 = require("uuid");
;
class AllProjects {
    constructor(projects) {
        this.projects = projects;
    }
    ;
    addProject(name) {
        let newProject = new Project(name, []);
        this.projects.push(newProject);
    }
    ;
    logProjects() {
        console.log(this);
    }
    ;
}
exports.AllProjects = AllProjects;
;
;
class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
        this.id = (0, uuid_1.v4)();
    }
    ;
    addTask(title, dueDate, description, completed, severity) {
        let newTask = new Task(title, dueDate, description, completed, severity);
        this.tasks.push(newTask);
    }
    ;
}
exports.Project = Project;
;
class Task {
    constructor(title, dueDate, description, completed, severity) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.id = (0, uuid_1.v4)();
        this.completed = completed;
        this.severity = severity;
    }
    ;
}
exports.Task = Task;
;
