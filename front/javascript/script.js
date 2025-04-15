window.addEventListener('load', function() {
    const progressBar = document.getElementById('progress-bar');
    const loadingScreen = document.getElementById('loading-screen');
    const mainpage = document.getElementById('mainpage');
    const audio = document.getElementById('mainsong');
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');
    document.body.appendChild(rainContainer);

    let progress = 0;
    let maxDrops = 100;
    let currentDrops = 0;

    function updateMaxDrops() {
        const slider = document.getElementById('rain-slider');
        maxDrops = slider.value; 
    }

    function createRaindrop() {
        if (currentDrops >= maxDrops) return;

        let drop = document.createElement('div');
        drop.classList.add('raindrop');
        drop.style.left = Math.random() * window.innerWidth + 'px';
        drop.style.animationDuration = Math.random() * 1 + 1 + 's';

        rainContainer.appendChild(drop);
        currentDrops++;

        drop.addEventListener('animationend', function() {
            rainContainer.removeChild(drop);
            currentDrops--;
        });
    }

    function adjustRaindrops() {
        let raindrops = rainContainer.getElementsByClassName('raindrop');
        while (raindrops.length > maxDrops) {
            rainContainer.removeChild(raindrops[0]);
            currentDrops--;
        }
    }

    function startRain() {
        setInterval(createRaindrop, 100);

        const slider = document.getElementById('rain-slider');
        slider.addEventListener('input', function() {
            updateMaxDrops();
            adjustRaindrops(); 
        });
    }

    let interval = setInterval(function() {
        progress += 5;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                loadingScreen.style.display = 'none';

            const clickToEnter = document.getElementById('click-to-enter');
            clickToEnter.classList.remove('hidden');
            setTimeout(() => {
                clickToEnter.classList.add('show');
            }, 100);

            clickToEnter.addEventListener('click', function () {
                clickToEnter.style.display = 'none';
                mainpage.style.display = 'block';

                audio.play().catch(function(error) {
                    console.log("L'audio ne peut pas être joué automatiquement.");
                });

                startRain();

                const rainControl = document.getElementById('rain-control');
                rainControl.classList.remove('hidden');

                    setTimeout(() => {
                    rainControl.classList.add('show');
                    }, 100);
                });

            }, 500);
        }
    }, 100);

    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
    });
});
