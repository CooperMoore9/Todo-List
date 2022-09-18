"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectTask = exports.projectAdd = void 0;
function projectAdd() {
    let addProjectButton = document.querySelector('.addProject');
    let projectList = document.querySelector('.projects');
    addProjectButton === null || addProjectButton === void 0 ? void 0 : addProjectButton.addEventListener('click', () => {
        const project = document.createElement("div");
        project.classList.add('project');
        projectList === null || projectList === void 0 ? void 0 : projectList.insertBefore(project, addProjectButton);
    });
}
exports.projectAdd = projectAdd;
;
function projectTask() {
    let addTaskButton = document.querySelector('.addTask');
    let taskList = document.querySelector('.projectTasks');
    let taskDefaultNumber = 2;
    addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', () => {
        taskDefaultNumber += 1;
        const task = document.createElement('div');
        const taskTitle = document.createElement('div');
        const taskDue = document.createElement('div');
        const taskDesc = document.createElement('div');
        task.classList.add('task');
        task.appendChild(taskTitle);
        task.appendChild(taskDue);
        task.appendChild(taskDesc);
        taskTitle.classList.add('taskTitle');
        taskDue.classList.add('taskDue');
        taskDesc.classList.add('taskDesc');
        taskTitle.textContent = (`Task ${taskDefaultNumber}`);
        taskDue.textContent = ('10/10/2020');
        taskDesc.textContent = ('desc');
        taskList === null || taskList === void 0 ? void 0 : taskList.insertBefore(task, addTaskButton);
    });
}
exports.projectTask = projectTask;
;
