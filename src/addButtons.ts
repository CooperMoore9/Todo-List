import { projectsSetup } from '.';
import { numberOfProjects } from './localStorage';
import {currentProject, loopProjects, loopTasks} from './uiUpdater'

let DynamicProjectNumber:number = 0

export function fixDPN () {
    DynamicProjectNumber = numberOfProjects
}

let projectAddButton = document.querySelector('.addProject') as Element;
let taskAddButton = document.querySelector('.addTask') as Element
const newDate = new Date(1995, 6, 2)


export function addProject(){

//Quarantine
    projectAddButton.addEventListener('click', () => {
        projectsSetup.addProject(`Project ${DynamicProjectNumber+=1}`)
        loopProjects();
    })
//Quarantine

}


export function addTask(){


//Quarantine
    taskAddButton.addEventListener('click', () => {    
        projectsSetup.projects.forEach(project => {
            if(project.name === currentProject){
                project.addTask('bruh', newDate , 'desc')
                loopTasks()
            }
        })    
    })
//Quarantine


}