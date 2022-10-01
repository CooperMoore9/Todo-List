import { areIntervalsOverlappingWithOptions } from "date-fns/fp";
import { projectsSetup } from ".";
import { taskAddButton } from "./addButtons";
import { AllProjects, Project, Task } from "./allProjectsObject";
import { localProjectStorage } from "./localStorage";

export let projectAddButton = document.querySelector('.addProject') as Element;
export let currentProject = 'Project 1';

let projectList = document.querySelector('.projects') as Element;
let projectTasks = document.querySelector('.projectTasks') as Element;
const taskHeader = document.querySelector('.taskHeader') as Element;



export function loopProjects() {
    projectList.innerHTML = '';
    projectsSetup.projects.forEach(project => {

        let div = document.createElement('button');
        let spacer = document.createElement('div');
        let displayText = document.createElement('div');
        let deleteButton = document.createElement('button');

        div.classList.add('project', 'justify-around');
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`);
        spacer.classList.add('w-7');
        displayText.classList.add('w-9/12');
        deleteButton.classList.add('w-7');

        deleteButton.textContent = 'X';
        displayText.textContent = project.name;

        projectList.appendChild(div);
        div.appendChild(spacer);
        div.appendChild(displayText);
        div.appendChild(deleteButton);

        div.addEventListener('click', () => {
            loopTasks(project);
            currentProject = project.name;
            taskHeader.textContent = `${currentProject} Tasks`;
            console.log(project, 'project');
        })

        deleteButton.addEventListener('click', () => deleteProject(project));
        
    })
    localProjectStorage();
}

function deleteProject(project: Project) {
        projectsSetup.projects.splice(projectsSetup.projects.indexOf(project), 1);
        loopProjects();
    };

    
export function refreshTasks() {
    const deleteTasks = document.querySelectorAll('.task');
    deleteTasks.forEach((div) => {
        div.remove();
    })
}


export function loopTasks(selectedProject: Project) {
    refreshTasks()

        selectedProject.tasks.forEach(task => {
            let div = document.createElement('div')

            div.classList.add('task')

            projectTasks.insertBefore(div, taskAddButton)
        })
    };