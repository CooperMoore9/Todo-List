"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.addProject = exports.DynamicProjectNumber = void 0;
const todoSetup_1 = require("./todoSetup");
const uiUpdater_1 = require("./uiUpdater");
let projectAddButton = document.querySelector('.addProject');
let taskAddButton = document.querySelector('.addTask');
const newDate = new Date(1995, 6, 2);
exports.DynamicProjectNumber = 1;
function addProject() {
    //Quarantine
    projectAddButton.addEventListener('click', () => {
        createProject(`Project ${exports.DynamicProjectNumber += 1}`);
        (0, uiUpdater_1.loopProjects)();
    });
    //Quarantine
}
exports.addProject = addProject;
function createProject(name) {
    todoSetup_1.projectsSetup.addProject(name);
}
function addTask() {
    //Quarantine
    taskAddButton.addEventListener('click', () => {
        todoSetup_1.projectsSetup.projects.forEach(project => {
            if (project.name === uiUpdater_1.currentProject) {
                project.addTask('bruh', newDate, 'desc');
            }
        });
    });
    //Quarantine
}
exports.addTask = addTask;
