'use strict';

//  padding function
function padIt(time) {
  time = time.toString();
  if (time.length == 1) {
    return '0' + time;
  } else {
    return time;
  }
}

window.onload = function () {

  // Clock Hands
  var secondHand = document.querySelector('.secondHand');
  var minuteHand = document.querySelector('.minuteHand');
  var hourHand = document.querySelector('.hourHand');

  // Digital Text
  var secDigital = document.querySelector('.sec');
  var minDigital = document.querySelector('.min');
  var hourDigital = document.querySelector('.hour');

  //  Set the digital Clock
  function SetDigital(seconds, minutes, hours) {

    secDigital.innerHTML = padIt(seconds);
    minDigital.innerHTML = padIt(minutes);
    hourDigital.innerHTML = padIt(hours);
  }

  function setTime() {

    // Gets the time figures
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    // Update the Digital Clock
    SetDigital(seconds, minutes, hours);

    // Calculates the degrees corresponding to numbers
    var secDegrees = seconds / 60 * 360 + 90;
    var minDegrees = minutes / 60 * 360 + 90;
    var hourDegrees = hours / 12 * 360 + 90;

    //  console.log(`${hours}:${minutes}:${seconds} | seconds - ${secDegrees} | Min - ${minDegrees} | hours - ${hourDegrees}`);

    secondHand.style.transform = 'rotate(' + secDegrees + 'deg)';
    minuteHand.style.transform = 'rotate(' + minDegrees + 'deg)';
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
  }

  setInterval(setTime, 1000);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMuanMiXSwibmFtZXMiOlsicGFkSXQiLCJ0aW1lIiwidG9TdHJpbmciLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbmxvYWQiLCJzZWNvbmRIYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWludXRlSGFuZCIsImhvdXJIYW5kIiwic2VjRGlnaXRhbCIsIm1pbkRpZ2l0YWwiLCJob3VyRGlnaXRhbCIsIlNldERpZ2l0YWwiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaW5uZXJIVE1MIiwic2V0VGltZSIsIm5vdyIsIkRhdGUiLCJnZXRTZWNvbmRzIiwiZ2V0TWludXRlcyIsImdldEhvdXJzIiwic2VjRGVncmVlcyIsIm1pbkRlZ3JlZXMiLCJob3VyRGVncmVlcyIsInN0eWxlIiwidHJhbnNmb3JtIiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxTQUFTQSxLQUFULENBQWVDLElBQWYsRUFBcUI7QUFDbkJBLFNBQU9BLEtBQUtDLFFBQUwsRUFBUDtBQUNBLE1BQUdELEtBQUtFLE1BQUwsSUFBZSxDQUFsQixFQUFvQjtBQUNsQixpQkFBV0YsSUFBWDtBQUNELEdBRkQsTUFHSztBQUNILFdBQU9BLElBQVA7QUFDRDtBQUNGOztBQUVERyxPQUFPQyxNQUFQLEdBQWdCLFlBQVc7O0FBR3pCO0FBQ0EsTUFBTUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUNBLE1BQU1DLGFBQWFGLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFDQSxNQUFNRSxXQUFXSCxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWpCOztBQUVBO0FBQ0EsTUFBTUcsYUFBYUosU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFuQjtBQUNBLE1BQU1JLGFBQWFMLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBbkI7QUFDQSxNQUFNSyxjQUFjTixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQXBCOztBQUVBO0FBQ0EsV0FBU00sVUFBVCxDQUFvQkMsT0FBcEIsRUFBNkJDLE9BQTdCLEVBQXNDQyxLQUF0QyxFQUE2Qzs7QUFFM0NOLGVBQVdPLFNBQVgsR0FBdUJsQixNQUFNZSxPQUFOLENBQXZCO0FBQ0FILGVBQVdNLFNBQVgsR0FBdUJsQixNQUFNZ0IsT0FBTixDQUF2QjtBQUNBSCxnQkFBWUssU0FBWixHQUF3QmxCLE1BQU1pQixLQUFOLENBQXhCO0FBRUQ7O0FBRUQsV0FBU0UsT0FBVCxHQUFrQjs7QUFFaEI7QUFDQSxRQUFNQyxNQUFNLElBQUlDLElBQUosRUFBWjtBQUNBLFFBQU1OLFVBQVVLLElBQUlFLFVBQUosRUFBaEI7QUFDQSxRQUFNTixVQUFVSSxJQUFJRyxVQUFKLEVBQWhCO0FBQ0EsUUFBTU4sUUFBUUcsSUFBSUksUUFBSixFQUFkOztBQUVBO0FBQ0FWLGVBQVlDLE9BQVosRUFBcUJDLE9BQXJCLEVBQThCQyxLQUE5Qjs7QUFFQTtBQUNBLFFBQU1RLGFBQWNWLFVBQVEsRUFBVCxHQUFhLEdBQWIsR0FBbUIsRUFBdEM7QUFDQSxRQUFNVyxhQUFjVixVQUFRLEVBQVQsR0FBYSxHQUFiLEdBQW1CLEVBQXRDO0FBQ0EsUUFBTVcsY0FBZVYsUUFBTSxFQUFQLEdBQVcsR0FBWCxHQUFpQixFQUFyQzs7QUFFRjs7QUFFRVgsZUFBV3NCLEtBQVgsQ0FBaUJDLFNBQWpCLGVBQXVDSixVQUF2QztBQUNBaEIsZUFBV21CLEtBQVgsQ0FBaUJDLFNBQWpCLGVBQXVDSCxVQUF2QztBQUNBaEIsYUFBU2tCLEtBQVQsQ0FBZUMsU0FBZixlQUFxQ0YsV0FBckM7QUFFRDs7QUFFREcsY0FBWVgsT0FBWixFQUFvQixJQUFwQjtBQUNELENBL0NEIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgcGFkZGluZyBmdW5jdGlvblxuZnVuY3Rpb24gcGFkSXQodGltZSkge1xuICB0aW1lID0gdGltZS50b1N0cmluZygpO1xuICBpZih0aW1lLmxlbmd0aCA9PSAxKXtcbiAgICByZXR1cm4gYDAke3RpbWV9YDtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gdGltZVxuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXG4gIC8vIENsb2NrIEhhbmRzXG4gIGNvbnN0IHNlY29uZEhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kSGFuZCcpO1xuICBjb25zdCBtaW51dGVIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbnV0ZUhhbmQnKTtcbiAgY29uc3QgaG91ckhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91ckhhbmQnKTtcblxuICAvLyBEaWdpdGFsIFRleHRcbiAgY29uc3Qgc2VjRGlnaXRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWMnKTtcbiAgY29uc3QgbWluRGlnaXRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4nKTtcbiAgY29uc3QgaG91ckRpZ2l0YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cicpO1xuXG4gIC8vICBTZXQgdGhlIGRpZ2l0YWwgQ2xvY2tcbiAgZnVuY3Rpb24gU2V0RGlnaXRhbChzZWNvbmRzLCBtaW51dGVzLCBob3Vycykge1xuXG4gICAgc2VjRGlnaXRhbC5pbm5lckhUTUwgPSBwYWRJdChzZWNvbmRzKTtcbiAgICBtaW5EaWdpdGFsLmlubmVySFRNTCA9IHBhZEl0KG1pbnV0ZXMpO1xuICAgIGhvdXJEaWdpdGFsLmlubmVySFRNTCA9IHBhZEl0KGhvdXJzKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VGltZSgpe1xuXG4gICAgLy8gR2V0cyB0aGUgdGltZSBmaWd1cmVzXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBzZWNvbmRzID0gbm93LmdldFNlY29uZHMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCBob3VycyA9IG5vdy5nZXRIb3VycygpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBEaWdpdGFsIENsb2NrXG4gICAgU2V0RGlnaXRhbCggc2Vjb25kcywgbWludXRlcywgaG91cnMpXG5cbiAgICAvLyBDYWxjdWxhdGVzIHRoZSBkZWdyZWVzIGNvcnJlc3BvbmRpbmcgdG8gbnVtYmVyc1xuICAgIGNvbnN0IHNlY0RlZ3JlZXMgPSAoc2Vjb25kcy82MCkqMzYwICsgOTA7XG4gICAgY29uc3QgbWluRGVncmVlcyA9IChtaW51dGVzLzYwKSozNjAgKyA5MCA7XG4gICAgY29uc3QgaG91ckRlZ3JlZXMgPSAoaG91cnMvMTIpKjM2MCArIDkwO1xuXG4gIC8vICBjb25zb2xlLmxvZyhgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9IHwgc2Vjb25kcyAtICR7c2VjRGVncmVlc30gfCBNaW4gLSAke21pbkRlZ3JlZXN9IHwgaG91cnMgLSAke2hvdXJEZWdyZWVzfWApO1xuXG4gICAgc2Vjb25kSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7c2VjRGVncmVlc31kZWcpYDtcbiAgICBtaW51dGVIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHttaW5EZWdyZWVzfWRlZylgO1xuICAgIGhvdXJIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtob3VyRGVncmVlc31kZWcpYDtcblxuICB9XG5cbiAgc2V0SW50ZXJ2YWwoc2V0VGltZSwxMDAwKTtcbn07XG4iXX0=
