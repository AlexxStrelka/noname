var startButton = document.querySelector('.start');
var clearButton = document.querySelector('.clear');


function setTimer (event) {

var second = document.getElementById('s');
var minute = document.getElementById('m');
var hour = document.getElementById('h');

var timerInt = setInterval(msecond, 1);

second.innerHTML++;
var sec = second.innerHTML;
if (sec < 10) {second.innerHTML = "0" + sec};


if (sec > 59) {
	second.innerHTML = "00";
	minute.innerHTML++;
	var min = minute.innerHTML;
	if (min < 10) {minute.innerHTML = "0" + min};
}

if (min > 59) {
	minute.innerHTML = "00";
	hour.innerHTML++;
	var hr = hour.innerHTML;
	if (hr < 10) {hour.innerHTML = "0" + hr};
}

if (hr == 24) {
	alert ('Time is over'); 
	window.location.reload();
	return;
	}

  timerId = setTimeout(setTimer, 1000);

 buttonPause ();// Change of START to PAUSE
};

function msecond (){
  var msc = document.getElementById('msc');
	a = msc.innerHTML;
	console.log("msc.innerHTML", a);
	for (i=0; i<1000; i++) {
	a = a+1;
	if (a < 10) {
		msc.innerHTML = "00" + a;
	} else if (a < 99) {
		msc.innerHTML = "0" + a;
	} else {
		msc.innerHTML = a;
	}
}
if (a == 1000) a = "000";
}


// Сброс таймера кнопко1 CLEAR.....................
function endTimer () {
	
	clearTimeout(timerId);
	var second = document.getElementById('s');
	var minute = document.getElementById('m');
	var hour = document.getElementById('h');
	second.innerHTML = "00";
  minute.innerHTML = "00";
  hour.innerHTML = "00";
}

// Change in the button color section..................

function buttonPause () {
console.log("Pause is pressed!");
var startButton = document.querySelector('.start');
console.log(startButton);
startButton.removeEventListener('click', setTimer);
startButton.id = 'pause';
startButton.innerHTML = "PAUSE";
var startButton = document.getElementById('pause');
startButton.addEventListener('click', buttonContinue);
// return startButton;
}

function buttonContinue () {
console.log("Continue is pressed!");
console.log(startButton);
clearTimeout(timerId);
clearInterval(msecond);
startButton.removeAttribute('id');
startButton.id = 'continue';
startButton.innerHTML = "CONTINUE";
startButton.removeEventListener('click', buttonContinue);
startButton.addEventListener('click', next);
}

function next() {
	buttonPause ();
	setTimer();
}



startButton.addEventListener('click', setTimer);
clearButton.addEventListener('click', endTimer);



// setTimer();

