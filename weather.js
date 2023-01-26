const API_KEY = "315d20b1ea2df2e04b6bb7ff14062eb9";
const weather__text = document.querySelector("#weather");
const body = document.querySelector("body");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather__text?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather__text = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      console.log(data.name, data.weather__text[0].main);
      console.log(`${data.weather__text[0].main} / ${data.main.temp}`);
      city.innerText = data.name;
      weather__text.innerText = `${data.weather__text[0].main} / ${data.main.temp}`;
    })
  );
}
function onGeoEroor() {
  alert("Cant find you. Noweather for you.");
  weather__text.innerText = "위치를 불러올 수 없습니다";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEroor); // 위치 좌표
