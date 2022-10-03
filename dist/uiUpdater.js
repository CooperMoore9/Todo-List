"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTasks = exports.refreshProjects = exports.loopTasks = exports.loopProjects = exports.currentProject = exports.projectAddButton = void 0;
const _1 = require(".");
const addButtons_1 = require("./addButtons");
const localStorage_1 = require("./localStorage");
exports.projectAddButton = document.querySelector('.addProject');
exports.currentProject = 'Project 1';
let projectList = document.querySelector('.projects');
let projectTasks = document.querySelector('.projectTasks');
const taskHeader = document.querySelector('.taskHeader');
function loopProjects() {
    refreshProjects();
    _1.projectsSetup.projects.forEach(project => {
        let div = document.createElement('div');
        let spacer = document.createElement('div');
        let displayText = document.createElement('button');
        let deleteButton = document.createElement('button');
        div.classList.add('project', 'justify-around');
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`);
        displayText.classList.add('w-full', 'pl-7');
        deleteButton.classList.add('w-7');
        deleteButton.textContent = 'X';
        displayText.textContent = project.name;
        projectList.insertBefore(div, exports.projectAddButton);
        div.appendChild(spacer);
        div.appendChild(displayText);
        div.appendChild(deleteButton);
        displayText.addEventListener('click', () => {
            exports.currentProject = project.name;
            taskHeader.textContent = `${exports.currentProject} Tasks`;
            loopTasks(project);
        });
        deleteButton.addEventListener('click', () => deleteProject(project));
    });
    (0, localStorage_1.localProjectStorage)();
}
exports.loopProjects = loopProjects;
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
function refreshProjects() {
    const deleteProjects = document.querySelectorAll('.project');
    deleteProjects.forEach((div) => {
        div.remove();
    });
}
exports.refreshProjects = refreshProjects;
function refreshTasks() {
    const deleteTasks = document.querySelectorAll('.task');
    deleteTasks.forEach((div) => {
        div.remove();
    });
}
exports.refreshTasks = refreshTasks;
function deleteProject(project) {
    _1.projectsSetup.projects.splice(_1.projectsSetup.projects.indexOf(project), 1);
    if (_1.projectsSetup.projects[0]) {
        exports.currentProject = _1.projectsSetup.projects[0].name;
        taskHeader.textContent = `${exports.currentProject} Tasks`;
        loopTasks(_1.projectsSetup.projects[0]);
    }
    else {
        refreshTasks();
    }
    loopProjects();
}
;
