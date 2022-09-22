import {projectsSetup } from "./todoSetup";
export let projectAddButton = document.querySelector('.addProject') as Element;
let projectList = document.querySelector('.projects') as Element;
let currentProject = 'Project 1'

const newDate = new Date(1995, 6, 2)

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
            console.log(currentProject)
        })
    })
    
}

function projectSelector() {
}
    // console.log(projectList)
    // console.log(projectAddButton)


        // if(project.name === 'project1'){
        //     project.addTask('bruh', newDate , 'desc')
        //     console.log(project)
        // }