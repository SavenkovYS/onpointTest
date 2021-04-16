(function() {
    const timer = document.querySelector('.menu__timer-value')
    const INITIAL_TIME_MINUTES = 1

    let initialSeconds = INITIAL_TIME_MINUTES * 60
    timer.textContent = countTime(initialSeconds)

    function countTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        return `${minutes}:${seconds}`
    }

    function setTimer() {
        timer.textContent = countTime(initialSeconds)

        if (initialSeconds === 0) {
            clearInterval(intervalId)
        }

        initialSeconds-- 
    }

    const intervalId = setInterval(setTimer, 1000);
    
})()