
/************************************************
// JMaas Bus-Mall
// 201 Week 3 Tuesday - Friday
*************************************************

                 FUNCTIONS - 1
        ( code up til Wednesday... )
 ***********************************************/


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
            SHOW RESULTS Function:
(linked to displayButton and it's EventListener below )
=======================================================
*/

function showResults() {

  makePercentChart();
  barDataPercent.datasets[0].data = percentArray;

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


/*
=======================================================
                8 - MORE function
(linked to displayButton and it's EventListener below )
=======================================================
*/

//*** Function to extend voting to 24 votes  possible:

function eightMore() {
  clicks = 24;
  processClick = true;
  voteMore = true;
  voteMoreButton.setAttribute('style','visibility:hidden');
  displayButton.setAttribute('style','visibility:hidden');
  displayButton.removeEventListener('click', showResults);
}



/*
=======================================================
           On-Click counting functions
=======================================================
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


/*
=======================================================
              Image-Clicked function
=======================================================
*/


//*** Function triggered by the div-Event-Listener:

function imageClicked() {
  if (processClick) {
    totalClicks++;

    /*-------------------------------------------
          new local storage-feature:
    --------------------------------------------*/

    storeClicks();
    storageIn();
    
    /*------------------------------------------*/




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


/*
=======================================================
                NEW ROUND function
(linked to displayButton and it's EventListener below )
=======================================================
*/

function newVoteRound() {

      //  destroys charts

      clicksChart.destroy();
      percentChart.destroy();

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
};  // newVoteRound close
