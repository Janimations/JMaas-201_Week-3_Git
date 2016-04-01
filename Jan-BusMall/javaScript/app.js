/************************************************
// JMaas Bus-Mall
// 201 Week 3 Tuesday - Friday
************************************************/

/*
=============
canvas charts
=============
*/

//*** Arrays for charts-data:

var labelArray = [];
var yAxisArray = [];
var percentArray = [];

//*** Functionc to generate data-arrays:

var makeBarLabels = function() {
  for (var i = 0; i < catArray.length; i++) {
    labelArray[i] = catArray[i].name;
  }
};

var makeYAxis = function() {
  for (var i = 0; i < catArray.length; i++) {
    yAxisArray[i] = catArray[i].nClicks;
  }
};

// FIXME : SOMETIMES PRODUCES NaN !!!! WTF ?!

var makePercentChart = function() {
  for (var i = 0; i < catArray.length; i++) {
      // Handle case where nShow is zero (just assign 0% as the value)
    var nShow = catArray[i].nShow;
    var p = 0;
    if (nShow) { p = Math.floor((catArray[i].nClicks / nShow)*100); }
    percentArray.push(p);
  }
};


/*
=======================================================
             showResults Function:
(linked to displayButton and it's EventListener below )
=======================================================
*/

function showResults() {

  makePercentChart();

  barDataPercent.datasets[0].data = percentArray;
  console.log("percent array: " + percentArray);
  console.log("barDataPercent: " + barDataPercent.datasets[0].data);

  makeBarLabels();
  barData.labels = labelArray;
  barDataPercent.labels = labelArray;

  makeYAxis();
  barData.datasets[0].data = yAxisArray;

  displayButton.setAttribute('style','visibility:hidden');

  //*** Charts get made here :
  clicksChart  = new Chart(clicksChartCtx).Bar(barData);      //asssigning new chart to global variable so we can call destroy method on it
  percentChart = new Chart(percentChartCtx).Bar(barDataPercent);
}; // showResults close


/*
==============================
Chart-Data Objects:
==============================
*/

var barData = {
	labels : [],               // array of image-objects names gets appended here
	datasets : [
		{
			fillColor : "rgba(73,188,170,0.4)",
			strokeColor : "rgba(72,174,209,0.4)",
			data : []            // array of image-objects nClicks gets appended here
		}
	]
};

var barDataPercent = {
  labels : [],
  datasets : [
    {
      fillColor : "rgba(73,188,170,0.4)",
      strokeColor : "rgba(72,174,209,0.4)",
      data : []                 // array of percentage of clicks when shown for each image
    }
  ]
};

/*
=================
   variables
=================
*/

//*** DOM - variables:
var clicksChartCtx = document.getElementById("clicksChart").getContext("2d");
var percentChartCtx = document.getElementById("percentChart").getContext("2d");

var imageOne = document.getElementById('imageSlotOne');
var imageTwo = document.getElementById('imageSlotTwo');
var imageThree = document.getElementById('imageSlotThree');

var displayButton = document.getElementById('myButton');
var voteMoreButton = document.getElementById('voteMore');
var resetButton = document.getElementById('resetButton');

var chart = document.getElementById('chart');

var paraOne = document.getElementById('paraOne');
var paraTwo = document.getElementById('paraTwo');
var paraThree = document.getElementById('paraThree');


//*** Array to store image-Objects:

var catArray = [];      // ALL IMAGE-OBJECTS LIVE HERE !!!

//*** other global variables:

var totalClicks = 0;
var processClick = true;

var x = true;
var clicks = 16;

//variables to set clicksChart and percentChart to be global in scope
var clicksChart;
var percentChart;

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


//*** Functionj triggered by the div-Event-Listener:

function imageClicked() {
  if (processClick) {
    totalClicks++;

    // updates each image-slot with a random image for each click
    showRandomImg(imageOne);
    showRandomImg(imageTwo);
    showRandomImg(imageThree);

    if (totalClicks >= clicks && x && totalClicks < 24) {           // NOTE remember x !

          // show hidden buttons
          displayButton.setAttribute('style','visibility:visible');
          voteMoreButton.setAttribute('style','visibility:visible');
          processClick = false;

    } else if (totalClicks === 24) {
          x = false;                                                // x makes sure that the first if-condition does not run after 24 clicks
          voteMoreButton.setAttribute('style', 'visibility:hidden');
          console.log(totalClicks);
          processClick = false;

          voteMoreButton.removeEventListener('click', eightMore);
          resetButton.setAttribute('style','visibility:visible');

          // destroy charts before showing them again:
          clicksChart.destroy();
          percentChart.destroy();
          // automatically displays charts at the end of voting
          showResults();

      // TODO Add code here to update image-slots with a final-image:
    }

  }  // 1st if close
}  // imageClicked close


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


//*** Function to extend voting to 24 votes  possible:

function eightMore() {
  clicks = 24;
  processClick = true;
  voteMoreButton.setAttribute('style','visibility:hidden');
  displayButton.setAttribute('style','visibility:hidden');
  displayButton.removeEventListener('click', showResults);
}


/*
==============================================
 Function to reset for a new round of voting:
 =============================================
 */

function newVoteRound() {

  console.log("before " + clicksChart);

  //  destroys charts

  clicksChart.destroy();
  percentChart.destroy();
  console.log("after " + clicksChart);

  //resets all global variables
  totalClicks = 0;
  processClick = true;
  clicks = 16;
  x = true;
  percentArray = [];
  yAxisArray = [];

  //resets all image object's counters
  for (var i = 0; i < catArray.length; i++) {
    catArray[i].nClicks = 0;
    catArray[i].nShow = 0;
  }

  // hides reset button after click
  resetButton.setAttribute('style','visibility:hidden');

  // re-populate image-slots anew
  showRandomImg(imageOne);
  showRandomImg(imageTwo);
  showRandomImg(imageThree);

  // reset chart-Data objects:

  barData.datasets[0].data = [];
  barDataPercent.datasets[0].data = [];



  // add back in eventListeners
  displayButton.addEventListener('click', showResults);
  voteMoreButton.addEventListener('click', eightMore);
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

voteMoreButton.addEventListener("click", eightMore);

resetButton.addEventListener("click", newVoteRound);



//
