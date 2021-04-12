// (function() {

//     const horizontalSlides = document.querySelectorAll('.horizontal-slide')
//     const slider = document.querySelector('.intro__slider')
//     const container = document.querySelector('.inner-container')
    
//     let breakPoints = []
//     const sliderChangeValue = slider.max / horizontalSlides.length

//     for (let i = 0; i <= horizontalSlides.length; i++) {
//         breakPoints.push(sliderChangeValue * i)    
//     }

//     let transformValue = 100 / horizontalSlides.length;

//     slider.addEventListener('change', () => {
//         for (let i = 0; i < breakPoints.length; i++) {
//             if (slider.value < breakPoints[i + 1] && slider.value > breakPoints[i]) {
                
//                 container.style.transform = `translateX(-${transformValue * i}%)`
//                 console.log(i)
//                 break
//             }
//         }
        
//     })
    
// })()