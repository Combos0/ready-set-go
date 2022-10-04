import initialLoader from './loader.js';
import './styles.css';

initialLoader();

const user = (firstName, lastName) => {
    const getFullName = () => {
        let nameString = `${firstName} ${lastName}`;
        return nameString;
    }
    return {getFullName};
};

const combos = user('Jeremy', 'Caudill');


const todoProject = (title, priority, dueDate, description) => {

    return {title, priority, dueDate};
};


//anything that has to be added to the DOM goes here
const domAddIns = (() => {
    const userInfoDiv = document.getElementById('user-info-div');
    userInfoDiv.textContent = `Hi there, ${combos.getFullName()}`;
})();

const eventHandlers = (() => {
    const newProjectBTN = document.getElementById('new-project-btn');
    newProjectBTN.addEventListener('click', () => {
        //creates new project form here
    });
})();