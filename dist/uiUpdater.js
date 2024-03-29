"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTasks = exports.refreshProjects = exports.loopTasks = exports.loopProjects = exports.projectIndex = exports.projectAddButton = void 0;
const _1 = require(".");
const addButtons_1 = require("./addButtons");
const localStorage_1 = require("./localStorage");
const date_fns_1 = require("date-fns");
exports.projectAddButton = document.querySelector(".addProject");
exports.projectIndex = 0;
var dropDownBox;
(function (dropDownBox) {
    dropDownBox["Severe"] = "Severe";
    dropDownBox["Moderate"] = "Moderate";
    dropDownBox["Low"] = "Low";
    dropDownBox["None"] = "None";
})(dropDownBox || (dropDownBox = {}));
let projectList = document.querySelector(".projects");
let projectTasks = document.querySelector(".projectTasks");
const taskHeader = document.querySelector(".taskHeader");
const dropDownList = Object.values(dropDownBox);
function loopProjects() {
    refreshProjects();
    taskHeaderFix();
    _1.projectsSetup.projects.forEach((project) => {
        let div = document.createElement("div");
        let displayText = document.createElement("button");
        let deleteButton = document.createElement("button");
        div.classList.add("project", "justify-around");
        div.classList.add(`project${_1.projectsSetup.projects.indexOf(project)}`);
        displayText.classList.add("w-full", "pl-7", `taskTitle${project.id}`);
        deleteButton.classList.add("w-7");
        deleteButton.textContent = "X";
        displayText.textContent = project.name;
        projectList.insertBefore(div, exports.projectAddButton);
        div.appendChild(displayText);
        div.appendChild(deleteButton);
        displayText.addEventListener("click", () => {
            exports.projectIndex = _1.projectsSetup.projects.indexOf(project);
            taskHeader.textContent = `${project.name} Tasks`;
            loopTasks(project);
        });
        displayText.addEventListener("dblclick", () => renameProject(project));
        deleteButton.addEventListener("click", () => deleteProject(project));
    });
    (0, localStorage_1.localProjectStorage)();
}
exports.loopProjects = loopProjects;
function loopTasks(selectedProject) {
    refreshTasks();
    selectedProject.tasks.forEach((task) => {
        let div = document.createElement("div");
        let titleContainer = document.createElement("div");
        let taskTitle = document.createElement("div");
        let taskDueDate = document.createElement("div");
        let taskDescription = document.createElement("div");
        let buttonContainer = document.createElement("div");
        let taskDeleteButton = document.createElement("button");
        let taskFinishedButton = document.createElement("button");
        let dropDown = document.createElement("select");
        div.appendChild(titleContainer);
        titleContainer.appendChild(taskTitle);
        div.appendChild(taskDueDate);
        div.appendChild(taskDescription);
        div.appendChild(buttonContainer);
        buttonContainer.appendChild(taskFinishedButton);
        buttonContainer.appendChild(dropDown);
        buttonContainer.appendChild(taskDeleteButton);
        buttonContainer.classList.add("buttonContainer");
        titleContainer.classList.add("titleBox", `titleBox${task.id}`);
        taskTitle.classList.add("taskTitle", `taskTitle${task.id}`);
        taskDescription.classList.add(`taskDescription${task.id}`);
        taskDueDate.classList.add("h-7", `taskDueDate${task.id}`);
        taskFinishedButton.classList.add("finishedButton");
        dropDown.classList.add("dropDown");
        dropDownList.forEach((severity) => {
            let dropOption = document.createElement("option");
            dropOption.setAttribute("value", severity);
            dropOption.textContent = severity;
            dropDown.appendChild(dropOption);
            dropOption.classList.add(severity);
        });
        taskTitle.textContent = task.title;
        taskFinishedButton.textContent = "Done";
        task.dueDate = new Date(task.dueDate);
        const ISODate = new Date(task.dueDate).toISOString();
        taskDueDate.textContent = `Due: ${(0, date_fns_1.format)((0, date_fns_1.parseISO)(ISODate), "P")}`;
        taskDescription.textContent = task.description;
        taskDeleteButton.textContent = "X";
        taskDescription.classList.add("h-full", "taskDesc");
        taskDeleteButton.classList.add("deleteButton");
        div.classList.add(`task`, `task${task.id}`);
        taskTitle.style.cursor = "pointer";
        taskDescription.style.cursor = "pointer";
        taskDueDate.style.cursor = "pointer";
        projectTasks.insertBefore(div, addButtons_1.taskAddButton);
        taskTitle.addEventListener("dblclick", () => renameTaskTitle(task, selectedProject));
        taskDescription.addEventListener("dblclick", () => renameTaskDescription(task, selectedProject));
        taskDueDate.addEventListener("dblclick", () => dateChange(task, selectedProject));
        taskDeleteButton.addEventListener("click", () => deleteTask(task));
        taskFinishedButton.addEventListener("click", () => changeCompletionTask(task));
        dropDown.addEventListener("change", () => changeSeverity(dropDown.value, task));
        dropDown.value = task.severity;
        taskComplete(task);
    });
    (0, localStorage_1.localProjectStorage)();
}
exports.loopTasks = loopTasks;
function changeSeverity(value, task) {
    task.severity = value;
    loopProjects();
}
function changeCompletionTask(task) {
    task.completed = !task.completed;
    taskComplete(task);
}
function taskComplete(task) {
    let taskBackground = document.querySelector(`.task${task.id}`);
    if (task.completed === true) {
        taskBackground === null || taskBackground === void 0 ? void 0 : taskBackground.classList.add("taskCompleted");
    }
    else {
        taskBackground === null || taskBackground === void 0 ? void 0 : taskBackground.classList.remove("taskCompleted");
    }
    loopProjects();
}
function refreshProjects() {
    const deleteProjects = document.querySelectorAll(".project");
    deleteProjects.forEach((div) => {
        div.remove();
    });
}
exports.refreshProjects = refreshProjects;
function refreshTasks() {
    const deleteTasks = document.querySelectorAll(".task");
    deleteTasks.forEach((div) => {
        div.remove();
    });
}
exports.refreshTasks = refreshTasks;
function deleteProject(project) {
    _1.projectsSetup.projects.splice(_1.projectsSetup.projects.indexOf(project), 1);
    if (_1.projectsSetup.projects[0]) {
        project.name = _1.projectsSetup.projects[0].name;
        exports.projectIndex = 0;
        taskHeader.textContent = `${project.name} Tasks`;
        loopTasks(_1.projectsSetup.projects[0]);
    }
    else {
        refreshTasks();
    }
    loopProjects();
}
function deleteTask(task) {
    _1.projectsSetup.projects[exports.projectIndex].tasks.splice(_1.projectsSetup.projects[exports.projectIndex].tasks.indexOf(task), 1);
    loopTasks(_1.projectsSetup.projects[exports.projectIndex]);
}
function taskHeaderFix() {
    if (_1.projectsSetup.projects[0]) {
        taskHeader.textContent = `${_1.projectsSetup.projects[0].name} Tasks`;
    }
    else {
        taskHeader.textContent = "Project 1 Tasks";
    }
}
function renameProject(project) {
    loopProjects();
    loopTasks(project);
    let projectTitle = document.querySelector(`.taskTitle${project.id}`);
    projectTitle.replaceWith(document.createElement("input"));
    let inputValue = document.querySelector("input");
    inputValue === null || inputValue === void 0 ? void 0 : inputValue.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if (checkNameProject(inputValue === null || inputValue === void 0 ? void 0 : inputValue.value) === true ||
                (inputValue === null || inputValue === void 0 ? void 0 : inputValue.value.trim().length) === 0) {
                alert("Projects can't be named the same or empty");
            }
            else {
                changeName(project, inputValue === null || inputValue === void 0 ? void 0 : inputValue.value);
            }
            loopProjects();
        }
    });
}
function checkNameProject(inputValue) {
    let nameCheckVar = 0;
    for (let i = 0; i < _1.projectsSetup.projects.length; i++) {
        if (inputValue === _1.projectsSetup.projects[i].name) {
            nameCheckVar += 1;
        }
    }
    if (nameCheckVar >= 1) {
        return true;
    }
    else {
        return false;
    }
}
function changeName(project, inputValue) {
    project.name = inputValue;
}
function renameTaskTitle(task, project) {
    loopProjects();
    loopTasks(project);
    let taskTitle = document.querySelector(`.taskTitle${task.id}`);
    taskTitle === null || taskTitle === void 0 ? void 0 : taskTitle.replaceWith(document.createElement("input"));
    let inputValue = document.querySelector("input");
    inputValue === null || inputValue === void 0 ? void 0 : inputValue.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.value) && inputValue.value.trim() !== "") {
                task.title = inputValue === null || inputValue === void 0 ? void 0 : inputValue.value;
                loopTasks(project);
            }
            else {
                task.title = task.title;
                loopTasks(project);
            }
        }
    });
}
function dateChange(task, project) {
    let taskDate = document.querySelector(`.taskDueDate${task.id}`);
    taskDate === null || taskDate === void 0 ? void 0 : taskDate.replaceWith(document.createElement("input"));
    let inputValue = document.querySelector("input");
    inputValue === null || inputValue === void 0 ? void 0 : inputValue.setAttribute("type", "date");
    inputValue === null || inputValue === void 0 ? void 0 : inputValue.classList.add("h-7");
    inputValue === null || inputValue === void 0 ? void 0 : inputValue.addEventListener("change", function () {
        if (inputValue === null || inputValue === void 0 ? void 0 : inputValue.value)
            task.dueDate = (0, date_fns_1.addDays)(new Date(inputValue === null || inputValue === void 0 ? void 0 : inputValue.value), 1);
        loopTasks(project);
    });
}
function renameTaskDescription(task, project) {
    loopProjects();
    loopTasks(project);
    let taskDesc = document.querySelector(`.taskDescription${task.id}`);
    taskDesc === null || taskDesc === void 0 ? void 0 : taskDesc.replaceWith(document.createElement("input"));
    let inputValue = document.querySelector("input");
    inputValue === null || inputValue === void 0 ? void 0 : inputValue.classList.add("h-full");
    inputValue === null || inputValue === void 0 ? void 0 : inputValue.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.value) && inputValue.value.trim() !== "") {
                task.description = inputValue === null || inputValue === void 0 ? void 0 : inputValue.value;
                loopTasks(project);
            }
            else {
                task.description = task.description;
                loopTasks(project);
            }
        }
    });
}
