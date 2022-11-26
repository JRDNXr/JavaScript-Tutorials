// Changes the font size
document.getElementById("changeThisLine").style.fontSize = "25px";

// Makes the font bold
document.getElementById("styleUsingJS").style.fontWeight = "bold";

// Makes the text italics
document.getElementById("styleUsingJS").style.fontStyle = "italic";

// Underlines the text
document.getElementById("styleUsingJS").style.textDecoration = "underline";

// Changes the text colour to white
document.getElementById("styleUsingJS").style.color = "white";

// Changes the background text colour to orange
document.getElementById("styleUsingJS").style.backgroundColor = "orange";

// Changes the display of the text (hides)
function hideText() {
    document.getElementById("hideMe").style.display = "none";
}

// Changes the display of the text (reveals)
function showText() {
    document.getElementById("showMe").style.display = "block";
}