import initialLoader from './loader';
import createUser from './userInfo';
import './styles.css';

const checksForUser = (() => {
    let user = localStorage.getItem('user');
    if (user === null) {
        createUser();
        window.stop();
    } else {initialLoader();};
})();

let currentUser = (() => {
    let retrievedUser = localStorage.getItem('user');
    let user = JSON.parse(retrievedUser);
    return {
        user: user,
    };
})();

let titleSpaceUpdate = (() => {
    const userNameSpace = document.getElementById('user-info');
    userNameSpace.textContent = `Hi ${currentUser.user.name}`;
})();