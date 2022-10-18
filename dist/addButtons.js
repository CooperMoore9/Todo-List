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
            if (_1.projectsSetup.projects[_1.projectsSetup.projects.length - 1].name === `Project ${lastProjectNumber}`) {
                _1.projectsSetup.addProject(`Project ${lastProjectNumber += 1}`);
            }
            else {
                let numberOfProjects = 1;
                _1.projectsSetup.projects.forEach(project => {
                    numberOfProjects += 1;
                });
                _1.projectsSetup.addProject(`Project ${numberOfProjects}`);
            }
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
        if (_1.projectsSetup.projects[0]) {
            let numOfTasks = 1;
            _1.projectsSetup.projects[uiUpdater_1.projectIndex].tasks.forEach(task => {
                numOfTasks += 1;
                console.log(numOfTasks);
            });
            _1.projectsSetup.projects[uiUpdater_1.projectIndex].addTask(`Task ${numOfTasks}`, newDate, 'Description');
            (0, uiUpdater_1.loopTasks)(_1.projectsSetup.projects[uiUpdater_1.projectIndex]);
        }
        else {
            return;
        }
    });
}
exports.addTask = addTask;
