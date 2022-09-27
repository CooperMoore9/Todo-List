import { projectsSetup } from '.';
import { addProject, addTask } from './addButtons';
import { loopProjects } from './uiUpdater';


export function projectSetup() {

    projectsSetup.addProject('Project 1')

    addProject();
    addTask();
    loopProjects();
}
