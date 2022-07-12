const API_KEY = "249b3490240f1cd5dc41d657fbb0f185"

//유저의 현재 위치를 알 수 있음 시작
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const kr = "kr"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //&units=metric맨 뒤에 적용해서 화씨 온도를 섭씨로 바꿈
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // getCurrentPosition 안내대로 하면됨
//유저의 현재 위치를 알 수 있음 끝
