import { projectsSetup } from '.';
import { projectSetup } from './todoSetup';
import { loopProjects, loopTasks, projectIndex} from './uiUpdater';

let projectAddButton = document.querySelector('.addProject') as Element;
export let taskAddButton = document.querySelector('.addTask') as Element;
const newDate = new Date(1995, 6, 2);

export function addProject(){
    projectAddButton.addEventListener('click', () => {
        if(projectsSetup.projects[0]){
            let lastProjectNumber = parseInt(projectsSetup.projects[projectsSetup.projects.length-1].name.replace( /^\D+/g, ''))
            if(projectsSetup.projects[projectsSetup.projects.length-1].name === `Project ${lastProjectNumber}`){
                projectsSetup.addProject(`Project ${lastProjectNumber+=1}`)}
            else {
                let numberOfProjects = 1
                projectsSetup.projects.forEach(project => {
                    numberOfProjects+=1
                });
                projectsSetup.addProject(`Project ${numberOfProjects}`)
            }
            
        }else {
            projectsSetup.addProject(`Project 1`)
        }
        
        loopProjects();
    })
};


export function addTask(){
    taskAddButton.addEventListener('click', () => {
        if(projectsSetup.projects[0]){

            let numOfTasks = 1
            projectsSetup.projects[projectIndex].tasks.forEach(task => {
                numOfTasks+=1
            })

            projectsSetup.projects[projectIndex].addTask(`Task ${numOfTasks}`, newDate , 'Description')
            loopTasks(projectsSetup.projects[projectIndex]);


            
        }else{return}
    });
}