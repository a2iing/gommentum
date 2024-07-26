const calendar = document.querySelector("#date");
const clock = document.querySelector("#clock");

function getPresentDate() {
    const date = new Date();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const week = ["일","월","화","수","목","금","토"];
    let dayName = week[date.getDay()];

    calendar.innerText = `${month}월 ${day}일 ${dayName}요일`;
}

function getPresentTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getPresentDate();
getPresentTime();
setInterval(getPresentTime, 1000);