(function() {
    "use strict";

    let circle = {
        radius: 3,
        getArea: function (rad) {
            return Math.PI * Math.pow(rad, 2);
        },
        logInfo: function (doRounding) {
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
            if (doRounding === true) {
                return console.log(Math.round(this.getArea(this.radius)))
            } else {
                return console.log(this.getArea(this.radius))
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    let circle2 = {
        radius: 5,
        getArea: function (rad) {
            return Math.PI * Math.pow(rad, 2);
        },
        logInfo: function (doRounding) {
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
            if (doRounding === true) {
                return console.log(Math.round(this.getArea(this.radius)))
            } else {
                return console.log(this.getArea(this.radius))
            }
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle2.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle2.logInfo(true);
})();