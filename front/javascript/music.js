export function initMusicToggle() {
    const musicToggle = document.getElementById('music-toggle');
    const audio = document.getElementById('mainsong');

    let isMuted = false;
    audio.volume = 1;
    audio.loop = true;
    audio.play();

    musicToggle.addEventListener('click', () => {
        isMuted = !isMuted;
        audio.volume = isMuted ? 0 : 1;
        musicToggle.classList.toggle('music-muted', isMuted);
    });
}
