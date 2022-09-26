import { addProject, addTask } from './addButtons';
import {AllProjects} from './allProjectsObject'

export let projectsSetup = new AllProjects([])

export function projectSetup() {

    projectsSetup.addProject('Project 1')
    
    addProject();
    addTask();
}
