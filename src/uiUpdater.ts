import { projectsSetup } from ".";
import { Project, Task } from "./allProjectsObject";
import { localProjectStorage } from "./localStorage";

export let projectAddButton = document.querySelector('.addProject') as Element;
export let currentProject = 'Project 1'

let projectList = document.querySelector('.projects') as Element;
let projectTasks = document.querySelector('.projectTasks') as Element;
const taskHeader = document.querySelector('.taskHeader') as Element;



export function loopProjects() {
    projectList.innerHTML = ''
    projectsSetup.projects.forEach(project => {
        let div = document.createElement('button')
        let spacer = document.createElement('div')
        let displayText = document.createElement('div')
        let deleteButton = document.createElement('button')



        div.classList.add('project', 'justify-around')
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`)
        spacer.classList.add('w-7')
        displayText.classList.add('w-9/12')
        deleteButton.classList.add('w-7')

        deleteButton.textContent = 'X'
        displayText.textContent = project.name

        projectList.appendChild(div)
        div.appendChild(spacer)
        div.appendChild(displayText)
        div.appendChild(deleteButton)

        div.addEventListener('click', () => {
            currentProject = project.name
            taskHeader.textContent = `${currentProject} Tasks`
            console.log(project, 'project')
        })

        deleteButton.addEventListener('click', deleteProject.bind(project as Project))
        
    })
    localProjectStorage()
}

function deleteProject() {
            projectsSetup.projects.splice(projectsSetup.projects.indexOf(this), 1)
            loopProjects()
            return
    };


export function loopTasks() {
}