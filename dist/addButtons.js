"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.addProject = exports.fixDPN = void 0;
const _1 = require(".");
const localStorage_1 = require("./localStorage");
const uiUpdater_1 = require("./uiUpdater");
let DynamicProjectNumber = 0;
function fixDPN() {
    DynamicProjectNumber = localStorage_1.numberOfProjects;
}
exports.fixDPN = fixDPN;
let projectAddButton = document.querySelector('.addProject');
let taskAddButton = document.querySelector('.addTask');
const newDate = new Date(1995, 6, 2);
function addProject() {
    //Quarantine
    projectAddButton.addEventListener('click', () => {
        _1.projectsSetup.addProject(`Project ${DynamicProjectNumber += 1}`);
        (0, uiUpdater_1.loopProjects)();
    });
    //Quarantine
}
exports.addProject = addProject;
function addTask() {
    //Quarantine
    taskAddButton.addEventListener('click', () => {
        _1.projectsSetup.projects.forEach(project => {
            if (project.name === uiUpdater_1.currentProject) {
                project.addTask('bruh', newDate, 'desc');
            }
        });
    });
    //Quarantine
}
exports.addTask = addTask;
