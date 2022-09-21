import {AllProjects} from './allProjectsObject'

export let projectsSetup = new AllProjects([])

export function projectSetup() {

    projectsSetup.addProject('project1')

    projectsSetup.logProjects()
}
