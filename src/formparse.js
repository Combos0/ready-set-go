/*This module is responsible for taking the data from
the new project form and using it to create a new project. */

export default function formParser() {
    const rawFormData = {
        title: document.querySelector('#title-input').nodeValue,
        priority: document.querySelector('.form-radio').nodeValue,
        dueDate: document.querySelector('#date-input').nodeValue,
        desc: document.querySelector('#desc-input').nodeValue,
    };
    function todoProject(title, priority, dueDate, desc) {
        const TODOS = [];
        const sayTitle = () => {
            console.log(`This project's title is: ${title}`);
        };
        const sayDueDate = () => {
            console.log(`This project's due date is: ${dueDate}`);
        };
        return {TODOS, sayTitle, sayDueDate};
    };

    let createdProject = new todoProject(rawFormData.title, rawFormData.priority, rawFormData.dueDate, rawFormData.desc);
    return {createdProject}; 
};