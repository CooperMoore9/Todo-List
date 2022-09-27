"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSetup = void 0;
const addButtons_1 = require("./addButtons");
function projectSetup() {
    // projectsSetup.addProject('Project 1')
    (0, addButtons_1.addProject)();
    (0, addButtons_1.addTask)();
    // loopProjects();
}
exports.projectSetup = projectSetup;
