window.addEventListener('load', function() {
    const progressBar = document.getElementById('progress-bar');
    const loadingScreen = document.getElementById('loading-screen');
    
    let progress = 0;
    let interval = setInterval(function() {
        progress += 5;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 100);
    const song = document.getElementById('mainsong');
    song.play();
});