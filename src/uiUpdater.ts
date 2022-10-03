import { projectsSetup } from ".";
import { taskAddButton } from "./addButtons";
import { Project } from "./allProjectsObject";
import { localProjectStorage } from "./localStorage";

export let projectAddButton = document.querySelector('.addProject') as Element;
export let currentProject = 'Project 1';

let projectList = document.querySelector('.projects') as Element;
let projectTasks = document.querySelector('.projectTasks') as Element;
const taskHeader = document.querySelector('.taskHeader') as Element;

export function loopProjects() {
    refreshProjects()
    projectsSetup.projects.forEach(project => {

        let div = document.createElement('div');
        let spacer = document.createElement('div');
        let displayText = document.createElement('button');
        let deleteButton = document.createElement('button');

        div.classList.add('project', 'justify-around');
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`);
        displayText.classList.add('w-full', 'pl-7');
        deleteButton.classList.add('w-7');

        deleteButton.textContent = 'X';
        displayText.textContent = project.name;

        projectList.insertBefore(div, projectAddButton)
        div.appendChild(spacer);
        div.appendChild(displayText);
        div.appendChild(deleteButton);

        displayText.addEventListener('click', () => {
            currentProject = project.name;
            taskHeader.textContent = `${currentProject} Tasks`;
            loopTasks(project);
        })

        deleteButton.addEventListener('click', () => deleteProject(project));
        
    })
    localProjectStorage();
}


export function loopTasks(selectedProject: Project) {
    refreshTasks()
        selectedProject.tasks.forEach(task => {
            let div = document.createElement('div')
            let taskTitle = document.createElement('div')
            let taskDueDate = document.createElement('div')
            let taskDescription = document.createElement('div')

            div.appendChild(taskTitle)
            div.appendChild(taskDueDate)
            div.appendChild(taskDescription)

            taskTitle.textContent = task.title
            taskDueDate.textContent = '10/10/2022'
            taskDescription.textContent = task.description

            div.classList.add('task')

            projectTasks.insertBefore(div, taskAddButton)
        })
        localProjectStorage()
    };

    export function refreshProjects() {
        const deleteProjects = document.querySelectorAll('.project');
        deleteProjects.forEach((div) => {
            div.remove();
        })
    }

    export function refreshTasks() {
        const deleteTasks = document.querySelectorAll('.task');
        deleteTasks.forEach((div) => {
            div.remove();
        })
    }

    function deleteProject(project: Project) {
        projectsSetup.projects.splice(projectsSetup.projects.indexOf(project), 1);
        if(projectsSetup.projects[0]){
            currentProject = projectsSetup.projects[0].name;
            taskHeader.textContent = `${currentProject} Tasks`;
            loopTasks(projectsSetup.projects[0]);
        }else{
            refreshTasks()
        }
        loopProjects();
    };
