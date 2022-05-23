function edCity() {
  let count = 1;
  let x = document.getElementsByClassName("city");

  if (count==1) {
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    count=0;
  }
  else {
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "show";
    }
    count=1;
  }

}

function replaceText() {
  document.getElementById("rpWhoAmI").innerHTML = "I'm JRDN!";
}
