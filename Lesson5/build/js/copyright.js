"use strict";
// first variation using type guard
// const year: HTMLElement | null = document.getElementById("year");
// const thisYear:string = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }
// second variation using type assertion
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
