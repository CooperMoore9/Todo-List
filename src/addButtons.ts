import { projectsSetup } from './todoSetup'
import {currentProject, loopProjects} from './uiUpdater'
let projectAddButton = document.querySelector('.addProject') as Element;
let taskAddButton = document.querySelector('.addTask') as Element
const newDate = new Date(1995, 6, 2)

export let DynamicProjectNumber = 1

export function addProject(){
    projectAddButton.addEventListener('click', () => {
        createProject(`Project ${DynamicProjectNumber+=1}`);
        loopProjects();
    })
}

function createProject(name:string){
    projectsSetup.addProject(name)
}

export function addTask(){
    taskAddButton.addEventListener('click', () => {    
        projectsSetup.projects.forEach(project => {
            if(project.name === currentProject){
                project.addTask('bruh', newDate , 'desc')
            }
        })
        
    })
}