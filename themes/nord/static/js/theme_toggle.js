const dark = 'dark';

function theme_toggle() {
    document.body.classList.toggle(dark);
    sessionStorage.setItem(dark, (sessionStorage.getItem(dark) !== 'true'));
}

if (sessionStorage.getItem(dark) === 'true') {
    document.body.classList.toggle(dark);
}