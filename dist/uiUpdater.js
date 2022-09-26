"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopProjects = exports.currentProject = exports.projectAddButton = void 0;
const storageSetup_1 = require("./storageSetup");
const todoSetup_1 = require("./todoSetup");
exports.projectAddButton = document.querySelector('.addProject');
let projectList = document.querySelector('.projects');
exports.currentProject = 'Project 1';
const taskHeader = document.querySelector('.taskHeader');
function loopProjects() {
    projectList.innerHTML = '';
    todoSetup_1.projectsSetup.projects.forEach(project => {
        let div = document.createElement('button');
        div.classList.add('project');
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`);
        div.textContent = project.name;
        projectList.appendChild(div);
        div.addEventListener('click', () => {
            exports.currentProject = project.name;
            taskHeader.textContent = `${exports.currentProject} Tasks`;
            console.log(project);
        });
    });
    if (localStorage !== null) {
        (0, storageSetup_1.localProjectStorage)();
    }
    else {
        return;
    }
}
exports.loopProjects = loopProjects;
function loopTasks() {
}
// project.addTask('name', newDate, 'desc')
// console.log(projectList)
// console.log(projectAddButton)
// if(project.name === 'project1'){
//     project.addTask('bruh', newDate , 'desc')
//     console.log(project)
// }
