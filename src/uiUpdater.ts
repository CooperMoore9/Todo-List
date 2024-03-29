import { projectsSetup } from ".";
import { addProject, taskAddButton } from "./addButtons";
import { Project, Task } from "./allProjectsObject";
import { localProjectStorage } from "./localStorage";
import { format, compareAsc, parseISO, addDays } from "date-fns";

export let projectAddButton = document.querySelector(".addProject") as Element;
export let projectIndex = 0;

enum dropDownBox {
  Severe = "Severe",
  Moderate = "Moderate",
  Low = "Low",
  None = "None",
}

let projectList = document.querySelector(".projects") as Element;
let projectTasks = document.querySelector(".projectTasks") as Element;
const taskHeader = document.querySelector(".taskHeader") as Element;
const dropDownList = Object.values(dropDownBox);

export function loopProjects() {
  refreshProjects();
  taskHeaderFix();

  projectsSetup.projects.forEach((project) => {
    let div = document.createElement("div");
    let displayText = document.createElement("button");
    let deleteButton = document.createElement("button");

    div.classList.add("project", "justify-around");
    div.classList.add(`project${projectsSetup.projects.indexOf(project)}`);
    displayText.classList.add("w-full", "pl-7", `taskTitle${project.id}`);
    deleteButton.classList.add("w-7");

    deleteButton.textContent = "X";
    displayText.textContent = project.name;

    projectList.insertBefore(div, projectAddButton);
    div.appendChild(displayText);
    div.appendChild(deleteButton);

    displayText.addEventListener("click", () => {
      projectIndex = projectsSetup.projects.indexOf(project);
      taskHeader.textContent = `${project.name} Tasks`;
      loopTasks(project);
    });

    displayText.addEventListener("dblclick", () => renameProject(project));

    deleteButton.addEventListener("click", () => deleteProject(project));
  });
  localProjectStorage();
}

export function loopTasks(selectedProject: Project) {
  refreshTasks();
  selectedProject.tasks.forEach((task) => {
    let div = document.createElement("div");
    let titleContainer = document.createElement("div");
    let taskTitle = document.createElement("div");
    let taskDueDate = document.createElement("div");
    let taskDescription = document.createElement("div");

    let buttonContainer = document.createElement("div");
    let taskDeleteButton = document.createElement("button");
    let taskFinishedButton = document.createElement("button");
    let dropDown = document.createElement("select");

    div.appendChild(titleContainer);

    titleContainer.appendChild(taskTitle);

    div.appendChild(taskDueDate);
    div.appendChild(taskDescription);

    div.appendChild(buttonContainer);
    buttonContainer.appendChild(taskFinishedButton);
    buttonContainer.appendChild(dropDown);
    buttonContainer.appendChild(taskDeleteButton);

    buttonContainer.classList.add("buttonContainer");
    titleContainer.classList.add("titleBox", `titleBox${task.id}`);
    taskTitle.classList.add("taskTitle", `taskTitle${task.id}`);
    taskDescription.classList.add(`taskDescription${task.id}`);
    taskDueDate.classList.add("h-7", `taskDueDate${task.id}`);
    taskFinishedButton.classList.add("finishedButton");
    dropDown.classList.add("dropDown");

    dropDownList.forEach((severity) => {
      let dropOption = document.createElement("option");
      dropOption.setAttribute("value", severity);
      dropOption.textContent = severity;
      dropDown.appendChild(dropOption);
      dropOption.classList.add(severity);
    });

    taskTitle.textContent = task.title;
    taskFinishedButton.textContent = "Done";
    task.dueDate = new Date(task.dueDate);
    const ISODate = new Date(task.dueDate).toISOString();
    taskDueDate.textContent = `Due: ${format(parseISO(ISODate), "P")}`;
    taskDescription.textContent = task.description;
    taskDeleteButton.textContent = "X";

    taskDescription.classList.add("h-full", "taskDesc");
    taskDeleteButton.classList.add("deleteButton");
    div.classList.add(`task`, `task${task.id}`);

    taskTitle.style.cursor = "pointer";
    taskDescription.style.cursor = "pointer";
    taskDueDate.style.cursor = "pointer";

    projectTasks.insertBefore(div, taskAddButton);

    taskTitle.addEventListener("dblclick", () =>
      renameTaskTitle(task, selectedProject)
    );
    taskDescription.addEventListener("dblclick", () =>
      renameTaskDescription(task, selectedProject)
    );
    taskDueDate.addEventListener("dblclick", () =>
      dateChange(task, selectedProject)
    );
    taskDeleteButton.addEventListener("click", () => deleteTask(task));
    taskFinishedButton.addEventListener("click", () =>
      changeCompletionTask(task)
    );
    dropDown.addEventListener("change", () =>
      changeSeverity(dropDown.value, task)
    );

    dropDown.value = task.severity;
    taskComplete(task);
  });
  localProjectStorage();
}

