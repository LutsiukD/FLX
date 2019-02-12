function formatTime(number) {
  let days = Math.floor(number / 1440);
  let tempHours = number % 1440;
  let hours = Math.floor(tempHours / 60);
  let minutes = number % 60;
  return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)";
}

formatTime(120);
formatTime(59);
formatTime(3601);