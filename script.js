document.addEventListener('DOMContentLoaded', function () {
    // Picture-in-Picture Functionality
    const pipButtons = document.querySelectorAll('.pip-btn');
    pipButtons.forEach(button => {
        button.addEventListener('click', async function () {
            const video = this.parentElement.querySelector('.video-preview');
            if (video) {
                try {
                    if (document.pictureInPictureElement) {
                        await document.exitPictureInPicture();
                    } else {
                        await video.requestPictureInPicture();
                    }
                } catch (error) {
                    console.error('Error with Picture-in-Picture:', error);
                    alert('Picture-in-Picture is not supported in this browser.');
                }
            }
        });
    });

    // Fullscreen Functionality
    const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', function () {
            const video = this.parentElement.querySelector('.video-preview');
            if (video) {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.mozRequestFullScreen) { // Firefox
                    video.mozRequestFullScreen();
                } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) { // IE/Edge
                    video.msRequestFullscreen();
                }
            }
        });
    });
});
