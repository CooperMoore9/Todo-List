import { projectsSetup } from "."

export function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(projectsSetup))
    let storedProjects = localStorage.getItem('allProjects')
    let test = JSON.parse(storedProjects as string)
    console.log(test)
}

export function createProject(name:string){
    projectsSetup.addProject(name)
}
