const API_KEY = "434d3efa30a5b0f81754a10ba8df56ce";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    
    fetch(url).then(response => response.json()).then(data => {
        const weatherF = document.querySelector("#weather p");
        const weatherL = document.querySelector("#weather h3");
        
        const country = data.sys.country;
        const city = data.name;
        const main = data.weather[0].main;
        const temp = data.main.temp;
        
        weatherF.innerText = `${country} ${city}`;
        weatherL.innerText = `${main} ${temp}°C`;
    });
}
function onGeoError() {
    alert("Can't find U. Where R U??");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);