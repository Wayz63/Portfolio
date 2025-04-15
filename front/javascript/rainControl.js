let rainContainer;
let currentDrops = 0;
let maxDrops = 100;
let rainInterval;

export function initRainControl() {
    const rainControl = document.getElementById('rain-control');
    const slider = document.getElementById('rain-slider');

    // Création du conteneur des gouttes
    rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');
    document.body.appendChild(rainContainer);

    maxDrops = parseInt(slider.value, 10);

    slider.addEventListener('input', () => {
        maxDrops = parseInt(slider.value, 10);
        adjustRaindrops();
    });

    startRain();

    // Affichage du slider après un court délai
    rainControl.classList.remove('hidden');
    setTimeout(() => {
        rainControl.classList.add('show');
    }, 100);
}

function startRain() {
    rainInterval = setInterval(() => {
        if (currentDrops < maxDrops) {
            createRaindrop();
        }
    }, 100);
}

function createRaindrop() {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
    drop.style.left = Math.random() * window.innerWidth + 'px';
    drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';

    rainContainer.appendChild(drop);
    currentDrops++;

    drop.addEventListener('animationend', () => {
        rainContainer.removeChild(drop);
        currentDrops--;
    });
}

function adjustRaindrops() {
    const raindrops = rainContainer.getElementsByClassName('raindrop');
    while (raindrops.length > maxDrops) {
        rainContainer.removeChild(raindrops[0]);
        currentDrops--;
    }
}
