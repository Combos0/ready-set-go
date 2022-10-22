import initialLoader from './loader.js';
import newProjectLoader from './projectForm.js';
import './styles.css';

initialLoader();

const userProjects = (() => {
    const storedProjectList = [];
    return storedProjectList;
})();

const formParser = () => {
    const rawFormData = {
        title: document.querySelector('#title-input').value,
        dueDate: document.querySelector('#date-input').value,
        desc: document.querySelector('#desc-input').value,
        priority: () => {
            const priorityLow = document.getElementById('priority-low');
            const priorityMed = document.getElementById('priority-med');
            const priorityHigh = document.getElementById('priority-high');
            if (priorityLow.checked === true) {
                return 'low';
            } else if (priorityMed.checked === true) {
                return 'med';
            } else {return 'high';};
        },
    };
    function todoProject(title, priority, dueDate, desc) {
        const TODOS = [];
        const sayTitle = () => {
            console.log(`This project's title is: ${title}`);
        };
        const sayDueDate = () => {
            console.log(`This project's due date is: ${dueDate}`);
        };
        const sayPriority = () => {
            console.log(`This project's priority is: ${priority}`)
        };
        const sayDesc = () => {
            console.log(`This project's description is: ${desc}`);
        }
        return {TODOS, title, sayTitle, sayDueDate, sayPriority, sayDesc};
    };

    const createdProject = new todoProject(rawFormData.title, rawFormData.priority(), rawFormData.dueDate, rawFormData.desc);
    localStorage.setItem(`${createdProject.title}`, JSON.stringify(createdProject));
    return createdProject.title;
};

//anything that has to be added to the DOM goes here
const eventHandlers = (() => {
    const newProjectBTN = document.getElementById('new-project-btn');
    newProjectBTN.addEventListener('click', () => {
        newProjectLoader();
    });
})();

//exports
export {formParser as default};