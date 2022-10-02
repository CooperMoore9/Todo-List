"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loopTasks = exports.refreshTasks = exports.loopProjects = exports.currentProject = exports.projectAddButton = void 0;
const _1 = require(".");
const addButtons_1 = require("./addButtons");
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
            loopTasks(project);
            exports.currentProject = project.name;
            taskHeader.textContent = `${exports.currentProject} Tasks`;
        });
        deleteButton.addEventListener('click', () => deleteProject(project));
    });
    (0, localStorage_1.localProjectStorage)();
}
exports.loopProjects = loopProjects;
function deleteProject(project) {
    _1.projectsSetup.projects.splice(_1.projectsSetup.projects.indexOf(project), 1);
    loopProjects();
}
;
function refreshTasks() {
    const deleteTasks = document.querySelectorAll('.task');
    deleteTasks.forEach((div) => {
        div.remove();
    });
}
exports.refreshTasks = refreshTasks;
function loopTasks(selectedProject) {
    refreshTasks();
    selectedProject.tasks.forEach(task => {
        let div = document.createElement('div');
        let taskTitle = document.createElement('div');
        let taskDueDate = document.createElement('div');
        let taskDescription = document.createElement('div');
        div.appendChild(taskTitle);
        div.appendChild(taskDueDate);
        div.appendChild(taskDescription);
        taskTitle.textContent = task.title;
        taskDueDate.textContent = '10/10/2022';
        taskDescription.textContent = task.description;
        div.classList.add('task');
        projectTasks.insertBefore(div, addButtons_1.taskAddButton);
    });
    (0, localStorage_1.localProjectStorage)();
}
exports.loopTasks = loopTasks;
;
