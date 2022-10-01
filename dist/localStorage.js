"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalStorage = exports.localProjectStorage = exports.numberOfProjects = void 0;
const _1 = require(".");
const addButtons_1 = require("./addButtons");
exports.numberOfProjects = 0;
function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(_1.projectsSetup));
}
exports.localProjectStorage = localProjectStorage;
;
function getLocalStorage() {
    let storedProjects = localStorage.getItem('allProjects');
    let parseProjects = JSON.parse(storedProjects);
    if (!storedProjects) {
        return;
    }
    ;
    parseProjects.projects.forEach((project) => {
        _1.projectsSetup.addProject(project.name);
        exports.numberOfProjects += 1;
        (0, addButtons_1.fixDPN)();
    });
}
exports.getLocalStorage = getLocalStorage;
;