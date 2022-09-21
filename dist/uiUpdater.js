"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopProjects = void 0;
const todoSetup_1 = require("./todoSetup");
let projectList = document.querySelector('.projects');
function loopProjects() {
    const newDate = new Date(1995, 6, 2);
    todoSetup_1.projectsSetup.projects.forEach(project => {
        if (project.name === 'project1') {
            project.addTask('bruh', newDate, 'desc');
            console.log(project);
        }
    });
    console.log(projectList);
}
exports.loopProjects = loopProjects;
