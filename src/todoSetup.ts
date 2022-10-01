import { addProject, addTask } from './addButtons';
import { loopProjects } from './uiUpdater';


export function projectSetup() {
    addProject();
    addTask();
    loopProjects();
}
