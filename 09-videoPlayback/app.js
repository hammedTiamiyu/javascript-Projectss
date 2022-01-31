// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

// Hint : use the slide class defined in the css to determin whether to play/not the video when added to the .video container element
const btn = document.querySelector('.switch-btn')
const videoContainer = document.querySelector('.video-container')

btn.addEventListener('click', function () {
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        videoContainer.pause()
    } else {
        btn.classList.remove('slide')
        videoContainer.play()
    }
})

// preloader
const preloader = document.querySelector('.preloader')
// hint : here in order to hide preloader gif, we listen for the event load(i.e after the whole window has bn loaded) of the window, then add .hide-preloader class which is already defined in the css
window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader')
})