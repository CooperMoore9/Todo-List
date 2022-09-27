import { projectsSetup } from '.';
import { createProject } from './storageSetup';
import {currentProject, loopProjects} from './uiUpdater'


export let DynamicProjectNumber = 1

let projectAddButton = document.querySelector('.addProject') as Element;
let taskAddButton = document.querySelector('.addTask') as Element
const newDate = new Date(1995, 6, 2)


export function addProject(){

//Quarantine
    projectAddButton.addEventListener('click', () => {
        createProject(`Project ${DynamicProjectNumber+=1}`);
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
            }
        })    
    })
//Quarantine


}