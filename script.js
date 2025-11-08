getSteamHours("76561198112693639", "hourCount");
fetch('https://corsproxy.io/?https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=505285CEE61A95B782C4310D8B9536C0&skip_unvetted_apps=false&steamid=76561198112693639&format=json&include_played_free_games=1include_appinfo')
.then(data => data.json())
.then(Response => {document.getElementById("gameCount").innerHTML = Response.response.game_count - 15;})


function updateVol(){
  var slider = document.getElementById("myRange");
  for (let i = 1; i < 20; i++) {
    var y = document.getElementById("v" + i.toString())
    y.volume = (slider.value / 100);
  }
}


function getSteamHours(steamid, elementid)
{
  if (steamid.length < 17) { document.getElementById(elementid).innerHTML = "????"; return; }
  var totalPlayTime = 0;
    fetch('https://corsproxy.io/?https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=505285CEE61A95B782C4310D8B9536C0&skip_unvetted_apps=false&steamid='+steamid+'&format=json&include_played_free_games=1include_appinfo')
    .then(data => data.json())
    .then(Response => {console.log(Response);
      for (let i = 0; i < Response.response.game_count; i++)
        {
          totalPlayTime += Response.response.games[i].playtime_forever;
        }
      document.getElementById(elementid).innerHTML = (totalPlayTime/60).toFixed(2);
      if ((totalPlayTime/60).toFixed(2) == 0) {document.getElementById(elementid).innerHTML = "????";}
    })
  }

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function scramble() {
    for (let i = 1; i < 16; i++) {
      var x = document.getElementById(i);
      var xrand = randomIntFromInterval(790, 1010);
      var yrand = randomIntFromInterval(530, 1385);
      x.style.left = xrand.toString() + "px";
      x.style.top = yrand.toString() + "px";
    }
}

function boarderChange(element){
  if (!element.paused) { element.style.boxShadow = "0px 0px 40px #9B4F96";}
  else  { element.style.boxShadow = "0px 0px 3px #9B4F96"; }
}
