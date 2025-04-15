import { initLoader } from './loader.js';
import { initClickToEnter } from './clickToEnter.js';
import { initMusicToggle } from './music.js';
import { initRainControl } from './rainControl.js';

document.addEventListener('DOMContentLoaded', () => {
    initLoader(() => {
        initClickToEnter();
        initMusicToggle();
        initRainControl();
    });
});
