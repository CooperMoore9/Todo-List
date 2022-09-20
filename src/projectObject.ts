import {TaskInterface} from './taskObject'


export interface ProjectInterface {
    name: string
    tasks: TaskInterface[]
}

export class Project implements ProjectInterface {
    
    name: string
    tasks: TaskInterface[]

    constructor(name: string, tasks: TaskInterface[]) {
        this.name = name
        this.tasks = tasks
    }

};

// let testProject = new Project('name', [])

// testProject.logProject()