import { projectsSetup } from "."
import { Project } from "./allProjectsObject";


export function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(projectsSetup))
    // console.log(typeof(parseProjects))
    // console.log(parseProjects)
}

export function getLocalStorage() {
    let storedProjects = localStorage.getItem('allProjects')
    console.log(storedProjects)
    if(!storedProjects){return}

    let parseProjects = JSON.parse(storedProjects as string)
    parseProjects.projects.forEach((project: Project) => {
        if(!project.name){
            projectsSetup.addProject(project.name)
        }
        console.log(project)
    });
}