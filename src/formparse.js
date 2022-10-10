/*This module is responsible for taking the data from
the new project form and using it to create a new project. */

export default function formParser() {
    const projectTitle = document.querySelector('#title-input').nodeValue;
    const projectDesc = document.querySelector('#desc-input').nodeValue;
    const projectDueDate = document.querySelector('#date-input').nodeValue;
    const projectPriority = document.querySelector('.form-radio').nodeValue;
    
    let newProject = todoProject(projectTitle, projectDesc, projectDueDate, projectPriority);

    return newProject;
};