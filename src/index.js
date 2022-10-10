import initialLoader from './loader.js';
//import newProjectLoader from './projectForm.js';
import './styles.css';

initialLoader();

//project factory
const todoProject = (title, priority, dueDate, description) => {
    const TODOS = [];
    return {title, priority, dueDate, TODOS};
};

//project handler
const projectHandlers = (() => {
    const allProjects = [];
    return {allProjects,};
})();

//default project on initial load
const defaultProject = (() => {
    const firstProject = todoProject('first project!', 'low', 'today', 'Lorum ipsum');
    projectHandlers.allProjects.push(defaultProject.firstProject);
})();

//anything that has to be added to the DOM goes here
/* const eventHandlers = (() => {
    const newProjectBTN = document.getElementById('new-project-btn');
    newProjectBTN.addEventListener('click', () => {
        newProjectLoader();
    });
})(); */