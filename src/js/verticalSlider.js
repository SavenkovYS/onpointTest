(function() {
    
    const slides = document.querySelectorAll('.vertical-slide')
    const paginationBtns = document.querySelectorAll('.page-main__pagination')
    const slider = document.querySelector('.slider')
    const scrollDown = document.querySelector('.intro__scroll')

    const TOUCH_DISTANCE = 50

    let currentSlide = 0

    slider.addEventListener('touchstart', evt => {
        const initCoord = evt.targetTouches[0].clientY

        slider.addEventListener('touchend', handleTouchend)

        function handleTouchend (evt) {
            const finalCoord = evt.changedTouches[0].clientY

            if (initCoord - finalCoord > TOUCH_DISTANCE && currentSlide !== slides.length - 1) {
                currentSlide++
                showSlide(currentSlide)
            }

            if (finalCoord - initCoord > TOUCH_DISTANCE && currentSlide !== 0) {
                currentSlide--
                showSlide(currentSlide)
            } 

            function showSlide(slideNumber) {
                slider.style.transform = `translateY(${-100 / slides.length * slideNumber}%)`
                paginationBtns.forEach((btn, i) => {
                    btn.classList.remove('page-main__pagination--active')
                    if (i === slideNumber) {
                        btn.classList.add('page-main__pagination--active')
                        return
                    }
                })
            }

            if (currentSlide !== 0) {
                scrollDown.style.display = 'none'
            } else {
                scrollDown.style.display = 'block'
            }
            
            slider.removeEventListener('touchend', handleTouchend)
        }
    })
    

   
})()