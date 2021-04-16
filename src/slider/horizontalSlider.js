(function() {
    const slider = document.querySelector('.horizontal-slider__container')
    const slides = document.querySelectorAll('.horizontal-slide')
    const sliderPin = document.querySelector('.horizontal-slider__range-pin')
    const sliderLine = document.querySelector('.horizontal-slider__range-line')

    let currentSlide = 2
    const sliderBreakpoint = sliderLine.offsetWidth / (slides.length + 1) // Расстояние на ползунке для переключения слайда
    const sliderPositions = [] // Расположение слайдов на ползунке
    let backgroundTransform = (100 / (slides.length - 1)) * currentSlide // Изменение цвета линии ползунка

    slider.style.transform = `translateX(${(-100 / slides.length) * currentSlide}%)`
    sliderLine.style.backgroundImage = `linear-gradient(to right, #d1eaff 0%, #d1eaff ${backgroundTransform}%, #f2f2f2 ${backgroundTransform}%)`

    slides.forEach((slide, i) => {
       const slidePosition = sliderLine.offsetWidth / (slides.length - 1) * i
       sliderPositions.push(slidePosition)
    })

    sliderPin.addEventListener('touchstart', evt => {
        const initLineCoord = sliderLine.getBoundingClientRect().left
        const maxRightPosition = initLineCoord + sliderLine.offsetWidth
        const maxLeftPosition = initLineCoord

        sliderPin.addEventListener('touchmove', handleTouchmove)
        sliderPin.addEventListener('touchend', handleTouchend)

        function handleTouchmove(evt) {
            const clientCoord = evt.changedTouches[0].clientX
            const currentPinPosition = clientCoord - initLineCoord

            if (clientCoord > maxRightPosition) {
                clientCoord = maxRightPosition
            }

            if (clientCoord < maxLeftPosition) {
                clientCoord = maxLeftPosition
            }
            
            if (sliderPositions[currentSlide] - currentPinPosition > sliderBreakpoint && currentSlide !== 0) {
                currentSlide--
            }

            if (sliderPositions[currentSlide] - currentPinPosition < -sliderBreakpoint && currentSlide !== slides.length - 1) {
                currentSlide++
            }

            backgroundTransform = currentPinPosition / sliderLine.offsetWidth * 100
            
            slider.style.transform = `translateX(${(-100 / slides.length) * currentSlide}%)`
            sliderPin.style.left = `${currentPinPosition - sliderPin.offsetWidth / 2}px`
            sliderLine.style.backgroundImage = `linear-gradient(to right, #d1eaff 0%, #d1eaff ${backgroundTransform}%, #f2f2f2 ${backgroundTransform}%)`
        }

        function handleTouchend(evt) {
            backgroundTransform = sliderPositions[currentSlide] / sliderLine.offsetWidth * 100

            sliderPin.style.left = `${sliderPositions[currentSlide] - sliderPin.offsetWidth / 2}px`
            sliderLine.style.backgroundImage = `linear-gradient(to right, #d1eaff 0%, #d1eaff ${backgroundTransform}%, #f2f2f2 ${backgroundTransform}%)`
            
            sliderPin.removeEventListener('touchmove', handleTouchmove)
            sliderPin.removeEventListener('thouchend', handleTouchend)
        }
    })
})()