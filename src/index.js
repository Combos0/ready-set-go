import initialLoader from './loader';
import createUser from './userInfo';
import './styles.css';

const checksForUser = (() => {
    let user = localStorage.getItem('user');
    if (user === null) {
        createUser();
    } else {initialLoader();};
})();