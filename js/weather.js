const APIKEY = "bf334e22a5beebd92f10cc2f86bc6c41";


//api 주소 api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function geoOk(posision){
    const lat = posision.coords.latitude;
    const lon = posision.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const placeName = document.querySelector("#weatherForm div:first-child");
        const weather = document.querySelector("#weatherForm div:last-child");

        placeName.innerText = `위치 : ${data.name}`;
        weather.innerText = `날씨 : ${data.weather[0].main} 온도 : ${data.main.temp}`;

    }))
}

function geoError(){
    console.log("I can't read your location!")
}







const userLocation = navigator.geolocation.getCurrentPosition(geoOk,geoError);