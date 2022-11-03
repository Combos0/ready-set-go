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

let user = (() => {
    let user = localStorage.getItem('user');
    console.log(user);
})();