function changeSeverity(value: string, task: Task) {
  task.severity = value;
  loopProjects();
}

function changeCompletionTask(task: Task) {
  task.completed = !task.completed;
  taskComplete(task);
}

function taskComplete(task: Task) {
  let taskBackground = document.querySelector(`.task${task.id}`);
  if (task.completed === true) {
    taskBackground?.classList.add("taskCompleted");
  } else {
    taskBackground?.classList.remove("taskCompleted");
  }
  loopProjects();
}

export function refreshProjects() {
  const deleteProjects = document.querySelectorAll(".project");
  deleteProjects.forEach((div) => {
    div.remove();
  });
}

export function refreshTasks() {
  const deleteTasks = document.querySelectorAll(".task");
  deleteTasks.forEach((div) => {
    div.remove();
  });
}

function deleteProject(project: Project) {
  projectsSetup.projects.splice(projectsSetup.projects.indexOf(project), 1);
  if (projectsSetup.projects[0]) {
    project.name = projectsSetup.projects[0].name;
    projectIndex = 0;
    taskHeader.textContent = `${project.name} Tasks`;
    loopTasks(projectsSetup.projects[0]);
  } else {
    refreshTasks();
  }
  loopProjects();
}

function deleteTask(task: Task) {
  projectsSetup.projects[projectIndex].tasks.splice(
    projectsSetup.projects[projectIndex].tasks.indexOf(task),
    1
  );
  loopTasks(projectsSetup.projects[projectIndex]);
}

function taskHeaderFix() {
  if (projectsSetup.projects[0]) {
    taskHeader.textContent = `${projectsSetup.projects[0].name} Tasks`;
  } else {
    taskHeader.textContent = "Project 1 Tasks";
  }
}

function renameProject(project: Project) {
  loopProjects();
  loopTasks(project);
  let projectTitle = document.querySelector(
    `.taskTitle${project.id}`
  ) as Element;
  projectTitle.replaceWith(document.createElement("input"));
  let inputValue = document.querySelector("input");

  inputValue?.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (
        checkNameProject(inputValue?.value as string) === true ||
        inputValue?.value.trim().length === 0
      ) {
        alert("Projects can't be named the same or empty");
      } else {
        changeName(project, inputValue?.value as string);
      }

      loopProjects();
    }
  });
}

function checkNameProject(inputValue: string) {
  let nameCheckVar = 0;
  for (let i = 0; i < projectsSetup.projects.length; i++) {
    if (inputValue === projectsSetup.projects[i].name) {
      nameCheckVar += 1;
    }
  }
  if (nameCheckVar >= 1) {
    return true;
  } else {
    return false;
  }
}

function changeName(project: Project, inputValue: string) {
  project.name = inputValue;
}

function renameTaskTitle(task: Task, project: Project) {
  loopProjects();
  loopTasks(project);
  let taskTitle = document.querySelector(`.taskTitle${task.id}`);
  taskTitle?.replaceWith(document.createElement("input"));
  let inputValue = document.querySelector("input");

  inputValue?.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (inputValue?.value && inputValue.value.trim() !== "") {
        task.title = inputValue?.value;
        loopTasks(project);
      } else {
        task.title = task.title;
        loopTasks(project);
      }
    }
  });
}

function dateChange(task: Task, project: Project) {
  let taskDate = document.querySelector(`.taskDueDate${task.id}`);
  taskDate?.replaceWith(document.createElement("input"));
  let inputValue = document.querySelector("input");
  inputValue?.setAttribute("type", "date");
  inputValue?.classList.add("h-7");
  inputValue?.addEventListener("change", function () {
    if (inputValue?.value)
      task.dueDate = addDays(new Date(inputValue?.value), 1);
    loopTasks(project);
  });
}

function renameTaskDescription(task: Task, project: Project) {
  loopProjects();
  loopTasks(project);
  let taskDesc = document.querySelector(`.taskDescription${task.id}`);
  taskDesc?.replaceWith(document.createElement("input"));
  let inputValue = document.querySelector("input");
  inputValue?.classList.add("h-full");

  inputValue?.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (inputValue?.value && inputValue.value.trim() !== "") {
        task.description = inputValue?.value;
        loopTasks(project);
      } else {
        task.description = task.description;
        loopTasks(project);
      }
    }
  });
}
