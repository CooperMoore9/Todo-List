import { localProjectStorage } from "./storageSetup";
import {projectsSetup } from "./todoSetup";
export let projectAddButton = document.querySelector('.addProject') as Element;
let projectList = document.querySelector('.projects') as Element;
export let currentProject = 'Project 1'
const taskHeader = document.querySelector('.taskHeader') as Element



export function loopProjects() {
    projectList.innerHTML = ''
    projectsSetup.projects.forEach(project => {
        let div = document.createElement('button')
        div.classList.add('project')
        div.classList.add(`${project.name.replace(/\s/g, '').toLowerCase()}`)
        div.textContent = project.name
        projectList.appendChild(div)

        div.addEventListener('click', () => {
            currentProject = project.name
            taskHeader.textContent = `${currentProject} Tasks`
            console.log(project)
        })
    })
    if(localStorage !== null){
    localProjectStorage()
    }else {
        return
    }
}

function loopTasks() {
    
}

    // project.addTask('name', newDate, 'desc')
    
    // console.log(projectList)
    // console.log(projectAddButton)


        // if(project.name === 'project1'){
        //     project.addTask('bruh', newDate , 'desc')
        //     console.log(project)
        // }