
document.getElementById('start-button').onclick = function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'block';
    document.getElementById('score').style.display = 'block';
    document.getElementById('bg-music').play();
    // Itt kezdődik a játék
};
document.getElementById('restart-button').onclick = function() {
    location.reload();
};
document.getElementById('music-toggle').onclick = function() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
};
