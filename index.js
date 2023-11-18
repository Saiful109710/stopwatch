let timeDisplay = document.querySelector('.timeDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

function startTime(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}`:msec;
    let secsString = secs < 10 ? `0${secs}`:secs;
    let minsString = mins < 10 ? `0${mins}`:mins;





    timeDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

    // timeDisplay.innerHTML = `${mins} : ${secs} : ${msec}`

}

startBtn.addEventListener('click',()=>{
    if(timerId !==null){
        clearInterval(timerId)
    }
    timerId = setInterval(startTime,10);
})


stopBtn.addEventListener('click',()=>{
    clearInterval(timerId);
})

resetBtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timeDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
})

