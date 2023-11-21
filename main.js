let time1 = document.getElementById('time1');
let time2 = document.getElementById('time2');
let time3 = document.getElementById('time3');
let time4 = document.getElementById('time4');
let countdown = document.getElementById('countdown');
let stop = document.getElementById('stop');
let click = document.getElementById('click');
let clickCount = document.getElementById('clickcount');
let lastBox = document.getElementById('lastbox');
let congrats = document.getElementById('congrats');
let hideboxbtn = document.getElementById('hideboxbtn');

let customtimer = document.getElementById('customtimer');
customtimer.style.display = "none";

congrats.style.display = "none";
lastBox.style.display = "none";
hideboxbtn.style.display = "none";

timer1 = false;
timer2 = false;
timer3 = false;
timer4 = false;
timer = 0;
timerStarted = false;
timerEnded = false;
customTime = false;

countdown.textContent = 'Timer: 0';

time1.addEventListener('click', function() {
    if(timer2 === false & timer3 === false & timer4 === false) {
        timer = '10';
        Timer = 10;
        printNumbersWithDelay(1, timer, 1000);
        timerStarted = true
        timer1 = true
    } else {
        alert('A timer is already playing !');
    }
})

time2.addEventListener('click', function() {
    if(timer1 === false & timer3 === false & timer4 === false) {
        timer = '20';
        Timer = 20;
        printNumbersWithDelay(1, timer, 1000);
        timerStarted = true
        timer2 = true
    } else {
        alert('A timer is already playing !');
    }
})

time3.addEventListener('click', function() {
    if(timer1 === false & timer2 === false & timer4 === false) {
        timer = '50';
        Timer = 50;
        printNumbersWithDelay(1, timer, 1000);
        timerStarted = true
        timer3 = true
    } else {
        alert('A timer is already playing !');
    }
})

time4.addEventListener('click', function() {
    //customtimer.style.display = "block";
    alert('Working On It ;)');
})

let customtimebtn = document.getElementById('customtimebtn');
function setCustom() {
    if(timer1 === false & timer2 === false & timer3 === false) {
        let customtimeinput = document.getElementById('customtimeinput').value;
        //const valueWithoutQuotes = customtimeinput.replace(/"/g, '');
        timer = customtimeinput;
        Timer = customtimeinput.replace(/"/g, '');
        //localStorage.setItem('theCustomTimer', timer);
        printNumbersWithDelay(1, timer, 1000);
        timerStarted = true;
        timer3 = true;
        customtimer.style.display = "none";
    } else {
        alert('A timer is already playing !');
    }
}
customtimebtn.addEventListener('click', setCustom);

//const cTimer = localStorage.getItem('theCustomTimer');

function printNumberWithDelay(number, delay) {
    setTimeout(function() {
        countdown.textContent = `Time: ${number}`;
    }, delay);
    if (number === Timer) {
        timerEnded = true;
    }
    if (timerEnded === true) {
        //alert(`Timer Is Ended ${lastNumber}`);
        congrats.style.display = "block";
        lastBox.style.display = "block";
        hideboxbtn.style.display = "block";
        congrats.textContent = `Congrats You got: ${lastNumber} Click 🥳`;
    }
}

function printNumbersWithDelay(start, end, delay) {
    let current = start;
    
    function printNextNumber() {
        printNumberWithDelay(current, delay);
        current++;
        if (current <= end) {
            setTimeout(printNextNumber, delay);
        }
    }
    printNextNumber();
}

function stopTimer() {
    location.reload();
}
stop.addEventListener("click", stopTimer);

function clickCountTimes() {
    if (timerStarted === true) {
        if (timerEnded === true) { 
            alert('The Timer is Ended');   
        } else {
            clickCount.textContent++;   
            lastNumber = clickCount.textContent;
        }
    } else {
        alert('Start the timer befaure start clicking !')
    }
}
click.addEventListener('click', clickCountTimes);

function hideBox() {
    congrats.style.display = "none";
    lastBox.style.display = "none";
    hideboxbtn.style.display = "none";
    location.reload();
}
hideboxbtn.addEventListener('click', hideBox);

function hidecustom() {
    customtimer.style.display = "none";
}
closecustomtime.addEventListener('click', hidecustom);

// Media Part
let mail = document.getElementById('mail');

mail.addEventListener('click', function(event) {
  event.preventDefault();

  const textToCopy = "cnefzi05@gmail.com";

  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
  alert('Succefully Copied the Chrome Email')
});
