/*This module is responsible for taking the data from
the new project form and using it to create a new project. */

export default function formParser() {
    const rawFormData = {
        title: document.querySelector('#title-input').value,
        priority: document.querySelector('.form-radio').value,
        dueDate: document.querySelector('#date-input').value,
        desc: document.querySelector('#desc-input').value,
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
            console.log(`This project's priority is: ${priority}`);
        };
        const sayDesc = () => {
            console.log(`This project's description is: ${desc}`);
        }
        return {TODOS, title, sayTitle, sayDueDate, sayPriority, sayDesc};
    };

    const createdProject = new todoProject(rawFormData.title, rawFormData.priority, rawFormData.dueDate, rawFormData.desc);
    console.log(createdProject);
    
    localStorage.setItem(`${createdProject.title}`, JSON.stringify(createdProject));
    console.log(`${createdProject.title} has been logged in storage.`);
};