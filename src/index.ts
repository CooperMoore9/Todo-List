//Note
// -cog wheel on tasks header to change amount of rows

// -Add new Projects and Tasks button will always be at bottom/end of list to add new objects
// -Add new projects
    // -When you click 'Add new Projects' just turn the 'Add new Projects' button to the new project, and move the add new project button down
    // -Add new Tasks within projects

// -When different project is selected, present stored tasks
// -New tasks will act similar, when you click 'Add new Task' button it turns the button into a new task and you can fill in the fields as necessary, also moves add new task button over

// -add a bin button on the tasks in the bottom right to delete the tasks
// -add a bin button the the right of projects to delete them (are you sure warning)

//localStorage Test
    // export function catTom()
    //     let newCat = 'Phillip'
    // localStorage.setItem('myCat', newCat)
    // const cat = localStorage.getItem('myCat')
    // console.log(cat)
    // }

import './style.css';
import {projectSetup} from './todoSetup'
import {addProject} from './addButtons'
import {loopProjects} from './uiUpdater'

    projectSetup();
    addProject();
    loopProjects();

