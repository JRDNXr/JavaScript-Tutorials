// This is the JavaScript code that allows us to embed text into the webpage using JavaScript rather than using HTML.
document.getElementById("JavaScript-embed-text").innerHTML = "This sentence is not embedded from HTML, but instead by JavaScript!";


// This is the JavaScript code that allows us to embed HTML code.
function changeText() {
    document.getElementById("changeThis").innerHTML = "The entire universe is constantly expanding!";
}

// This is the JavaScript code that allows us to embed a picture into the webpage using JavaScript rather than HTML.
document.getElementById("JavaScript-embed-picture").src = "/Users/JRDN/Documents/Coding/JavaScript/4.0_Learning/0.0_Pictures/Cartoon-Sun.png"


// This is the JavaScript code that allows us to make changes to an already embeded picture.
function changePicToCar() {
    document.getElementById("Car-Plane-Picture").src = "/Users/JRDN/Documents/Coding/JavaScript/4.0_Learning/0.0_Pictures/Cartoon-Car.png"
}

function changePicToPlane() {
    document.getElementById("Car-Plane-Picture").src = "/Users/JRDN/Documents/Coding/JavaScript/4.0_Learning/0.0_Pictures/Cartoon-Plane.png"
}