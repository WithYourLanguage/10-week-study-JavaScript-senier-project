const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginText = document.querySelector("#Login-Text");
const greeting = document.querySelector("#greeting");

const quote = document.querySelector("#quote");

//const clock = document.querySelector("#clock")

const weather_1 = document.querySelector("#weather");

const todoForm = document.querySelector("#todo-form");

const todoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//localStorage.setItem("collection", "null");
const GreenForestBackground = document.querySelector("#Green-Forest");
const collectionSelection = document.querySelector("#Green-Forest");
const OceanBackground = document.querySelector("#Ocean__background");
const mountainBackground = document.querySelector("#mountain__background");
GreenForestBackground.style.display = "none";
OceanBackground.style.display = "none";
mountainBackground.style.display = "none";
function getClock() {
  // paintGreetings 펑션에서 Good morning, {사용자이름}
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  console.log(hours);
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  // const CurrentTime = `${hours}:${minutes}`
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  loginText.classList.add("hidden");
  paintGreetings(username); // 로그인이 완료된 후 로그인 화면을 없애고 다음 화면으로 넘어가도록 하는 펑션 실행 코드
}

function paintGreetings(username) {
  if (localStorage.getItem("collection") === null) {
    GreenForestBackground.style.display = "block";
    OceanBackground.style.display = "block";
    mountainBackground.style.display = "block";
    GreenForestBackground.classList.remove(HIDDEN_CLASSNAME, username);
  } else {
    GreenForestBackground.style.display = "none";
    OceanBackground.style.display = "none";
    mountainBackground.style.display = "none";

    quote.classList.remove(HIDDEN_CLASSNAME, username); // 명언
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME, username); // 시계
    todoList.classList.remove(HIDDEN_CLASSNAME, username); // todo 텍스트
    todoForm.classList.remove(HIDDEN_CLASSNAME, username); // todo input box

    weather_1.classList.remove(HIDDEN_CLASSNAME, username); // 날씨
    // 여기야 여기라구************************************************
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    console.log(hours);
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const time = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;

    if (hours < 12) {
      greeting.innerText = "Good morning, " + username;
    } else if (hours >= 12 && hours < 18) {
      greeting.innerText = "Good afternoon, " + username;
    } else {
      greeting.innerText = "Good evening, " + username;
    }
  }
}

let savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginText.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
function paintGreetingsAddUsername() {
  if (savedUsername === null) {
    savedUsername = localStorage.getItem(USERNAME_KEY);
    paintGreetings(savedUsername);
  } else {
    paintGreetings(savedUsername);
  }
}
collectionSelection.addEventListener("click", paintGreetingsAddUsername);
OceanBackground.addEventListener("click", paintGreetingsAddUsername);
mountainBackground.addEventListener("click", paintGreetingsAddUsername);
