(function() {

    function slideDown() {
        const scrollDownBtn = document.querySelector('.intro__button--down')
        const scrollUpBtn = document.querySelector('.intro__button--up')
        const verticalSlides = document.querySelectorAll('.vertical-slide')
        let currentSlide = 0
        let transformValue = 0;
        
        scrollDownBtn.addEventListener('click', () => {
            transformValue -= 100
            verticalSlides.forEach(slide => {
                slide.style.transform = `translateY(${transformValue}%)`
            })
        })

        scrollUpBtn.addEventListener('click', () => {
            transformValue += 100
            verticalSlides.forEach(slide => {
                slide.style.transform = `translateY(${transformValue}%)`
            })
        })
    }
    

    (function init() {
        slideDown()
    })()
})()