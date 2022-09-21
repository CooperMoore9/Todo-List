import { projectsSetup } from "./todoSetup";

let projectList = document.querySelector('.projects') as Element;

export function loopProjects() {
    
    
const newDate = new Date(1995, 6, 2)

    projectsSetup.projects.forEach(project => {
        if(project.name === 'project1'){
            project.addTask('bruh', newDate , 'desc')
            console.log(project)
            
        }
    })
    console.log(projectList)
}