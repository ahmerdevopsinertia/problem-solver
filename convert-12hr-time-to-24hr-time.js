// var time = '07:05:45PM';
// var time = '06:40:03AM';
var time = '12:00:00AM';
var hours = Number(time.match(/^(\d+)/)[1]);
var minutes = Number(time.match(/:(\d+)/)[1]);
var seconds = Number(time.substring(time.length - 4, time.length - 2));
var AMPM = time.slice(-2);
if (AMPM == "PM" && hours < 12) hours = hours + 12;
if (AMPM == "AM" && hours == 12) hours = hours - 12;
var sHours = hours.toString();
var sMinutes = minutes.toString();
var sSeconds = seconds.toString();
if (hours < 10) sHours = "0" + sHours;
if (minutes < 10) sMinutes = "0" + sMinutes;
if (seconds < 10) sSeconds= "0" + sSeconds;
console.log(sHours + ":" + sMinutes + ":" + sSeconds);
return sHours + ":" + sMinutes + ":" + sSeconds;