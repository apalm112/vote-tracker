var catPhotos = [];

// PHOTO CONTSRUCTOR
function CatPhoto (name, src) {
  this.name = name;
  this.src = src;
  this.votes = 0;
  this.highlight;
}

// Random Number Generator
function getRandom () {
  return Math.floor((Math.random() * 12) + 1);
}

function getRandImg () {
  random1 = getRandom();
  random2 = getRandom();
  if (random1 == random2) {
    random2 = getRandom();
    console.log(random1);
    console.log(random2);
  } else {
      console.log(random1);
      console.log(random2);
  }
}
  var randomPhoto1 = (catPhotos[random1]);
  document.getElementByID('img1').src = randomPhoto1['src'];
    var title1 = document.getElementById("photoName1");
  title1.appendChild(document.createTextNode(randomPhoto1["label"]));
  var movie1 = document.getElementById("movie1");
  movie1.appendChild(document.createTextNode(randomPhoto1["movie"]));
  // console.log(title1);
  // console.log(movie1);
//input random photo2
  var randomPhoto2 = (evilCharacters[random2]);
  document.getElementById("photoGen2").src = randomPhoto2["src"];
  var title2 = document.getElementById("photoName2");
  title2.appendChild(document.createTextNode(randomPhoto2["label"]));
  var movie2 = document.getElementById("movie2");
  movie2.appendChild(document.createTextNode(randomPhoto2["movie"]));
  // console.log(title2);
  // console.log(movie2);

//calling photo generator function on load
randomPhoto1();


  //call getRandom for two random numbers
  //Use those random nums to access the array and get a photo
  //User the .src attrib to assign a path to each of the images


var badCat = new CatPhoto('badCat', 'img/bad-cat.jpg', 0);
var friskieCat = new CatPhoto('friskieCat','img/friskie-cat.gif', 0);
var grumpyDeathstar = new CatPhoto('grumpyDeathstar', 'grumpy-deathstar.jpg', 0);
var houston = new CatPhoto('houston', 'img/houston.jpg', 0);

var random1, random2;







