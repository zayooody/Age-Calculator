let currentYear = 2022;
let currentMonth = 8;
let currentDate = 31;
const year = document.getElementById("year");
const month = document.getElementById("month");
const display = document.getElementById("text-place");
const date = document.getElementById("date");

function submit() {
  display.innerHTML = `Your Age is ${
    currentYear - year.value
  } Years , ${Math.abs(currentMonth - month.value)} month  , and ${Math.abs(
    currentDate - date.value
  )} days!`;
}
