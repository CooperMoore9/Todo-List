import { parse } from "date-fns";
import { projectsSetup } from ".";
import { Project, Task, TaskInterface } from "./allProjectsObject";
import { projectSetup } from "./todoSetup";

export function localProjectStorage() {
  localStorage.setItem("allProjects", JSON.stringify(projectsSetup));
}

export function getLocalStorage() {
  let storedProjects = localStorage.getItem("allProjects");
  let parseProjects = JSON.parse(storedProjects as string);
  if (!storedProjects) {
    return;
  }
  parseProjects.projects.forEach((project: Project) => {
    projectsSetup.addProject(project.name);
    populateTasks(
      projectsSetup.projects[projectsSetup.projects.length - 1],
      project.tasks
    );
  });
}

function populateTasks(thisProject: Project, tasks: TaskInterface[]) {
  tasks.forEach((task: Task) => {
    thisProject.addTask(
      task.title,
      task.dueDate,
      task.description,
      task.completed,
      task.severity
    );
  });
}
