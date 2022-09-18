export function projectAdd() {
    let addProjectButton = document.querySelector('.addProject');
    let projectList = document.querySelector('.projects')

    addProjectButton?.addEventListener('click', () => {
        const project = document.createElement("div")
        project.classList.add('project')
        projectList?.insertBefore(project, addProjectButton)
        
    })
};

export function projectTask() {
    let addTaskButton = document.querySelector('.addTask');
    let taskList = document.querySelector('.projectTasks')
    let taskDefaultNumber:number = 2;

    addTaskButton?.addEventListener('click', () => {
        taskDefaultNumber += 1;
        const task = document.createElement('div')
        const taskTitle = document.createElement('div')
        const taskDue = document.createElement('div')
        const taskDesc = document.createElement('div')
        task.classList.add('task')

        task.appendChild(taskTitle)
        task.appendChild(taskDue)
        task.appendChild(taskDesc)
        taskTitle.classList.add('taskTitle')
        taskDue.classList.add('taskDue')
        taskDesc.classList.add('taskDesc')
        
        taskTitle.textContent = (`Task ${taskDefaultNumber}`);
        taskDue.textContent = ('10/10/2020');
        taskDesc.textContent = ('desc');
        taskList?.insertBefore(task, addTaskButton)
        
    })
};
