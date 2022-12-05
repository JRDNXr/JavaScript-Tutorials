
// This function runs when the mouse pointer is inside the box.
function mouseIn() {
    document.getElementById("mouseBox").innerHTML = "The mouse pointer is inside the yellow box. &#x2705;";

    document.getElementById("mouseBox").style.color = "green";
}

// This function runs when the mouse pointer leaves the box.
function mouseOut() {
    document.getElementById("mouseBox").innerHTML = "The mouse pointer IS NOT in the yellow box. &#x274C;";

    document.getElementById("mouseBox").style.color = "red";
}

