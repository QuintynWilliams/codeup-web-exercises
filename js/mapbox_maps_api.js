document.getElementById('zoomSubmit').addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.getElementById("zoom").value);
})
document.getElementById('setMarkerButton').addEventListener('click', event => {
    event.preventDefault();
    const address = document.getElementById("setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
        const newPopup = new mapboxgl.Popup()
            .setHTML(`<p class="pin">${address}</p>`);
        newMarker.setPopup(newPopup);
    })
})

document.getElementById('clearMap').addEventListener('click', event => {
    event.preventDefault();
    let markers = document.querySelectorAll(".mapboxgl-marker")
    markers.forEach(thing => {
        thing.remove()
    })
})