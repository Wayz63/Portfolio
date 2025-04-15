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
                playAudio();
            }, 500);
        }
    }, 100);
});

function playAudio() {
    const song = document.getElementById('mainsong');
    
    song.play().catch(function(error) {
        console.log('L\'audio n\'a pas pu être joué en raison de restrictions d\'autoplay.');
    });
}