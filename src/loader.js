import './styles.css';

export default function initialLoader() {
    //Div that everything else will attach to.
    const mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('id', 'main-wrapper');
    document.body.setAttribute('style', 'margin: 0;');
    document.body.appendChild(mainWrapper);


    //Div that hosts navigation bar
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');
    mainWrapper.appendChild(navBar);

    //navBar sub-Divs go here

    
    //Div that hosts side bar
    const sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'side-bar');
    mainWrapper.appendChild(sideBar);

    //sideBar sub-Divs go here


    //content goes inside this Div
    const contentWrapper = document.createElement('div');
    contentWrapper.setAttribute('id', 'content-wrapper');
    mainWrapper.appendChild(contentWrapper);
};