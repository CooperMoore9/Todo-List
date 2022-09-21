import { de } from 'date-fns/locale'
import {Task, TaskInterface} from './taskObject'


export interface ProjectInterface {
    addTask(title: string, dueDate: Date, description: string): void
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

    addTask(title: string, dueDate: Date, description: string) {
        let newTask = new Task(title, dueDate, description)
        this.tasks.push(newTask)
    }

};