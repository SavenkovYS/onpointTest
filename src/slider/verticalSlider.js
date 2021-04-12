(function() {
    function slideDown() {
        const verticalSlides = document.querySelectorAll('.vertical-slide')
        const slider = document.querySelector('.slider')
        let currentSlide = 0
        let transformValue = 0;

        slider.addEventListener('touchstart', evt => {
            const initCoord = evt.targetTouches[0].clientY

            slider.addEventListener('touchend', handleTouchend)

            function handleTouchend (evt) {
                const finalCoord = evt.changedTouches[0].clientY

                if (finalCoord - 50 < initCoord && currentSlide !== verticalSlides.length - 1) {
                    currentSlide++
                    slider.style.transform = `translateY(${-100 / verticalSlides.length * currentSlide}%)`
                }

                if (finalCoord > initCoord + 50 && currentSlide !== 0) {
                    currentSlide--
                    slider.style.transform = `translateY(${-100 / verticalSlides.length * currentSlide}%)`
                }
                slider.removeEventListener('touchend', handleTouchend)
            }
        })
    }
    

    (function init() {
        slideDown()
    })()
})()