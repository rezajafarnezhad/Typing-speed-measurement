



const theTimer = document.querySelector(".timer");
const testarea = document.getElementById("test-area");
const OrginText = document.querySelector("#origin-text > p").innerHTML;
const Border = document.querySelector(".test-wrapper");
const reset = document.getElementById("reset");

var interval;
var Timer = [0, 0, 0, 0];
var IsRunning = false;

function LeadingZero(time) {

    if (time <= 9) {
        time = "0" + time;
    }

    return time;
}


function RunTimer() {

    let CurrentTime = LeadingZero(Timer[0]) + ":" + LeadingZero(Timer[1]) + ":" + LeadingZero(Timer[2]);
    theTimer.innerHTML = CurrentTime;
    Timer[3]++;
    Timer[0] = Math.floor((Timer[3] / 100) / 60);
    Timer[1] = Math.floor(Timer[3] / 100) - (Timer[0] * 60);
    Timer[2] = Math.floor(Timer[3] - (Timer[1] * 100) - (Timer[0] * 6000));
}



function Start() {

    let textInteredLength = testarea.value.length;
    if (textInteredLength == 0 && IsRunning == false) {
        IsRunning = true;
        interval = setInterval(RunTimer, 10);
    }
}

testarea.addEventListener("keypress", function () {

    Start();

});





function SpellCheck() {

    let textUser = testarea.value;
    let orgintextMatch = OrginText.substring(0, textUser.length);


    if (textUser == OrginText) {


        Border.style.borderColor = "green";
        clearInterval(interval);
        alert("شما در " + theTimer.innerHTML + "موفق به گذراندن این تست شدید.");

    } else {

        if (textUser == orgintextMatch) {

            Border.style.borderColor = "yellow";

        } else {
            Border.style.borderColor = "red";

        }
    }

}

testarea.addEventListener("keyup", SpellCheck);

reset.addEventListener("click", function () {

    document.location.reload(true);

});