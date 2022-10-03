"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.addProject = exports.taskAddButton = exports.fixDPN = void 0;
const _1 = require(".");
const localStorage_1 = require("./localStorage");
const uiUpdater_1 = require("./uiUpdater");
let DynamicProjectNumber = 0;
function fixDPN() {
    DynamicProjectNumber = localStorage_1.numberOfProjects;
}
exports.fixDPN = fixDPN;
;
let projectAddButton = document.querySelector('.addProject');
exports.taskAddButton = document.querySelector('.addTask');
const newDate = new Date(2000, 6, 2);
function addProject() {
    projectAddButton.addEventListener('click', () => {
        _1.projectsSetup.addProject(`Project ${DynamicProjectNumber += 1}`);
        (0, uiUpdater_1.loopProjects)();
    });
}
exports.addProject = addProject;
;
function addTask() {
    exports.taskAddButton.addEventListener('click', () => {
        _1.projectsSetup.projects.forEach(project => {
            if (project.name === uiUpdater_1.currentProject) {
                project.addTask('bruh', newDate, 'desc');
                (0, uiUpdater_1.loopTasks)(project);
            }
            ;
        });
    });
}
exports.addTask = addTask;
