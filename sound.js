document.addEventListener('DOMContentLoaded', function() {
    const bgm = document.getElementById('bgm');
    bgm.play().catch(error => {
        console.error('Auto-play was prevented:', error);
    });
});

document.querySelector('.sound').addEventListener('click', function() {
    const bgm = document.getElementById('bgm');
    const audio = document.getElementById('click-sound');
    if (bgm.paused) {
        bgm.play();
    } else {
        bgm.pause();
        audio.pause();
    }
});




function playClickSound() {
    const audio = document.getElementById('click-sound');
    audio.currentTime = 0; 
    audio.play();
}

document.addEventListener('click', playClickSound);