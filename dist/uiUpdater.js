"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTasks = exports.refreshProjects = exports.loopTasks = exports.loopProjects = exports.projectIndex = exports.projectAddButton = void 0;
const _1 = require(".");
const addButtons_1 = require("./addButtons");
const localStorage_1 = require("./localStorage");
exports.projectAddButton = document.querySelector('.addProject');
exports.projectIndex = 0;
let projectList = document.querySelector('.projects');
let projectTasks = document.querySelector('.projectTasks');
const taskHeader = document.querySelector('.taskHeader');
function loopProjects() {
    refreshProjects();
    taskHeaderFix();
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
            exports.projectIndex = _1.projectsSetup.projects.indexOf(project);
            taskHeader.textContent = `${project.name} Tasks`;
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
        let taskDeleteButton = document.createElement('button');
        div.appendChild(taskTitle);
        div.appendChild(taskDueDate);
        div.appendChild(taskDescription);
        div.appendChild(taskDeleteButton);
        taskTitle.textContent = task.title;
        taskDueDate.textContent = '10/10/2022';
        taskDescription.textContent = task.description;
        taskDeleteButton.textContent = 'X';
        taskDescription.classList.add('h-full');
        taskDeleteButton.classList.add('w-7', 'ml-36');
        div.classList.add('task');
        projectTasks.insertBefore(div, addButtons_1.taskAddButton);
        taskDeleteButton.addEventListener('click', () => deleteTask(task));
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
        project.name = _1.projectsSetup.projects[0].name;
        taskHeader.textContent = `${project.name} Tasks`;
        loopTasks(_1.projectsSetup.projects[0]);
    }
    else {
        refreshTasks();
    }
    loopProjects();
}
;
function deleteTask(task) {
    _1.projectsSetup.projects[exports.projectIndex].tasks.splice(_1.projectsSetup.projects[exports.projectIndex].tasks.indexOf(task), 1);
    loopTasks(_1.projectsSetup.projects[exports.projectIndex]);
}
;
function taskHeaderFix() {
    if (_1.projectsSetup.projects[0]) {
        taskHeader.textContent = `${_1.projectsSetup.projects[0].name} Tasks`;
    }
    else {
        taskHeader.textContent = 'Project 1 Tasks';
    }
}
