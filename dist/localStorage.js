"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.localProjectStorage = void 0;
const _1 = require(".");
function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(_1.projectsSetup));
    let storedProjects = localStorage.getItem('allProjects');
    let test = JSON.parse(storedProjects);
    console.log(test);
}
exports.localProjectStorage = localProjectStorage;
function createProject(name) {
    _1.projectsSetup.addProject(name);
}
exports.createProject = createProject;
