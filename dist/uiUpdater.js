"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopProjects = exports.projectAddButton = void 0;
const todoSetup_1 = require("./todoSetup");
exports.projectAddButton = document.querySelector('.addProject');
let projectList = document.querySelector('.projects');
const newDate = new Date(1995, 6, 2);
function loopProjects() {
    projectList.innerHTML = '';
    todoSetup_1.projectsSetup.projects.forEach(project => {
        let div = document.createElement('div');
        div.classList.add('project');
        div.classList.add(`${project.name.replace(/\s/g, '').toLocaleLowerCase()}`);
        div.textContent = project.name;
        projectList.appendChild(div);
    });
}
exports.loopProjects = loopProjects;
// console.log(projectList)
// console.log(projectAddButton)
// if(project.name === 'project1'){
//     project.addTask('bruh', newDate , 'desc')
//     console.log(project)
// }
