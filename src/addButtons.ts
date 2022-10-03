import { projectsSetup } from '.';
import { numberOfProjects } from './localStorage';
import {currentProject, loopProjects, loopTasks} from './uiUpdater';

let DynamicProjectNumber:number = 0;

export function fixDPN () {
    DynamicProjectNumber = numberOfProjects;
};

let projectAddButton = document.querySelector('.addProject') as Element;
export let taskAddButton = document.querySelector('.addTask') as Element;
const newDate = new Date(2000, 6, 2);

export function addProject(){
    projectAddButton.addEventListener('click', () => {
        projectsSetup.addProject(`Project ${DynamicProjectNumber+=1}`);
        loopProjects();
    })
};


export function addTask(){
    taskAddButton.addEventListener('click', () => {    
        projectsSetup.projects.forEach(project => {
            if(project.name === currentProject){
                project.addTask('bruh', newDate , 'desc');
                loopTasks(project);
            };
        });
    });
}