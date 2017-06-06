//  padding function
function padIt(time) {
  time = time.toString();
  if(time.length == 1){
    return `0${time}`;
  }
  else {
    return time
  }
}

window.onload = function() {


  // Clock Hands
  const secondHand = document.querySelector('.secondHand');
  const minuteHand = document.querySelector('.minuteHand');
  const hourHand = document.querySelector('.hourHand');

  // Digital Text
  const secDigital = document.querySelector('.sec');
  const minDigital = document.querySelector('.min');
  const hourDigital = document.querySelector('.hour');

  //  Set the digital Clock

  function SetDigital(seconds, minutes, hours) {

    secDigital.innerHTML = padIt(seconds);
    minDigital.innerHTML = padIt(minutes);
    hourDigital.innerHTML = padIt(hours);

  }

  function setTime(){


    // Gets the numbers
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Set Digital Clock
    SetDigital( seconds, minutes, hours)


    // Calculates the degrees corresponding to numbers
    const secDegrees = (seconds/60)*360 + 90;
    const minDegrees = (minutes/60)*360 + 90 ;
    const hourDegrees = (hours/12)*360 + 90;

  //  console.log(`${hours}:${minutes}:${seconds} | seconds - ${secDegrees} | Min - ${minDegrees} | hours - ${hourDegrees}`);

    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;



  }

  setInterval(setTime,1000);
};
