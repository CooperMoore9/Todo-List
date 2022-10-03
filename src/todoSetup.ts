import { projectsSetup } from '.';
import { addProject, addTask } from './addButtons';
import { loopProjects, loopTasks } from './uiUpdater';


export function projectSetup() {
    addProject();
    addTask();
    loopProjects();
    if(projectsSetup.projects[0]){loopTasks(projectsSetup.projects[0])}
}
