document.addEventListener("DOMContentLoaded", function() {
    const videoFrame = document.getElementById("video-frame");
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    function loadCourse(videoUrl) {
        videoFrame.src = videoUrl;
        progressBar.value = 0; 
        progressText.innerText = "0% completed";
    }

    window.loadCourse = loadCourse;
});

