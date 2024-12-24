document.getElementById("play-music").addEventListener("click", function() {
    const music = document.getElementById("christmas-music");

    if (music.paused) {
        music.play();  // Phát nhạc
        this.textContent = "🎶 Pause Music";  // Thay đổi chữ nút thành "Pause Music"
    } else {
        music.pause();  // Dừng nhạc
        this.textContent = "🎶 Play Christmas Music";  // Thay đổi chữ nút thành "Play Music"
    }
});
