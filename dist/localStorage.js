"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalStorage = exports.localProjectStorage = void 0;
const _1 = require(".");
function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(_1.projectsSetup));
    // console.log(typeof(parseProjects))
    // console.log(parseProjects)
}
exports.localProjectStorage = localProjectStorage;
function getLocalStorage() {
    let storedProjects = localStorage.getItem('allProjects');
    console.log(storedProjects);
    if (!storedProjects) {
        return;
    }
    let parseProjects = JSON.parse(storedProjects);
    parseProjects.projects.forEach((project) => {
        if (!project.name) {
            _1.projectsSetup.addProject(project.name);
        }
        console.log(project);
    });
}
exports.getLocalStorage = getLocalStorage;
