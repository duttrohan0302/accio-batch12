const stopwatch = document.getElementById("display")

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

let startTime;
let elapsedTime = 0;
let stopwatchInterval;


const timeToString = (time) => {
    
}

const showButton = (buttonKey) => {
    if(buttonKey==="PLAY"){
        playButton.style.display="block"
        pauseButton.style.display="none"
    }else{
        pauseButton.style.display="block"
        playButton.style.display="none"
    }
}
const startStopwatch = () => {

    startTime = Date.now()

    stopwatchInterval = setInterval(()=>{
        elapsedTime = Date.now()-startTime

        timeToString(elapsedTime)
    },1)

    showButton("PAUSE")
}


const pauseStopwatch = () => {
    clearInterval(stopwatchInterval)
    showButton("PLAY")
}


const resetStopwatch = () => {
    clearInterval(stopwatchInterval)
    stopwatch.innerHTML = "00:00:00:000"
    elapsedTime=0;
    showButton("PLAY")
}


playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",pauseStopwatch)
resetButton.addEventListener("click",resetStopwatch)