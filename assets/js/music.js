const buttons = document.querySelectorAll('.button');
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;

    function startMusic() {
        music.play();
        musicBtn.textContent = 'Pause Music';
        isPlaying = true;
    }

    function endMusic() {
        music.pause();
        musicBtn.textContent = 'Play Music';
        isPlaying = false;
    }

    music.volume = 0.25;
    musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
        startMusic();
    } else {
        endMusic();
    }
    });
