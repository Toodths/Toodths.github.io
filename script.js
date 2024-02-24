

function updateVol(){
  var slider = document.getElementById("myRange");
  for (let i = 1; i < 5; i++) {
    var y = document.getElementById("v" + i.toString())
    y.volume = (slider.value / 100);
  }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function scramble() {
    for (let i = 1; i < 16; i++) {
      var x = document.getElementById(i);
      var xrand = randomIntFromInterval(675, 1000);
      var yrand = randomIntFromInterval(400, 880);
      x.style.left = xrand.toString() + "px";
      x.style.top = yrand.toString() + "px";
    }
}