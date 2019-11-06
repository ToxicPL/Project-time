/*==================Actual time from the computer==================*/
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
/*======================================================*/
/*==================Search==================*/
var defaultSearch = "http://google.com/search?q=";
var input = document.querySelector(".inp");
input.addEventListener("keydown", e => {
  var keycode = e.keyCode;
  if (keycode == 13) {
    function search() {
      window.open(`${defaultSearch}${q}`);
    }

    if (input.value > 0) {
      input.addEventListener("input", search, false);
    }

    setTimeout(() => {
      input.value = "";
    }, 1);
  }
});
/*======================================================*/