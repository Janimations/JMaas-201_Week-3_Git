/************************************************
// JMaas Bus-Mall
// 201 Week 3 Tuesday
************************************************/


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

/***
functions to count the number of clicks on image-slots:
*/

imageOne.onclick = function() {
  var srcValue = imageOne.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
      console.log(catArray[i].path + " #$% " +catArray[i].nClicks);
    }
  }
}


imageTwo.onclick = function() {
  var srcValue = imageTwo.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
      console.log(catArray[i].path + " #$% " +catArray[i].nClicks);
    }
  }
}


imageThree.onclick = function() {
  var srcValue = imageThree.getAttribute('src');

  for (var i = 0; i < catArray.length; i++) {
    if (srcValue == catArray[i].path) {
      catArray[i].nClicks++;
      console.log(catArray[i].path + " #$% " +catArray[i].nClicks);
    }
  }
}

//***
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
    }
  }
}


//*** constructor new image objects:

function makeImageObj(name, path) {
  this.name = name;
  this.path = path;
  this.nShow = 0;
  this.nClicks = 0;
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
  console.log(totalClicks + " this is working yes?");

  chart.textContent = "the total number of clicks is " + totalClicks;

  paraOne.textContent = "the number of times cat in bag was clicked on " + catArray[0].nClicks;
  paraTwo.textContent = "the number of times catOnBeach has been clicked is " + catArray[1].nClicks;
  paraThree.textContent = "the number of times cat on train has been clicked is " + catArray[2].nClicks;
}


/*
===============
event listeners
===============
*/

/*++++++
addin eventListener per imageNUMBER variables set at the top of the js file
*/
imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);
