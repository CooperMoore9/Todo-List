"use strict";
//Create new Project object when new project is added.
//Probable gonna need an array of projects that can be selected as well.
//Project object needs title, and array of task objects that are stored within the project.
//When tasks are added, create task Object, and store in current Project Object
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.AllProjects = void 0;
class AllProjects {
    constructor(projects) {
        this.projects = projects;
    }
    addProject(name) {
        let newProject = new Project(name, []);
        this.projects.push(newProject);
    }
    logProjects() {
        console.log(this);
    }
}
exports.AllProjects = AllProjects;
class Project {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
    addTask(title, dueDate, description) {
        let newTask = new Task(title, dueDate, description);
        this.tasks.push(newTask);
    }
}
;
class Task {
    constructor(title, dueDate, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
    }
}
exports.Task = Task;
;
