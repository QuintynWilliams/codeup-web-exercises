

// FUNCTIONS

// Global Variables
let $weatherDiv = $('#weather')
let $currCity = $('#currCity')
let fiveCast = [];
let avgArray = [];


let highTemp = [];
let lowTemp = [];

const avgTemps = (dayObject) => {
    let day = namedDayFromDay(dayObject.dt);
    let temp = dayObject.main.temp;
    let hourObj = {
        daycode: day,
        daytemp: temp
    }
    avgArray.push(hourObj)
    // for(let i = 0; i < avgArray.length; i++) {
    //     let dayLow;
    //     let dayHigh;
    //     if (avgArray[i].daycode === avgArray[i++].daycode) {
    //         for(let j = 0; j < )
    //         let thoseTemps = avgArray.daytemp;
    //         dayHigh = Math.max(thoseTemps);
    //         dayLow = Math.min(thoseTemps);
    //     }
    //     highTemp.push(dayHigh);
    //     lowTemp.push(dayLow);
    // }
}


document.getElementById('searchWeatherButton').addEventListener('click', event => {
    event.preventDefault();
    const address = document.getElementById("searchWeather").value.toUpperCase();
    $currCity.html(address)
    fiveCast = [];
    getWeather(address);
    getMapData(address);
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
    let html = `<div class="weatherCard column align-center">`;
        html += `<span>${dateFromTimeStamp(wetData.dt)}</span>`;
        html += `<span>${namedDayFromDay(wetData.dt)}</span>`
        html += `<span>${wetData.main.temp}°F</span>`;
        html += `<div class="weather-icon">`;
        html += `<img src="${assignCover(wetData.clouds.all)}" alt="poiadhf" height="50px" width="50px">`;
        html += `</div>`;
        html += `<span>Description: ${wetData.weather[0].description}</span>`;
        html += `<span>Humidity: ${wetData.main.humidity} %</span>`;
        html += `<span>Wind: ${wetData.wind.speed} mph ${windCardinalDirection(wetData.wind.deg)}</span>`;
        html += `<span>Pressure: ${wetData.main.pressure} hPa</span>`;
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
                avgTemps(forecast)
                if (index % 8 === 0) {
                    fiveCast.push(forecast)
                }
            })
            $weatherDiv.html(renderWeather(fiveCast));
            console.log(avgArray)
        })
    })
}
