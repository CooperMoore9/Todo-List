import { projectsSetup } from './todoSetup'
import {loopProjects} from './uiUpdater'
let projectAddButton = document.querySelector('.addProject') as Element;

export function addProject(){
    projectAddButton.addEventListener('click', () => {
        console.log('click!')
        projectsSetup.addProject('project2')
        loopProjects();
    })
}