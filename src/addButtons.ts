import { projectsSetup } from '.';
import { loopProjects, loopTasks, projectIndex} from './uiUpdater';

let projectAddButton = document.querySelector('.addProject') as Element;
export let taskAddButton = document.querySelector('.addTask') as Element;
const newDate = new Date(2000, 6, 2);

export function addProject(){
    projectAddButton.addEventListener('click', () => {
        if(projectsSetup.projects[0]){
            let lastProjectNumber = parseInt(projectsSetup.projects[projectsSetup.projects.length-1].name.replace( /^\D+/g, ''))
            projectsSetup.addProject(`Project ${lastProjectNumber+=1}`)
        }else {
            projectsSetup.addProject(`Project 1`)
        }
        
        loopProjects();
    })
};


export function addTask(){
    taskAddButton.addEventListener('click', () => {
        projectsSetup.projects[projectIndex].addTask('bruh', newDate , 'desc')
        loopTasks(projectsSetup.projects[projectIndex]);
    });
}