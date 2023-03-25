
// Global Variables
let $weatherDiv = $('#weather')
let $currDiv = $('#currCast')
let $currCity = $('#currCity')
let currCast;
let fiveCast = [];


// EVENT LISTENERS
window.addEventListener ('load', (event) => {
    event.preventDefault();
    let markers = document.querySelectorAll(".mapboxgl-marker")
    markers.forEach(thing => {
        thing.remove()
    });
    let start = 'BANDERA, TX'
    $currCity.html(start);
    fiveCast = []
    currCast = [];
    currWeather(start);
    getWeather(start);
    getMapData(start);
})

document.getElementById('searchWeather').addEventListener('keypress', e => {
    let markers = document.querySelectorAll(".mapboxgl-marker")
    markers.forEach(thing => {
        thing.remove()
    });
    const address = document.getElementById("searchWeather").value.toUpperCase();
    if (e.key === 'Enter') {
        $currCity.html(address);
        fiveCast = [];
        currCast = [];
        currWeather(address);
        getWeather(address);
        getMapData(address);
    }
})

map.on('dblclick', (e) => {
    let markers = document.querySelectorAll(".mapboxgl-marker")
    markers.forEach(thing => {
        thing.remove()
    });
    let newMark = e.lngLat;
    fiveCast = [];
    currCast = [];
    reverseGeocode(newMark, MAPBOX_API_TOKEN).then(namedCity => {
        $currCity.html(namedCity);
        currWeather(namedCity);
        getWeather(namedCity);
        getMapData(namedCity)
    })
});

map.on('mouseup', (e) => {
    let markers = document.querySelectorAll(".mapboxgl-marker")
    markers.forEach(thing => {
        thing.remove()
    });
    let newMark = e.lngLat;
    fiveCast = [];
    currCast = [];
    reverseGeocode(newMark, MAPBOX_API_TOKEN).then(namedCity => {
        $currCity.html(namedCity);
        currWeather(namedCity);
        getWeather(namedCity);
        geocode(namedCity, MAPBOX_API_TOKEN).then(coords => {
            const newMarker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat(coords)
                .addTo(map);
            const newPopup = new mapboxgl.Popup()
                .setHTML(`<p class="pin">${namedCity}</p>`);
            newMarker.setPopup(newPopup);
        })
    })
});

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

const assignBack = (cover) => {
    let bgImage = '';

    if ((100 - cover) >= 70) {
        bgImage += 'images/weather_map_imgs/sunny-bg.jpeg';
    } else if ((100 - cover) < 70) {
        bgImage += 'images/weather_map_imgs/part-cloudy-bg.jpeg';
    } else if ((100 - cover) < 30) {
        bgImage += 'images/weather_map_imgs/cloudy-bg.webp';
    }
    return bgImage

}

// Create HTML String for Browser
const renderCurrHTML = (currData) => {
    console.log(currData)
    let html = `<div class="currCard column justify-center align-center" style="background-image: url('/codeup-web-exercises/${assignBack(currData.clouds.all)}')">`;
        html +=    ` <span class="date">Current on: ${namedDayFromDay(currData.dt)}, ${formatTime(currData.dt)}</span>`;
        html +=    ` <div id="curr-render-data" class="row align-bottom">`;
        html +=       ` <p class="column"><span class="bold">Description:</span> ${currData.weather[0].description}`;
        html +=       ` <p class="column"><span class="bold">Humidity:</span> ${currData.main.humidity} %`;
        html +=       ` <p class="column"><span class="bold">Wind:</span> ${currData.wind.speed} mph ${windCardinalDirection(currData.wind.deg)}`;
        html +=       ` <p class="column"><span class="bold">Pressure:</span> ${currData.main.pressure} hPa`;
        html +=       ` <div class="column weather-icon align-center">`;
        html +=           ` <img src="images/weather_map_imgs/sunny.svg" alt="poiadhf" height="60px" width="60px">`;
        html +=       `</div>`;
        html +=       ` <span class="column temp ">${ parseInt(currData.main.temp)} °F</span>`;
        html +=   `</div>`;
        html += `</div>`;
    return html;
}

const renderWeatherHTML = (wetData) => {
    let html = `<div class="weatherCard column justify-center align-center" style="background-image: url('/codeup-web-exercises/${assignBack(wetData.clouds.all)}')">`;
        html +=     `<span class="date" >${namedDayFromDay(wetData.dt)}, ${formatTime(wetData.dt)}</span>`;
        html +=     `<div id="render-data" class="row">`;
        html +=         `<div class="info column justify-space-between align-left">`;
        html +=             `<p> <span class="bold">Description:</span> ${wetData.weather[0].description}</p>`;
        html +=             `<p> <span class="bold">Humidity:</span> ${wetData.main.humidity} %</p>`;
        html +=             `<p> <span class="bold">Wind:</span> ${wetData.wind.speed} mph ${windCardinalDirection(wetData.wind.deg)}</p>`;
        html +=             `<p> <span class="bold">Pressure:</span> ${wetData.main.pressure} hPa</p>`;
        html +=         `</div>`;
        html +=         `<div class="headWeather column justify-space-between align-center">`;
        html +=             `<div class="weather-icon">`;
        html +=                 `<img src="${assignCover(wetData.clouds.all)}" alt="poiadhf" height="60px" width="60px">`;
        html +=             `</div>`;
        html +=         `<span class="temp">${ parseInt(wetData.main.temp)}°F</span>`;
        html +=         `</div>`;
        html +=     `</div>`;
        html += `</div>`;
    return html;
}

// Outside HTML Concatonator
function renderWeather(dataSet) {
    let html = '';
        for(let i = 0; i < dataSet.length; i++) {
            console.log(dataSet)
            html += renderWeatherHTML(dataSet[i]);
        }
    return html;
}

function renderCurrWeather(currData) {
    let html = '';
        html += renderCurrHTML(currData);
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
                if (index % 8 === 0 && index !== 0) {
                    fiveCast.push(forecast)
                }
            })
            $weatherDiv.html(renderWeather(fiveCast));
        })
    })
}

// Render Current Weather

const currWeather = (currHome) => {
    geocode(currHome, MAPBOX_API_TOKEN).then(currGeo => {
        const currLong = currGeo[0];
        const currLat = currGeo[1];
        $.get("https://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            lat: currLat,
            lon: currLong,
            units: 'imperial'
        }).done(data => {
            currCast = data
            $currDiv.html(renderCurrWeather(currCast));
        })
    })
}


// Render MapBox Data
const getMapData = (mapCity) => {
    geocode(mapCity, MAPBOX_API_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
        const newPopup = new mapboxgl.Popup()
            .setHTML(`<p class="pin">${mapCity}</p>`);
        newMarker.setPopup(newPopup);
    })
}




