var catPhotos = [];  //create array for cat photos

var photo1 = document.createElement('img');
var photo2 = document.createElement('img');

var temp =document.getElementById('temp');

// PHOTO CONTSRUCTOR
function CatPhoto (name, path) {
  this.name = name;
  this.path = path;
  this.votes = 0;
  this.highlight;
  catPhotos.push(this);
}

// Random Number Generator
function getRandom () {
  return Math.floor((Math.random() * 12) + 1);
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


// check the photos are not duplicates
//newRandom = function(cat1) {
  //do {
    //var cat2 = getRandom();
//} while (cat1 === cat2)
//  return cat2;
//}

//votes of object get incremented
//vote = function (cat) {
//  photo1.parentNode.removeChild(photo1);
 // photo2.parentNode.removeChild(photo2);

//  displayCatPhotos();
//}

// create img elements, event listeners
displayCatPhotos = function() {
  // var cat1 = getRandom();
//  console.log(cat1);
  // var cat2 = newRandom(cat1);
  //console.log(cat2);


  photo1.src = catPhotos[getRandom()].path;
  console.log(photo1);
  photo1.setAttribute('width', '300');

  photo2.src = catPhotos[getRandom()].path;
  photo2.setAttribute('width', '300');

  temp.appendChild(photo1);
  temp.appendChild(photo2);
}

//photo1.addEventListener('click', function() {
 // vote(cat1)
//});

//photo2.addEventListener('click', function() {
// vote(cat2)
//});

displayCatPhotos();




var taValues = [34 ,67, 44, 93];

var kevin = [
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

var context = document.getElementById('ta-popularity').getContext('2d');

var skillsChart = new Chart(context).Doughnut(kevin, {
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





  //call getRandom for two random numbers
  //Use those random nums to access the array and get a photo
  //User the .src attrib to assign a path to each of the images



