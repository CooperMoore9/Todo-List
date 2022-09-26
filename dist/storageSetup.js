"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localProjectStorage = void 0;
const todoSetup_1 = require("./todoSetup");
function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(todoSetup_1.projectsSetup));
    let storedProjects = localStorage.getItem('allProjects');
    let test = JSON.parse(storedProjects);
    console.log(test);
}
exports.localProjectStorage = localProjectStorage;
