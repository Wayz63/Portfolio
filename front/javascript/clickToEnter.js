export function initClickToEnter() {
    const clickToEnter = document.getElementById('click-to-enter');
    const mainPage = document.getElementById('mainpage');

    clickToEnter.addEventListener('click', () => {
        clickToEnter.classList.remove('show');
        clickToEnter.classList.add('hidden');
        mainPage.style.display = 'block';
    });
}
