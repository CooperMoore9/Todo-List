export interface TaskInterface {
    title: string
    dueDate: Date
    description: string
}

export class Task implements TaskInterface {
    
    title: string
    dueDate: Date
    description: string

    constructor(title: string, dueDate: Date, description: string) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description
    }

};