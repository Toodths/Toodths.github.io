function miau() {
    scramble()
  }
  
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function scramble() {
    for (let i = 1; i < 14; i++) {
      var x = document.getElementById(i);
      var xrand = randomIntFromInterval(0, 1800);
      var yrand = randomIntFromInterval(0, 900);
      x.style.left = xrand.toString() + "px";
      x.style.top = yrand.toString() + "px";
    }
}