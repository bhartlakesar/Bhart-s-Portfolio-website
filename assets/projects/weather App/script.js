const searchInput = document.querySelector('.searchCity input')
const searchBtn = document.querySelector('.searchCity button')

const jagah = document.querySelector('.location span')
const weatherIcon = document.querySelector('.weatherIcon')
const temperature = document.querySelector('.temperature span')
const condition = document.querySelector('.condition')
const humidity = document.querySelector('.humidity span')
const wind = document.querySelector('.wind span')



searchBtn.addEventListener('click', async () => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchInput.value}&count=1&language=en&format=json`;

    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results[0].name)
    console.log(data.results[0].latitude)
    console.log(data.results[0].longitude)


    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`

    const weatherResponse = await fetch(weatherUrl)
    const weatherData = await weatherResponse.json()

    console.log(weatherData)


    const temperatureValue = `${weatherData.current.temperature_2m} °C`
    const humidityValue = weatherData.current.relative_humidity_2m
    const weatherCode = weatherData.current.weather_code
    const windValue = `${weatherData.current.wind_speed_10m} km/h`

    jagah.innerText = data.results[0].name
    temperature.innerText = temperatureValue
    humidity.innerText = humidityValue
    wind.innerText = windValue
    weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    if (weatherCode === 0) {
        condition.innerText = "Clear Sky";
        weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
    else if (weatherCode === 1) {
        condition.innerText = "Mainly Clear"
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
    }
    else if (weatherCode === 2) {
        condition.innerText = "Partly Cloudy"
        weatherIcon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
    else if (weatherCode === 3) {
        condition.innerText = "Overcast"
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    }
    else if (weatherCode === 95) {
        condition.innerText = "Thunderstorm"
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`;
    }
    else if (weatherCode === 45 || weatherCode === 48) {
        condition.innerText = "Fog"
        weatherIcon.innerHTML = `<i class="fa-solid fa-smog"></i>`;
    }
    else if (weatherCode >= 51 && weatherCode <= 57) {
        condition.innerText = "Drizzle"
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
    }
    else if (weatherCode >= 61 && weatherCode <= 67) {
        condition.innerText = "Rain"
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
    }
    else if (weatherCode >= 71 && weatherCode <= 77) {
        condition.innerText = "Snow"
        weatherIcon.innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
    }
    else if (weatherCode >= 80 && weatherCode <= 82) {
        condition.innerText = "Rain Showers"
        weatherIcon.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
    }

})
