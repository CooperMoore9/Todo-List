"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.addProject = exports.DynamicProjectNumber = void 0;
const _1 = require(".");
const localStorage_1 = require("./localStorage");
const uiUpdater_1 = require("./uiUpdater");
exports.DynamicProjectNumber = 1;
let projectAddButton = document.querySelector('.addProject');
let taskAddButton = document.querySelector('.addTask');
const newDate = new Date(1995, 6, 2);
function addProject() {
    //Quarantine
    projectAddButton.addEventListener('click', () => {
        (0, localStorage_1.createProject)(`Project ${exports.DynamicProjectNumber += 1}`);
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
