import initialLoader from './loader.js';
import newProjectLoader from './projectForm.js';
import formParser from './formparse.js';
import './styles.css';

initialLoader();

//anything that has to be added to the DOM goes here
const eventHandlers = (() => {
    const newProjectBTN = document.getElementById('new-project-btn');
    newProjectBTN.addEventListener('click', () => {
        newProjectLoader();
    });

    /*const formSubmitBTN = document.getElementById('form-submit');
    formSubmitBTN.addEventListener('click', (event) => {
        event.preventDefault();
        formParser();
    }); */
})();