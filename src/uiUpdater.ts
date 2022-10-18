import { projectsSetup } from ".";
import { taskAddButton } from "./addButtons";
import { Project, Task } from "./allProjectsObject";
import { localProjectStorage } from "./localStorage";

export let projectAddButton = document.querySelector('.addProject') as Element;
export let projectIndex = 0;

let projectList = document.querySelector('.projects') as Element;
let projectTasks = document.querySelector('.projectTasks') as Element;
const taskHeader = document.querySelector('.taskHeader') as Element;

export function loopProjects() {
    refreshProjects()
    taskHeaderFix()
    projectsSetup.projects.forEach(project => {
        let div = document.createElement('div');
        let displayText = document.createElement('button');
        let deleteButton = document.createElement('button');

        div.classList.add('project', 'justify-around');
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`);
        displayText.classList.add('w-full', 'pl-7', `${project.name.replace(/\s/g, '').toLowerCase()}Title`);
        deleteButton.classList.add('w-7');

        deleteButton.textContent = 'X';
        displayText.textContent = project.name;

        projectList.insertBefore(div, projectAddButton)
        div.appendChild(displayText);
        div.appendChild(deleteButton);

        displayText.addEventListener('click', () => {
            projectIndex = projectsSetup.projects.indexOf(project)
            taskHeader.textContent = `${project.name} Tasks`;
            loopTasks(project);
        })

        displayText.addEventListener('dblclick', () => renameProject(project))

        deleteButton.addEventListener('click', () => deleteProject(project));
        
    })
    localProjectStorage();
}


export function loopTasks(selectedProject: Project) {
    refreshTasks()
        selectedProject.tasks.forEach(task => {
            let div = document.createElement('div');
            let taskTitle = document.createElement('div');
            let taskDueDate = document.createElement('div');
            let taskDescription = document.createElement('div');
            let taskDeleteButton = document.createElement('button');

            div.appendChild(taskTitle);
            div.appendChild(taskDueDate);
            div.appendChild(taskDescription);
            div.appendChild(taskDeleteButton);

            taskTitle.classList.add('rename', 'taskTitle');
            taskDescription.classList.add('rename', 'taskDescription');
            taskDueDate.classList.add('taskDueDate');

            taskTitle.textContent = task.title;
            taskDueDate.textContent = '10/10/2022';
            taskDescription.textContent = task.description;
            taskDeleteButton.textContent = 'X'

            taskDescription.classList.add('h-full')
            taskDeleteButton.classList.add('w-7', 'ml-36')
            div.classList.add('task');

            taskTitle.style.cursor = 'pointer'
            taskDescription.style.cursor = 'pointer'

            projectTasks.insertBefore(div, taskAddButton);
            
            taskTitle.addEventListener('dblclick', () => renameTaskTitle(task))
            taskDescription.addEventListener('dblclick', () => renameTaskDescription(task))

            taskDeleteButton.addEventListener('click', () => deleteTask(task))

        })
        localProjectStorage();
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
            project.name = projectsSetup.projects[0].name;
            taskHeader.textContent = `${project.name} Tasks`;
            loopTasks(projectsSetup.projects[0]);
        }else{
            refreshTasks()
        }
        loopProjects();
    };

    function deleteTask(task: Task) {
        projectsSetup.projects[projectIndex].tasks.splice(projectsSetup.projects[projectIndex].tasks.indexOf(task), 1)
        loopTasks(projectsSetup.projects[projectIndex])
    };


    function taskHeaderFix() {
        if(projectsSetup.projects[0]){
            taskHeader.textContent = `${projectsSetup.projects[0].name} Tasks`;
        }else {
            taskHeader.textContent = 'Project 1 Tasks'
        }
    }

    function renameProject(project: Project) {
        loopProjects()
        let projectTitle = document.querySelector(`.${project.name.replace(/\s/g, '').toLowerCase()}Title`) as Element
        projectTitle.replaceWith(document.createElement('input'))
        let inputValue = document.querySelector('input')

        inputValue?.addEventListener('keypress', function(event){
            if(event.key === 'Enter'){
                if(inputValue?.value)
                project.name = inputValue?.value
                loopProjects()
            }
        })

    }

    function renameTaskTitle(task: Task){
        let taskTitle = document.querySelector(`${task.title}`)
        taskTitle?.replaceWith(document.createElement('input'))
        console.log(taskTitle)
    }

    function renameTaskDescription(task: Task){
        console.log(task.description)
    }