import {AllProjects} from './allProjectsObject'
import { Project } from './projectObject'

export let projectsSetup = new AllProjects([])

export function projectSetup() {

    projectsSetup.addProject('project1')
    projectsSetup.addProject(`project2`)

    projectsSetup.logProjects()
}
