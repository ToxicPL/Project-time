function time() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  minutes = checkTime(minutes);
  secounds = checkTime(seconds);
  document.getElementById('time').innerHTML =
  hours + ":" + minutes + ":" + seconds;
  var t = setTimeout(time, 500);
}


function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}