var catChoice = [];  //create array for cat photos, OMG Cat Photos!
// PHOTO CONTSRUCTOR
function CatPhoto (name, path, votes, highlight) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.highlight;
  catChoice.push(this);
}
// Random Number Generator
function getRandom () {
  return Math.floor(Math.random() * catChoice.length);
}

var tracker = {
  img1: 0,
  img2: 0
}
var photo1 = document.createElement('img');
var photo2 = document.createElement('img');
var temp1 = document.getElementById('temp1');
var temp2 = document.getElementById('temp2');

// Display photos & check for duplicates
displayCatPhotos = function() {
  tracker.img1 = getRandom();
  tracker.img2 = getRandom();
  photo1.src = catChoice[tracker.img1].path;

 if (tracker.img1 === tracker.img2) {
    tracker.img2 = getRandom();
  }
  photo2.src = catChoice[tracker.img2].path;
  photo1.setAttribute('width', '300');
  photo2.setAttribute('width', '300');
  temp1.appendChild(photo1);
  temp2.appendChild(photo2);
}

//  displayCatPhotos();

//  Vote Counter Here
var selectionOne = function() {
  var selection = catChoice[tracker.img1];
  selection.votes++;
  data.datasets[0].data[tracker.img1] += 1;
  votesChart.datasets[0].bars[tracker.img1].value += 1;
  localStorage.storeData = JSON.stringify(data);
  localStorage.catChoice = JSON.stringify(catChoice);
  console.log(selection.name + 'has' + selection.votes + 'votes');

  //this adds the vote again box after voting
  var voteAgain = document.createElement('button');
  voteAgain.setAttribute('id', 'vote');
  voteAgain.innerHTML = ("Click Here To Vote Again!");
  document.body.appendChild(voteAgain);
  function hideButton() {
    //document.getElementById("vote").style.display = "";

}
  votesChart.update();
  displayCatPhotos();
}
var selectionTwo = function() {
  var selection = catChoice[tracker.img2];
  selection.votes++;
  data.datasets[0].data[tracker.img2] += 1;
  votesChart.update();
  votesChart.datasets[0].bars[tracker.img2].value += 1;
  localStorage.storeData = JSON.stringify(data);
  localStorage.catChoice = JSON.stringify(catChoice);
  console.log(selection.name + 'has' + selection.votes + 'votes');

  //this adds the vote again box after voting
  var voteAgain = document.createElement('button');
  voteAgain.setAttribute('id', 'vote');
  voteAgain.innerHTML = ("Click Here To Vote Again!");
  document.body.appendChild(voteAgain);
  function hideButton() {
    //document.getElementById("vote").style.display = "";
}

  //eventListener here to highlight user photo choice?
  displayCatPhotos();
}

  temp1.addEventListener('click', selectionOne);
  temp2.addEventListener('click', selectionTwo);

var context = document.getElementById('vote-chart').getContext('2d');

var chartOptions = {
  scaleBeginAtZero : true,
  scaleShowGridLines : true,
  scaleGridLineColor: "white",
  scaleGridLineWidth : 1,
  scaleShowHorizontalLines : true,
  scaleShowVerticalLines : true,
  barShowStroke : true,
  barStrokeWidth : 2,
  barValueSpacing : 5,
  barDatasetSpacing : 1,
  lengendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

// Chart Goes Here & Local Storage
// moved photo variables here for local storage to work
var data;
var datasets;

function checkLocal() {
  if (localStorage.storeData && localStorage.catChoice) {
    data = JSON.parse(localStorage.storeData);
    catChoice = JSON.parse(localStorage.catChoice);
    } else {
        data = {
          labels: ['winecat', 'starwars', 'r2d2', 'spacemushroom', 'marsrovercat', 'jetpackcat', 'friskie', 'cupcake', 'bunny', 'cheezburger', 'nyan', 'starbucks', 'nebula', 'pizzacat', 'shootlasercat', 'wavingcat'],
        datasets: [
          {
        label: "Votes Cast",
        fillColor: "#8D9EA8",
        strokeColor: "#34495e",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "#7f8c8d",
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          }
        ]
        }
    var wineCat = new CatPhoto ('winecat', 'img/winecat.gif');
    var starWars = new CatPhoto ('starwars', 'img/starwarscat.png');
    var r2d2 = new CatPhoto ('r2d2', 'img/r2d2.gif');
    var spaceMushroom = new CatPhoto ('spacemushroom', 'img/spacecatmushrooms.png');
    var marsrovercat = new CatPhoto ('marsrovercat', 'img/marsrovercat.gif');
    var jetpackcat = new CatPhoto ('jetpackcat', 'img/jetpackcat.gif');
    var friskie = new CatPhoto ('friskie', 'img/friskie-cat.gif');
    var cupcake = new CatPhoto ('cupcake', 'img/cupcake.gif');
    var bunny = new CatPhoto ('bunny', 'img/bunny-cat.gif');
    var cheezburger = new CatPhoto ('cheezburger', 'img/cheezburger.gif');
    var nyan = new CatPhoto ('nyan', 'img/nyan.png');
    var starbucks = new CatPhoto ('starbucks', 'img/starbucks.gif');
    var nebula = new CatPhoto ('nebula', 'img/nebulacat.gif');
    var pizzacat = new CatPhoto ('pizzacat', 'img/pizzacat.gif');
    var shootlasercat = new CatPhoto ('shootlasercat', 'img/shootlasercat.gif');
    var wavingcat = new CatPhoto ('wavingcat', 'img/wavingcat.gif');
  }
}
checkLocal();
var votesChart = new Chart(context).Bar(data, chartOptions);
displayCatPhotos();
