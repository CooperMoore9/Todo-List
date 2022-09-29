"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopTasks = exports.loopProjects = exports.currentProject = exports.projectAddButton = void 0;
const _1 = require(".");
const localStorage_1 = require("./localStorage");
exports.projectAddButton = document.querySelector('.addProject');
exports.currentProject = 'Project 1';
let projectList = document.querySelector('.projects');
let projectTasks = document.querySelector('.projectTasks');
const taskHeader = document.querySelector('.taskHeader');
function loopProjects() {
    projectList.innerHTML = '';
    _1.projectsSetup.projects.forEach(project => {
        let div = document.createElement('button');
        let spacer = document.createElement('div');
        let displayText = document.createElement('div');
        let deleteButton = document.createElement('button');
        div.classList.add('project', 'justify-around');
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`);
        spacer.classList.add('w-7');
        displayText.classList.add('w-9/12');
        deleteButton.classList.add('w-7');
        deleteButton.textContent = 'X';
        displayText.textContent = project.name;
        projectList.appendChild(div);
        div.appendChild(spacer);
        div.appendChild(displayText);
        div.appendChild(deleteButton);
        div.addEventListener('click', () => {
            exports.currentProject = project.name;
            taskHeader.textContent = `${exports.currentProject} Tasks`;
            console.log(project, 'project');
        });
        deleteButton.addEventListener('click', deleteProject.bind(project));
    });
    (0, localStorage_1.localProjectStorage)();
}
exports.loopProjects = loopProjects;
function deleteProject() {
    _1.projectsSetup.projects.splice(_1.projectsSetup.projects.indexOf(this), 1);
    loopProjects();
    return;
}
;
function loopTasks() {
}
exports.loopTasks = loopTasks;
