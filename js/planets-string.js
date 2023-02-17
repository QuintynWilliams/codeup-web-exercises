(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split("|");

    /*
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsArray);

    /*
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    let planetsHtml = planetsArray.join("<br>")
    console.log(planetsHtml)
     /* BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsHtmlList = planetsArray.join("</li><li>")
    console.log(`<ul><li>` + planetsHtmlList + `</li></ul>`)
})();