import { addProject, addTask } from './addButtons';
import { loopProjects, loopTasks } from './uiUpdater';


export function projectSetup() {
    addProject();
    addTask();
    loopProjects();
}
