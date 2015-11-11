var catPhotos = [];  //create array for cat photos

var photo1 = document.createElement('img');
var photo2 = document.createElement('img');

var temp1 = document.getElementById('temp1');
var temp2 = document.getElementById('temp2');

var tracker = {
  img1: 0,
  img2: 0
}

// PHOTO CONTSRUCTOR
function CatPhoto (name, path, votes, highlight) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.highlight;
  catPhotos.push(this);
}

// Random Number Generator
function getRandom () {
  return Math.floor(Math.random() * (catPhotos.length));
}

var wineCat = new CatPhoto ('winecat', 'img/winecat.png');
var starWars = new CatPhoto ('starwars', 'img/starwarscat.png');
var r2d2 = new CatPhoto ('r2d2', 'img/r2d2.gif');
var spaceMushroom = new CatPhoto ('spacemushroom', 'img/spacecatmushrooms.png');
var laserCat = new CatPhoto ('lasercat', 'img/laser-cat.png');
var grumpy = new CatPhoto ('grumpy', 'img/grumpy-deathstar.png');
var friskie = new CatPhoto ('friskie', 'img/friskie-cat.gif');
var cupcake = new CatPhoto ('cupcake', 'img/cupcake.gif');
var bunny = new CatPhoto ('bunny', 'img/bunny-cat.gif');
var kfc = new CatPhoto ('kfc', 'img/kfc-cat.png');
var nyan = new CatPhoto ('nyan', 'img/nyan.png');
var starbucks = new CatPhoto ('starbucks', 'img/starbucks.gif');


// Display photos & check for duplicates
displayCatPhotos = function() {
  tracker.img1 = getRandom();
  console.log(tracker.img1);
  tracker.img2 = getRandom();
  console.log(catPhotos);
  photo1.src = catPhotos[tracker.img1].path;

 if (tracker.img1 === tracker.img2) {
    tracker.img2 = getRandom();
    console.log('duplicate found');
  }
  photo2.src = catPhotos[tracker.img2].path;

  console.log(photo1);
  photo1.setAttribute('width', '300');

  photo2.setAttribute('width', '300');

  temp1.appendChild(photo1);
  temp2.appendChild(photo2);
}

displayCatPhotos();

temp1.addEventListener('click', function(){
 // console.log('temp1 was clicked');
  displayCatPhotos();
});

temp2.addEventListener('click', function(){
//  console.log('temp2 was clicked');
  displayCatPhotos();
});


// Attempt To Create Vote Counter Here
var selectionOne = function() {
  var selection = catPhotos[tracker.img1];
  selection.votes++;
  console.log(selection.name + 'has' + selection.votes + 'votes');
  displayCatPhotos();
}
var selectionTwo = function() {
  var selection = catPhotos[tracker.img2];
  selection.votes++;
  console.log(selection.name + 'has' + selection.votes + 'votes');
  displayCatPhotos();
}
temp1.addEventListener('click', selectionOne);
temp2.addEventListener('click', selectionTwo);

// tracker.method = function() {
//   does this thing
//   does this other little thing
// };
// tracker.method 2 = function() {
//   does something else
// };


// tracker.displayCatPhotos();

//CHART JS
    var taValues = [1, 1, 2, 2];

var catScore = [
  {
    value: taValues[0],
    label: 'Darcy',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: taValues[1],
    label: 'Emily',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: taValues[2],
    label: 'Jonathan',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : taValues[3],
    label: 'Kevin',
    color: '#6AE128',
    highlight: '#6AE199'
  }
];

var context = document.getElementById('space-cats').getContext('2d');

var skillsChart = new Chart(context).Doughnut(catScore, {
    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : false,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    scaleShowLabelBackdrop : true
});
