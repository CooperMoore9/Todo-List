//Create new Project object when new project is added.
//Probable gonna need an array of projects that can be selected as well.
//Project object needs title, and array of task objects that are stored within the project.
    //When tasks are added, create task Object, and store in current Project Object

import { Project, ProjectInterface } from "./projectObject";

interface allProjectsInterface {
    projects: ProjectInterface[]
}

export class AllProjects implements allProjectsInterface {
    projects: ProjectInterface[]

    constructor(projects: ProjectInterface[]) {
        this.projects = projects
    }

    addProject(name:string) {
        let newProject = new Project(name, [])
        this.projects.push(newProject)
    }

    logProjects() {
        console.log(this)
    }

}