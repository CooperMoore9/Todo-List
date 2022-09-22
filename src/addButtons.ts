import { projectsSetup } from './todoSetup'
import {loopProjects} from './uiUpdater'
let projectAddButton = document.querySelector('.addProject') as Element;

let currentProject = ''
export let DynamicProjectNumber = 1

export function addProject(){
    projectAddButton.addEventListener('click', () => {
        projectsSetup.addProject(`Project ${DynamicProjectNumber+=1}`)
        loopProjects();
    })
}

function addTaskToCurrentProject() {

}