import { DynamicProjectNumber } from "./addButtons";
import {projectsSetup } from "./todoSetup";
export let projectAddButton = document.querySelector('.addProject') as Element;
let projectList = document.querySelector('.projects') as Element;


const newDate = new Date(1995, 6, 2)

export function loopProjects() {
    projectList.innerHTML = ''
    projectsSetup.projects.forEach(project => {
        let div = document.createElement('div')
        div.classList.add('project')
        div.classList.add(`${project.name.replace(/\s/g, '').toLocaleLowerCase()}`)
        div.textContent = project.name
        projectList.appendChild(div)
    })
    
}
    // console.log(projectList)
    // console.log(projectAddButton)


        // if(project.name === 'project1'){
        //     project.addTask('bruh', newDate , 'desc')
        //     console.log(project)
        // }