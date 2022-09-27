import { projectsSetup } from '.';
import { addProject, addTask } from './addButtons';


export function projectSetup() {

    projectsSetup.addProject('Project 1')

    addProject();
    addTask();
}
