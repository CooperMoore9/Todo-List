export function domSetup() {
    let bodyContent = document.getElementById('content');
    
    if(bodyContent){
        bodyContent.innerHTML = `
            <div class="sideBar">
            <div class="projectHeader">Projects</div>
            <div class="projects">
                    <div class="project project1">Project 1</div>
                    <button class="project addProject">add new project +</button>
                </div>
            </div>
            <div class="tasks">
                <div class="taskHeader">Project 1 Tasks</div>
                    <div class="projectTasks">

                        <button class="task addTask">
                            <div class="taskTitle">Add Task</div>
                            <div class="taskDesc">+</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};