/************************************************
// JMaas Bus-Mall
// 201 Week 3 Tuesday
************************************************/


/*
=========
variables
=========
*/

//*** DOM - variables:

var imageOne = document.getElementById('imageSlotOne');
var imageTwo = document.getElementById('imageSlotTwo');
var imageThree = document.getElementById('imageSlotThree');

var displayButton = document.getElementById('myButton');
var voteMoreButton = document.getElementById('voteMore');

var chart = document.getElementById('chart');

var paraOne = document.getElementById('paraOne');
var paraTwo = document.getElementById('paraTwo');
var paraThree = document.getElementById('paraThree');


//*** Array to store image-Objects:

var catArray = [];      // ALL IMAGE-OBJECTS LIVE HERE !!!

//*** other global variables:

var totalClicks = 0;
var processClick = true;

/*=======================================
   constructor for new image objects:
=======================================*/

function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
}

/*
=======================================================
image-Objects initiated:  (consructor in functions.js)
=======================================================
*/

catArray[0] = new makeImageObj("bolete_01", "images/bolete_01.jpg");
catArray[1] = new makeImageObj("bolete_02", "images/bolete_02.jpg");
catArray[2] = new makeImageObj("chantarelle_01", "images/chantarelle_01.jpg");
catArray[3] = new makeImageObj("chantarelle_02", "images/chantarelle_02.jpg");
catArray[4] = new makeImageObj("chantarelle_03", "images/chantarelle_03.jpg");
catArray[5] = new makeImageObj("fly_01", "images/fly_01.jpg");
catArray[6] = new makeImageObj("fly_02", "images/fly_02.jpg");
catArray[7] = new makeImageObj("hedgehog_01", "images/hedgehog_01.jpg");
catArray[8] = new makeImageObj("hedgehog_02", "images/hedgehog_02.jpg");
catArray[9] = new makeImageObj("lobster_01", "images/lobster_01.jpg");
catArray[10] = new makeImageObj("lobster_02", "images/lobster_02.jpg");
catArray[11] = new makeImageObj("matsutake_01", "images/matsutake_01.jpg");
catArray[12] = new makeImageObj("matsutake_02", "images/matsutake_02.jpg");
catArray[13] = new makeImageObj("morell_01", "images/morell_01.jpg");
catArray[14] = new makeImageObj("morell_02", "images/morell_02.jpg");
catArray[15] = new makeImageObj("oyster_01", "images/oyster_01.jpg");
catArray[16] = new makeImageObj("oyster_02", "images/oyster_02.jpg");
catArray[17] = new makeImageObj("porcini_01", "images/porcini_01.jpg");
catArray[18] = new makeImageObj("shitake_01", "images/shitake_01.jpg");



/***
Initializing/populating the three Image-slots:
*/
showRandomImg(imageOne);
showRandomImg(imageTwo);
showRandomImg(imageThree);


/*
=========
functions
=========
*/

//*** Functions to count the number of clicks on image-slots:


imageOne.onclick = function() {
  var srcValue = imageOne.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
    }
  }
}


imageTwo.onclick = function() {
  var srcValue = imageTwo.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
    }
  }
}


imageThree.onclick = function() {
  var srcValue = imageThree.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
    }
  }
}

//*** Functionj triggered by the Event-Listener:

function imageClicked() {
  if (processClick) {
    totalClicks++;

    //for each addition image add in code to call the image here:
    showRandomImg(imageOne);
    showRandomImg(imageTwo);
    showRandomImg(imageThree);

    if (totalClicks >= 16) {

      //code to display hidden button
      displayButton.setAttribute('style','visibility:visible');
      voteMoreButton.setAttribute('style','visibility:visible');
      processClick = false;

      // TODO Add code here to update image-slots with a final-image:
    }
  }
}

//*** Random number generator:

function randomImageIndex() {
  var result = Math.floor(Math.random() * (catArray.length));
  return result;
}

//*** Function to display a new random image from catArray, for one Image-slot:

function showRandomImg(image) {             // image argument is one of three variables linked to DOM id-tags in html
  var n = randomImageIndex();
  image.setAttribute("src", catArray[n].path);
  catArray[n].nShow++;
}


//*** Function to display results from imagge-Objects in html:

function showResults() {

  chart.textContent = "the total number of clicks is " + totalClicks;

  paraOne.textContent = "the number of times <<< bolete_01 >>> was clicked on: " + catArray[0].nClicks;
  paraTwo.textContent = "the number of times <<< chantarelle_03 >>> was clicked on: " + catArray[4].nClicks;
  paraThree.textContent = "the number of times <<< morell_01 >>> was clicked on: " + catArray[13].nClicks;
}


/*
===============
event listeners
===============
*/

imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);
