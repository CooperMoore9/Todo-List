import { projectsSetup } from ".";
import { fixDPN } from "./addButtons";
import { Project } from "./allProjectsObject";

export let numberOfProjects:number = 0;

export function localProjectStorage() {
    localStorage.setItem('allProjects', JSON.stringify(projectsSetup));
};

export function getLocalStorage() {
    let storedProjects = localStorage.getItem('allProjects');
    let parseProjects = JSON.parse(storedProjects as string);
    if(!storedProjects){return};
        parseProjects.projects.forEach((project: Project) => {
        projectsSetup.addProject(project.name);
        numberOfProjects += 1;
        fixDPN();
    });
};