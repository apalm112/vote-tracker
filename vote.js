var catPhotos = [];  //create array for cat photos

var photo1 = document.createElement('img');
var photo2 = document.createElement('img');

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

// check the photos are not duplicates
newRandom = function(cat1) {
  do {
    var cat2 = getRandom();
} while (cat1 === cat2)
  return cat2;
}

//votes of object get incremented
vote = function (cat) {
  photo1.parentNode.removeChild(photo1);
  photo2.parentNode.removeChild(photo2);

  displayCatPhotos();
}

// create img elements, event listeners
displayCatPhotos = function() {
  var cat1 = getRandom();
  var cat2 = newRandom(cat1);

  photo1 = document.createElement('img');
  photo2 = document.createElement('img');

  photo1.setAttribute('src', catPhotos[cat1].path);
  photo1.setAttribute('width', '300');

  photo2.setAttribute('src', catPhotos[cat2]);
  photo2.setAttribute('width', '300');

  temp.appendChild(photo1);
  temp.appendChild(photo2);
}

photo1.addEventListener('click', function() {
  vote(cat1)
});

photo2.addEventListener('click', function() {
  vote(cat2)
});

displayCatPhotos();



/*
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
    var photo1 = document.getElementById("photoName1");
  title1.appendChild(document.createTextNode(randomPhoto1["label"]));

  // console.log(title1);

//input random photo2
  var randomPhoto2 = (evilCharacters[random2]);
  document.getElementById("photoGen2").src = randomPhoto2["src"];
  var photo2 = document.getElementById("photoName2");
  title2.appendChild(document.createTextNode(randomPhoto2["label"]));

    // console.log(title2);

//calling photo generator function on load
randomPhoto1();
  */


  //call getRandom for two random numbers
  //Use those random nums to access the array and get a photo
  //User the .src attrib to assign a path to each of the images


var badCat = new CatPhoto('badCat', 'img/bad-cat.jpg', 0);
var friskieCat = new CatPhoto('friskieCat','img/friskie-cat.gif', 0);
var grumpyDeathstar = new CatPhoto('grumpyDeathstar', 'grumpy-deathstar.jpg', 0);
var houston = new CatPhoto('houston', 'img/houston.jpg', 0);

// var random1, random2;








