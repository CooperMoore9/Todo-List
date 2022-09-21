"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProject = void 0;
const todoSetup_1 = require("./todoSetup");
const uiUpdater_1 = require("./uiUpdater");
let projectAddButton = document.querySelector('.addProject');
function addProject() {
    projectAddButton.addEventListener('click', () => {
        console.log('click!');
        todoSetup_1.projectsSetup.addProject('project2');
        (0, uiUpdater_1.loopProjects)();
    });
}
exports.addProject = addProject;
