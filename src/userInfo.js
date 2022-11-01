import './styles.css';

/* creating the user's personal object
that will hold all their info and projects */

export default function createUser() {

    const layout = (() => {
        const root = document.body;
        const welcomeScreen = document.createElement('div');
        welcomeScreen.setAttribute('id', 'welcome-screen');
        root.appendChild(welcomeScreen);

        const title = document.createElement('div');
        title.setAttribute('id', 'welcome-title');
        title.textContent = 'Byte Sized';
        welcomeScreen.appendChild(title);

        const enterName = document.createElement('div');
        enterName.setAttribute('id', 'enter-name');
        enterName.textContent = 'Please enter a user name:'
        welcomeScreen.appendChild(enterName);

        const infoHolder = document.createElement('div');
        infoHolder.setAttribute('id', 'info-holder');
        welcomeScreen.appendChild(infoHolder);

        const nameField = document.createElement('input');
        nameField.setAttribute('type', 'text');
        nameField.setAttribute('id', 'name-field');
        nameField.setAttribute('placeholder', 'Combos');
        infoHolder.appendChild(nameField);

        const BTN = document.createElement('button');
        BTN.setAttribute('type', 'submit');
        BTN.setAttribute('id', 'user-create-BTN');
        BTN.textContent = 'Enter';
        infoHolder.appendChild(BTN);
    })();

    const eventHandler = (() => {
        let submitButton = document.getElementById('user-create-BTN');
        submitButton.addEventListener('click', createUserObject);
    })();

    function createUserObject() {
        let userName = document.getElementById('name-field');
        let user = new userInfo(userName);
        localStorage.setItem('user', JSON.stringify(user));
    };

    function userInfo(name) {
        const userName = name;
        const projects = {};
    };

};