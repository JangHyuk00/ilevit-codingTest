const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const preNextIcon = document.querySelectorAll(".icons i");

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(), //요일
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === date.getMonth() &&
      currYear === date.getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  if (currMonth < 0 || currMonth > 11) {
    date = new Date(currYear, currMonth);
    currYear = date.getFullYear();
    currMonth = date.getMonth();
  } else {
    date = new Date();
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();
preNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    renderCalendar();
  });
});
