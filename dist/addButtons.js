"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.addProject = exports.taskAddButton = void 0;
const _1 = require(".");
const uiUpdater_1 = require("./uiUpdater");
let projectAddButton = document.querySelector('.addProject');
exports.taskAddButton = document.querySelector('.addTask');
const newDate = new Date(2000, 6, 2);
function addProject() {
    projectAddButton.addEventListener('click', () => {
        if (_1.projectsSetup.projects[0]) {
            let lastProjectNumber = parseInt(_1.projectsSetup.projects[_1.projectsSetup.projects.length - 1].name.replace(/^\D+/g, ''));
            _1.projectsSetup.addProject(`Project ${lastProjectNumber += 1}`);
        }
        else {
            _1.projectsSetup.addProject(`Project 1`);
        }
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
