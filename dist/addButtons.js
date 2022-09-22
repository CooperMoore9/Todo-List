"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProject = exports.DynamicProjectNumber = void 0;
const todoSetup_1 = require("./todoSetup");
const uiUpdater_1 = require("./uiUpdater");
let projectAddButton = document.querySelector('.addProject');
exports.DynamicProjectNumber = 1;
function addProject() {
    projectAddButton.addEventListener('click', () => {
        todoSetup_1.projectsSetup.addProject(`Project ${exports.DynamicProjectNumber += 1}`);
        (0, uiUpdater_1.loopProjects)();
    });
}
exports.addProject = addProject;
function addTaskToCurrentProject() {
}
