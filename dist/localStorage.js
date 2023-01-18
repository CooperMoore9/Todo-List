"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalStorage = exports.localProjectStorage = void 0;
const _1 = require(".");
function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(_1.projectsSetup));
}
exports.localProjectStorage = localProjectStorage;
;
function getLocalStorage() {
    let storedProjects = localStorage.getItem('allProjects');
    let parseProjects = JSON.parse(storedProjects);
    if (!storedProjects) {
        return;
    }
    ;
    parseProjects.projects.forEach((project) => {
        _1.projectsSetup.addProject(project.name);
        populateTasks(_1.projectsSetup.projects[_1.projectsSetup.projects.length - 1], project.tasks);
    });
}
exports.getLocalStorage = getLocalStorage;
;
function populateTasks(thisProject, tasks) {
    tasks.forEach((task) => {
        thisProject.addTask(task.title, task.dueDate, task.description, task.completed);
    });
}
;
