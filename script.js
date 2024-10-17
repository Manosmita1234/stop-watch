document.addEventListener("DOMContentLoaded", function() {
let display =  document.getElementById("main");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;



function startTimer(){
    if(!isRunning){
        startTime = Date.now()-elapsedTime;
        timer = setInterval(updatedisplay, 10);
        isRunning = true;
    }
    
    
}

function stopTimer(){
    clearInterval(timer);
    isRunning = false;

}

function resetTimer(){
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent =` 00:00:00:00`;

}

function updatedisplay(){
    const currentTime = Date.now();
    elapsedTime = currentTime-startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0');
    let minutes = Math.floor(elapsedTime / (1000 * 60)%60).toString().padStart(2, '0');
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, '0');
    let milliseconds = Math.floor((elapsedTime % 1000) / 10).toString().padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;


}

document.getElementById("startbtn").addEventListener("click",startTimer);
document.getElementById("stopbtn").addEventListener("click",stopTimer);
document.getElementById("resetbtn").addEventListener("click",resetTimer);
 

});
