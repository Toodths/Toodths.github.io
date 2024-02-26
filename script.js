
fetch('https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=28FE417B6906C45F07E57AE3177BCFC1&skip_unvetted_apps=false&steamid=76561198112693639&format=json&include_played_free_games=1include_appinfo')
.then(data => data.json())
.then(success => console.log(success));

function updateVol(){
  var slider = document.getElementById("myRange");
  for (let i = 1; i < 16; i++) {
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

function boarderChange(element){
  if (!element.paused) { element.style.boxShadow = "0px 0px 40px #9B4F96";}
  else  { element.style.boxShadow = "0px 0px 3px #9B4F96"; }
}