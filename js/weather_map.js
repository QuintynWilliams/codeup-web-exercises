

// FUNCTIONS

// Global Variables
let $weatherDiv = $('#weather')
let $currCity = $('#currCity')
let fiveCast = [];


window.addEventListener ('load', (event) => {
    event.preventDefault();
    let start = 'SAN ANTONIO, TX'
    $currCity.html(start);
    fiveCast = [];
    getWeather(start);
    getMapData(start);
})

document.getElementById('searchWeather').addEventListener('keypress', e => {
    const address = document.getElementById("searchWeather").value.toUpperCase();
    $currCity.html(address);
    if (e.key === 'Enter') {
        fiveCast = [];
        getWeather(address);
        getMapData(address);
    }
})


// Render MapBox Data
const getMapData = (mapCity) => {
    geocode(mapCity, MAPBOX_API_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
        const newPopup = new mapboxgl.Popup()
            .setHTML(`<p class="pin">${mapCity}</p>`);
        newMarker.setPopup(newPopup);
    })

}

// Render Cloud Cover Icon
const assignCover = (cover) => {
    let imgCloud = '';

    if ((100 - cover) >= 70) {
        imgCloud += 'images/weather_map_imgs/sunny.svg';
    } else if ((100 - cover) < 70) {
        imgCloud += 'images/weather_map_imgs/part-cloudy.svg';
    } else if ((100 - cover) < 30) {
        imgCloud += 'images/weather_map_imgs/cloudy.svg';
    }

    return imgCloud
}

// Create HTML String for Browser
const renderWeatherHTML = (wetData) => {

    let html = `<div class="weatherCard column shrink justify-bottom align-center">`;
        html +=     `<span class="date" >${namedDayFromDay(wetData.dt)}, ${formatTime(wetData.dt)}</span>`;
        html +=     `<div id="render-data" class="row justify-space-between">`;
        html +=         `<div class="headWeather column justify-space-between align-center">`;
        html +=         `<div class="weather-icon">`;
        html +=             `<img src="${assignCover(wetData.clouds.all)}" alt="poiadhf" height="60px" width="60px">`;
        html +=         `</div>`;
        html +=         `<span class="temp">${ parseInt(wetData.main.temp)}°F</span>`;
        html +=         `</div>`;
        html +=         `<div class="info column justify-bottom align-left">`;
        html +=             `<p> <span class="bold">Description:</span> ${wetData.weather[0].description}</p>`;
        html +=             `<p> <span class="bold">Humidity:</span> ${wetData.main.humidity} %</p>`;
        html +=             `<p> <span class="bold">Wind:</span> ${wetData.wind.speed} mph ${windCardinalDirection(wetData.wind.deg)}</p>`;
        html +=             `<p> <span class="bold">Pressure:</span> ${wetData.main.pressure} hPa</p>`;
        html +=         `</div>`;
        html +=     `</div>`;
        html += `</div>`;
    return html;
}

// Outside HTML Concatonator
function renderWeather(array) {
    let html = '';
    for(let i = 0; i < fiveCast.length; i++) {
        html += renderWeatherHTML(array[i]);
    }
    return html;
}

// Render Weather Data
const getWeather = (cityName) => {
    geocode(cityName, MAPBOX_API_TOKEN).then(geoCode => {
        const cityLong = geoCode[0];
        const cityLat = geoCode[1];
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
        lat: cityLat,
        lon: cityLong,
            units: 'imperial'
        }).done(data => {
            data.list.forEach((forecast, index) => {
                if (index % 8 === 0) {
                    fiveCast.push(forecast)
                }
            })
            $weatherDiv.html(renderWeather(fiveCast));
        })
    })
}


