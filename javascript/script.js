// Get all elements which are gonna change (Main hours).
let firstHabit = document.querySelector(".first-hrs"),
  secondHabit = document.querySelector(".second-hrs"),
  thirdHabit = document.querySelector(".third-hrs"),
  fourthHabit = document.querySelector(".fourth-hrs"),
  fifthHabit = document.querySelector(".fifth-hrs"),
  sixthHabit = document.querySelector(".sixth-hrs");

// Put our big names above in an array below
let arrHabits = [
  firstHabit,
  secondHabit,
  thirdHabit,
  fourthHabit,
  fifthHabit,
  sixthHabit,
];

// Get all elements which are gonna change (secondary hours).
let firstSecHabit = document.querySelector(".first-sec-hrs"),
  secondSecHabit = document.querySelector(".second-sec-hrs"),
  thirdSecHabit = document.querySelector(".third-sec-hrs"),
  fourthSecHabit = document.querySelector(".fourth-sec-hrs"),
  fifthSecHabit = document.querySelector(".fifth-sec-hrs"),
  sixthSecHabit = document.querySelector(".sixth-sec-hrs");

// Put our big names above in an array below
let arrSecHabits = [
  firstSecHabit,
  secondSecHabit,
  thirdSecHabit,
  fourthSecHabit,
  fifthSecHabit,
  sixthSecHabit,
];

// Get all elements which are gonna click (buttons), Default is weekly.
let dailyBtn = document.querySelector(".daily"),
  weeklyBtn = document.querySelector(".weekly"),
  monthlyBtn = document.querySelector(".monthly");

// Start work from here 😉🦾
// The local API (data.json)
let dataAPI = "../javascript/JSON/data.json";

// Click the first button (daily)
dailyBtn.addEventListener("click", () => {
  async function myFunc() {
    let response = await fetch(dataAPI);
    let data = await response.json();

    // Starting Change the main & secondary hours.
    for (let i = 0; i < arrHabits.length; i++) {
      arrHabits[i].innerHTML = data[i].timeframes.daily.current;
      arrSecHabits[i].innerHTML = data[i].timeframes.daily.previous;
    }
  }
  // Running the func.
  myFunc();
});

// Click the second button (weekly)
weeklyBtn.addEventListener("click", () => {
  async function myFunc() {
    let response = await fetch(dataAPI);
    let data = await response.json();

    // Starting Change the main & secondary hours.
    for (let i = 0; i < arrHabits.length; i++) {
      arrHabits[i].innerHTML = data[i].timeframes.weekly.current;
      arrSecHabits[i].innerHTML = data[i].timeframes.weekly.previous;
    }
  }
  // Running the func.
  myFunc();
});

// Click the second button (monthly)
monthlyBtn.addEventListener("click", () => {
  async function myFunc() {
    let response = await fetch(dataAPI);
    let data = await response.json();

    // Starting Change the main & secondary hours.
    for (let i = 0; i < arrHabits.length; i++) {
      arrHabits[i].innerHTML = data[i].timeframes.monthly.current;
      arrSecHabits[i].innerHTML = data[i].timeframes.monthly.previous;
    }
  }
  // Running the func.
  myFunc();
});
