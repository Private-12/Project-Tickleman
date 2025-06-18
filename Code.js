var elems = document.getElementById("fullscreens"); // Get the element
var elem = document.getElementById("fullscreen");
function toggleFullscreen() {
    if (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
    ) {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        // Enter fullscreen
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullscreen) { /* Firefox */
            elem.mozRequestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Edge */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE 11 */
            elem.msRequestFullscreen();
        }
    }
}
var File = document.getElementById("File");

function ani() {
    File.classList.add("ani");
    elems.classList.add("blink");
}
function delayedLink(url, delay) {
  console.log('delayedLink called');
  setTimeout(function() {
    window.location.href = url;
  }, delay);
}

window.toggleFullscreen = toggleFullscreen;
window.delayedLink = delayedLink;
window.ani = ani;