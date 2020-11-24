import './styles.css';
import menuList from './menu.hbs';
import dishes from './menu.json';

const menuCards = menuList(dishes);

const menuListEl = document.querySelector(`.js-menu`);
const themeSwitchEl = document.querySelector(`#theme-switch-toggle`);

menuListEl.insertAdjacentHTML(`afterbegin`, menuCards);

themeSwitchEl.addEventListener(`change`, onChangeTheme);

const localStorageTheme = localStorage.getItem(`Theme`);

checkLocalStorageTheme()

function addDarkTheme () {
    document.body.classList.remove(`light-theme`);
    document.body.classList.add(`dark-theme`);
    localStorage.setItem(`Theme`,`dark`)
};

function addLightTheme() {
    document.body.classList.remove(`dark-theme`);
    document.body.classList.add(`light-theme`);
    localStorage.setItem(`Theme`,`light`)
};

function onChangeTheme () {
    if (themeSwitchEl.checked) {
        
        addDarkTheme();
    } else {
        addLightTheme();
    }

};

function checkLocalStorageTheme() {
    if (localStorageTheme === `dark`) {
        themeSwitchEl.checked = true;
        addDarkTheme();
    }
    else {
         themeSwitchEl.checked = false;
        addLightTheme();
    }
};
