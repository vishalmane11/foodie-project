var dayselem = document.querySelector("#dayselem");
var hourselem = document.querySelector("#hourselem");
var minutelem = document.querySelector("#minutelem");
var secondelem = document.querySelector("#secondelem");
setInterval(function () {
  var todays = new Date();
  var future = new Date(2022, 9, 10, 21, 50, 30, 10);

  var diff = future - todays;
  var second = Math.floor(diff / 1000);
  var minute = Math.floor(diff / (1000 * 60));
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));

  hours = hours % 24;
  minute = minute % 60;
  second = second % 60;

  dayselem.textContent = days;
  hourselem.textContent = hours;
  minutelem.textContent = minute;
  secondelem.textContent = second;
}, 1000);
