//Create new Project object when new project is added.
//Probable gonna need an array of projects that can be selected as well.
//Project object needs title, and array of task objects that are stored within the project.
    //When tasks are added, create task Object, and store in current Project Object


// All Projects Container
interface allProjectsInterface {
    projects: ProjectInterface[];
};

export class AllProjects implements allProjectsInterface {
    projects: ProjectInterface[];

    constructor(projects: ProjectInterface[]) {
        this.projects = projects;
    };

    addProject(name:string) {
        let newProject = new Project(name, []);
        this.projects.push(newProject);
    };

    logProjects() {
        console.log(this);
    };

};


// Project Objects
interface ProjectInterface {
    addTask(title: string, dueDate: Date, description: string): void;
    name: string;
    tasks: TaskInterface[];
};

export class Project implements ProjectInterface {
    
    name: string;
    tasks: TaskInterface[];

    constructor(name: string, tasks: TaskInterface[]) {
        this.name = name;
        this.tasks = tasks;
    };

    addTask(title: string, dueDate: Date, description: string) {
        let newTask = new Task(title, dueDate, description);
        this.tasks.push(newTask);
    };

};


// Task Objects
export interface TaskInterface {
    title: string;
    dueDate: Date;
    description: string;
}

export class Task implements TaskInterface {
    
    title: string;
    dueDate: Date;
    description: string;

    constructor(title: string, dueDate: Date, description: string) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
    };

};