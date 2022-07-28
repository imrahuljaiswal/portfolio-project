function change(i) {
  var doc = document.getElementById("background");
  var color = ["black", "blue", "brown", "green"];
  for (i = 0; i < color.length; i++) {
    doc.style.backgroundColor = color[i];
    alert("my color is " + color[i]);
    /*if (i>=color.length){i=0;}*/
  }
}
setInterval(function changebackground() {
  change(0);
}, 1000);
