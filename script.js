const audio = document.getElementById('audio');
    const songTitle = document.getElementById('song-title');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const playlist = [
        { src: 'music/purimmyr.mp3', title: 'Мир серед війни' },
        { src: 'song2.mp3', title: 'Пісня 2' },
        { src: 'song3.mp3', title: 'Пісня 3' }
    ];
    let currentSongIndex = 0;

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);

    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    function changeVolume(volume) {
        audio.volume = volume;
    }

    function setSong(src, title) {
        audio.src = src;
        songTitle.innerText = title;
        audio.play();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : playlist.length - 1;
        setSong(playlist[currentSongIndex].src, playlist[currentSongIndex].title);
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex < playlist.length - 1) ? currentSongIndex + 1 : 0;
        setSong(playlist[currentSongIndex].src, playlist[currentSongIndex].title);
    }

    function updateProgress() {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;

        currentTimeEl.textContent = formatTime(audio.currentTime);
    }

    function seekAudio(value) {
        audio.currentTime = (value / 100) * audio.duration;
    }

    function updateDuration() {
        durationEl.textContent = formatTime(audio.duration);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }


    function toggleContent() {
    var content = document.getElementById('content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
