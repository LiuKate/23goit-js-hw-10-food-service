import './styles.css';
import menuList from './menu.hbs';
import dishes from './menu.json';

const menuCards = menuList(dishes);

const menuListEl = document.querySelector(`.js-menu`);
const themeSwitchEl = document.querySelector(`#theme-switch-toggle`);
const localStorageTheme = localStorage.getItem(`Theme`);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
bodyRef.classList.add(Theme.LIGHT);

menuListEl.insertAdjacentHTML(`afterbegin`, menuCards);

themeSwitchEl.addEventListener(`change`, onChangeTheme);


checkLocalStorageTheme()

function onChangeTheme(evt) {

    evt.preventDefault();

    if (bodyRef.className !== Theme.LIGHT) {
        localStorage.setItem('Theme', Theme.DARK)
        bodyRef.classList.toggle(Theme.LIGHT)
    } else {
        localStorage.setItem('Theme', Theme.LIGHT)
        bodyRef.classList.toggle(Theme.DARK)

    }
}

function checkLocalStorageTheme() {

    // bodyRef.classList = localStorageTheme;

    if (localStorageTheme === `dark`) {
        themeSwitchEl.checked = true;
          
    }
    else {
        themeSwitchEl.checked = false;
    }
};



