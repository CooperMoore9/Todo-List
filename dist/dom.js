"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domSetup = void 0;
function domSetup() {
    let bodyContent = document.getElementById('content');
    if (bodyContent) {
        bodyContent.innerHTML = `
            <div class="sideBar">
            <div class="projectHeader">Projects</div>
            <div class="projects">
                    <div class="project">Project 1</div>
                    <div class="project">Project 2</div>
                    <button class="project addProject">add new project +</button>
                </div>
            </div>
            <div class="tasks">
                <div class="taskHeader">Project 1 Tasks</div>
                    <div class="projectTasks">
                        <div class="task">
                            <div class="taskTitle">Task 1</div>
                            <div class="taskDue">10/10/2010</div>
                            <div class="taskDesc">desc</div>
                            
                        </div>
                        <div class="task">
                            <div class="taskTitle">Task 2</div>
                            <div class="taskDue">10/10/2020</div>
                            <div class="taskDesc">desc</div>
                            
                        </div>
                        <button class="task addTask">
                            <div class="taskTitle">Add Task</div>
                            <div class="taskDesc">+</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
exports.domSetup = domSetup;
;
