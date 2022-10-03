import { parse } from "date-fns";
import { projectsSetup } from ".";
import { Project, Task, TaskInterface } from "./allProjectsObject";

export let numberOfProjects:number = 0;

const newDate = new Date(2000, 6, 2);

export function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(projectsSetup));
};

export function getLocalStorage() {
    
    let storedProjects = localStorage.getItem('allProjects');
    let parseProjects = JSON.parse(storedProjects as string);
    if(!storedProjects){return};
        parseProjects.projects.forEach((project: Project) => {
        projectsSetup.addProject(project.name);
        populateTasks(projectsSetup.projects[projectsSetup.projects.length-1], project.tasks );

        numberOfProjects += 1;
    });
};

function populateTasks(thisProject: Project, tasks:TaskInterface[]) {
    tasks.forEach((task:Task) => {
        thisProject.addTask(task.title, task.dueDate, task.description)
    })
};