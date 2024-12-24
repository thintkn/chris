document.getElementById("play-music").addEventListener("click", function() {
    const music = document.getElementById("christmas-music");

    if (music.paused) {
        music.play();  
        this.textContent = "🎶 Pause Music"; 
    } else {
        music.pause();  
        this.textContent = "🎶 Play Christmas Music";  
    }
});
