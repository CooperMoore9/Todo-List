"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopProjects = exports.projectAddButton = void 0;
const todoSetup_1 = require("./todoSetup");
exports.projectAddButton = document.querySelector('.addProject');
let projectList = document.querySelector('.projects');
let currentProject = 'Project 1';
const newDate = new Date(1995, 6, 2);
function loopProjects() {
    projectList.innerHTML = '';
    todoSetup_1.projectsSetup.projects.forEach(project => {
        let div = document.createElement('button');
        div.classList.add('project');
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`);
        div.textContent = project.name;
        projectList.appendChild(div);
        div.addEventListener('click', () => {
            currentProject = project.name;
            console.log(currentProject);
        });
    });
}
exports.loopProjects = loopProjects;
function projectSelector() {
}
// console.log(projectList)
// console.log(projectAddButton)
// if(project.name === 'project1'){
//     project.addTask('bruh', newDate , 'desc')
//     console.log(project)
// }
