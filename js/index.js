const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");

const timer = document.getElementById("timer");

let clock;
let isTimerRunning = false;

let timerHundredSeconds = 0;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

printTimer(timer, timerHundredSeconds, timerSeconds, timerMinutes, timerHours)

startButton.addEventListener("click", function(){
    
    if (isTimerRunning === true){
    } else {
        clock = setInterval(function(){
            printTimer(timer, timerHundredSeconds, timerSeconds, timerMinutes, timerHours);
            timerHundredSeconds++;

            if (timerHundredSeconds === 100){
                timerSeconds++;
                timerHundredSeconds = 0;
            }

            if (timerSeconds === 60){
                timerMinutes++;
                timerSeconds = 0;
            }

            if (timerMinutes === 60){
                timerHours++;
                timerMinutes = 0;
            }

        }, 10);
    }

    isTimerRunning = true;
});


pauseButton.addEventListener("click", function(){
    clearInterval(clock);
    console.log(clock);
    isTimerRunning = false;
});


resetButton.addEventListener("click", function(){
    clearInterval(clock);
    timerHundredSeconds = 0;
    timerSeconds = 0;
    timerMinutes = 0;
    timerHours = 0;
    printTimer(timer, timerHundredSeconds, timerSeconds, timerMinutes, timerHours);
    isTimerRunning = false;
});


function printTimer (htmlElement, valueCentoseconds, valueSeconds, valueMinutes, valueHours){
    htmlElement.innerHTML = `${addFirstZero(valueHours)}:${addFirstZero(valueMinutes)}:${addFirstZero(valueSeconds)}:${addFirstZero(valueCentoseconds)}`;
}


function addFirstZero(number){
    
    let formattedNumber;

    if(number < 10){
        formattedNumber = `0${number}`;
    } else {
        formattedNumber = number;
    }

    return formattedNumber
}