export function initLoader(onLoadedCallback) {
    const progressBar = document.getElementById('progress-bar');
    const loadingScreen = document.getElementById('loading-screen');
    const clickToEnter = document.getElementById('click-to-enter');

    let progress = 0;

    const interval = setInterval(() => {
        progress += 5;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                loadingScreen.style.display = 'none';

                clickToEnter.classList.remove('hidden');
                setTimeout(() => {
                    clickToEnter.classList.add('show');
                }, 100);

                clickToEnter.addEventListener('click', () => {
                    clickToEnter.style.display = 'none';

                    if (onLoadedCallback && typeof onLoadedCallback === 'function') {
                        onLoadedCallback(); // <- C'est ici que tu passes ta logique principale
                    }
                });
            }, 500);
        }
    }, 100);
}
