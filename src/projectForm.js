import './styles.css';

/*This module is for creating new projects for the user.
Each time it is activated it should take the information given
and use it to return a new project that can be modified by the 
user. This page should exist inside the content-wrapper grid.*/

export default function newProjectLoader() {
    const pageLayout = (() => {
        const content = document.getElementById('content-wrapper');

        //root
        const projectFormWrapper = document.createElement('div');
        projectFormWrapper.setAttribute('id', 'project-form-wrapper');
        content.appendChild(projectFormWrapper);

        //header
        const newProjectHeader = document.createElement('div');
        newProjectHeader.textContent = 'Create a new project!';
        projectFormWrapper.appendChild(newProjectHeader);

        //root form
        const newProjectForm = document.createElement('form');
        newProjectForm.setAttribute('id', 'new-project-form');
        newProjectForm.setAttribute('name', 'newProject');
        newProjectForm.setAttribute('action', './formParse.js');
        newProjectForm.setAttribute('method', 'post');
        projectFormWrapper.appendChild(newProjectForm);

        //form title
        const newFormTitle = document.createElement('label');
        newFormTitle.setAttribute('id', 'form-title');
        newFormTitle.setAttribute('for', 'title');
        newFormTitle.textContent = 'Title:';
        newProjectForm.appendChild(newFormTitle);

        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title-input');
        newProjectForm.appendChild(titleInput);

        //form desc
        const newFormDesc = document.createElement('label');
        newFormDesc.setAttribute('for', 'description');
        newFormDesc.setAttribute('id', 'form-desc');
        newFormDesc.textContent = 'Description:';
        newProjectForm.appendChild(newFormDesc);

        const descInput = document.createElement('input');
        descInput.setAttribute('type', 'text');
        descInput.setAttribute('id', 'desc-input');
        newProjectForm.appendChild(descInput);

        //form dueDate
        const newFormDueDate = document.createElement('label');
        newFormDueDate.setAttribute('for', 'dueDate');
        newFormDueDate.setAttribute('id', 'form-due-date');
        newFormDueDate.textContent = 'Due date:';
        newProjectForm.appendChild(newFormDueDate);

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date-input');
        newProjectForm.appendChild(dateInput);

        //form priority
        const newFormPriority = document.createElement('label');
        newFormPriority.setAttribute('for', 'priority');
        newFormPriority.setAttribute('id', 'form-priority');
        newFormPriority.textContent = 'Project priority:';
        newProjectForm.appendChild(newFormPriority);

        const lowTitle = document.createElement('label');
        lowTitle.setAttribute('for', 'low');
        lowTitle.classList.add('priority-labels');
        lowTitle.textContent = 'Low:';
        newProjectForm.appendChild(lowTitle);

        const lowPriority = document.createElement('input');
        lowPriority.setAttribute('type', 'radio');
        lowPriority.setAttribute('name', 'priority');
        lowPriority.classList.add('form-radio')
        newProjectForm.appendChild(lowPriority);

        const medTitle = document.createElement('label');
        medTitle.setAttribute('for', 'med');
        medTitle.classList.add('priority-labels');
        medTitle.textContent = 'Med:';
        newProjectForm.appendChild(medTitle);

        const medPriority = document.createElement('input');
        medPriority.setAttribute('type', 'radio');
        medPriority.setAttribute('name', 'priority');
        medPriority.classList.add('form-radio')
        newProjectForm.appendChild(medPriority);

        const highTitle = document.createElement('label');
        highTitle.setAttribute('for', 'high');
        highTitle.classList.add('priority-labels');
        highTitle.textContent = 'High:';
        newProjectForm.appendChild(highTitle);

        const highPriority = document.createElement('input');
        highPriority.setAttribute('type', 'radio');
        highPriority.setAttribute('name', 'priority');
        highPriority.classList.add('form-radio')
        newProjectForm.appendChild(highPriority);

        //submit
        const formSubmit = document.createElement('input');
        formSubmit.setAttribute('type', 'submit');
        formSubmit.setAttribute('id', 'form-submit');
        newProjectForm.appendChild(formSubmit);
    })();
};