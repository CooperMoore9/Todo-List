"use strict";
//Create new Project object when new project is added.
//Probable gonna need an array of projects that can be selected as well.
//Project object needs title, and array of task objects that are stored within the project.
//When tasks are added, create task Object, and store in current Project Object
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllProjects = void 0;
const projectObject_1 = require("./projectObject");
class AllProjects {
    constructor(projects) {
        this.projects = projects;
    }
    addProject(name) {
        let newProject = new projectObject_1.Project(name, []);
        this.projects.push(newProject);
    }
    logProjects() {
        console.log(this);
    }
}
exports.AllProjects = AllProjects;
