"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSetup = exports.projectsSetup = void 0;
const allProjectsObject_1 = require("./allProjectsObject");
exports.projectsSetup = new allProjectsObject_1.AllProjects([]);
function projectSetup() {
    exports.projectsSetup.addProject('Project 1');
    exports.projectsSetup.logProjects();
}
exports.projectSetup = projectSetup;
