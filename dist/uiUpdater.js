"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopProjects = exports.currentProject = exports.projectAddButton = void 0;
const _1 = require(".");
const localStorage_1 = require("./localStorage");
exports.projectAddButton = document.querySelector('.addProject');
exports.currentProject = 'Project 1';
let projectList = document.querySelector('.projects');
const taskHeader = document.querySelector('.taskHeader');
function loopProjects() {
    projectList.innerHTML = '';
    _1.projectsSetup.projects.forEach(project => {
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
    (0, localStorage_1.localProjectStorage)();
}
exports.loopProjects = loopProjects;
function loopTasks() {
}
// test stuff
// project.addTask('name', newDate, 'desc')
// console.log(projectList)
// console.log(projectAddButton)
// if(project.name === 'project1'){
//     project.addTask('bruh', newDate , 'desc')
//     console.log(project)
// }
