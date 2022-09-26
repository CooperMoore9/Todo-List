"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSetup = exports.projectsSetup = void 0;
const addButtons_1 = require("./addButtons");
const allProjectsObject_1 = require("./allProjectsObject");
exports.projectsSetup = new allProjectsObject_1.AllProjects([]);
function projectSetup() {
    exports.projectsSetup.addProject('Project 1');
    (0, addButtons_1.addProject)();
    (0, addButtons_1.addTask)();
}
exports.projectSetup = projectSetup;
