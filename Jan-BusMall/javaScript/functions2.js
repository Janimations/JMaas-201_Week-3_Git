
/***********************************************************
// JMaas Bus-Mall
// 201 Week 3 Tuesday - Friday
***********************************************************

                 FUNCTIONS - 2

        ( code moslty from MobCode-Thursday.js... )
this code ads localStorage functionality and had to be integrated into the existing functioning wednesday code.
The app was working before branching to week-3-thursday git branch. Some variables in MobCode-Thursday
had to be changed obviously to make it work...
*********************************************************/


/*
========================================
  Constructor for storageObjects:
( used in checkStorage function below)
========================================
*/

function makeStorageObject() {
  this.totalClicks = 0;
  this.nClicksAll = [];
  this.nShowAll = [];
  this.percentAll = [];
  this.ImagesShown = []; // 2d array
  this.voteMore = false;
  this.Charts = false;
  this.processClick = true;
}


/*
=======================================================
                START-UP function
    ( checks if localStorage has storageObjectOne )
=======================================================
*/

var checkStorage = function() {

    if (localStorage.getItem('storageObjectOne')) {
                console.log('storageObjectOne present: checking localStorage: ' + localStorage);

            var parsedStorage = storageOut();
                console.log('Object pulled out of localStorage: ' + parsedStorage);

            totalClicks = parsedStorage.totalClicks; // refills global variable totalClicks array
            percentArray = parsedStorage.percentAll; // refills global variable percent array
            processClick = parsedStorage.processClick; // resets global variable processClick - is needed for imageClicked function!!!

            // restore image slots
            imageOne.setAttribute('src', parsedStorage.ImagesShown[totalClicks][0]);  // FIXME ? maaybe not use totalClicks...
            imageOne.setAttribute('src', parsedStorage.ImagesShown[totalClicks][1]);
            imageOne.setAttribute('src', parsedStorage.ImagesShown[totalClicks][2]);

            for (var i = 0; i < catArray.length; i++) {
                catArray[i].nClicks = parsedStorage.nClicksAll[i];
                catArray[i].nShow = parsedStorage.nShow[i];
            }

            if (totalClicks > 16) {
              if (parsedStorage.Charts = true) {showResults();}    // checks if charts had been displayed at historic state

            } else if (totalClicks == 24) {
                showResults();
            }

    } else {
        storageObjectOne = new makeStorageObject();         // storageObjectOne is a global variable!!!!!!!
            console.log('new storageObject created');
        storageIn();
            console.log('localStorage: --- ' + localStorage);

    }//Main if Close

} // checkStorage Close

/*
========================================================
         Functions for localStorage IN - OUT
  (to push the storageObject to and from localStorage)
========================================================
*/

// function that pushes storage Object into a local storage

var storageIn = function () {
  localStorage.setItem("storageObjectOne", JSON.stringify(storageObjectOne));
}

// function that gets storage object out of local storage

var storageOut = function () {
  var pullStorage = localStorage.getItem('storageObjectOne');
  var parseData = JSON.parse(pullStorage);
  return parseData;
}


/*
=====================================================
                STORE - CLICKS
  populates the storage object for each click
  invoked inside of imageClicked() in functions1.js
======================================================
*/

var storeClicks = function() {

      window.localStorage.clear();   // insures that there are no old storageObjects in localStorage

      storageObjectOne.totalClicks = totalClicks;

      // get nClicks from all Image Objects
      var nClicksAllArray = [];
      for (var i = 0; i < catArray.length; i++) {
        nClicksAllArray.push(catArray[i].nClicks);
      }
      storageObjectOne.nClicksAll = nClicksAllArray;

    // get nShown from all Image Objects
      var nShowAllArray = [];
      for (var i = 0; i < catArray.length; i++) {
        nShowAllArray.push(catArray[i].nShow);
      }
      storageObjectOne.nShowAll = nShowAllArray;

  // get percentages from all Image Objects
    for (var i = 0; i < catArray.length; i++) {
      var percentAllArray = [];
      var nShow = catArray[i].nShow;
      var p = 0;
      if (nShow) {p = Math.floor((catArray[i].nClicks/catArray[i].nShow)*100);}
      percentAllArray.push(p);
    }

    storageObjectOne.percentAll = percentAllArray;

    // get attribute on images shown
    var setOfThree = [];
    setOfThree.push(imageOne.getAttribute('src'));
    setOfThree.push(imageTwo.getAttribute('src'));
    setOfThree.push(imageThree.getAttribute('src'));
    // and push them into a 2D-array in storageObjectOne
    storageObjectOne.ImagesShown.push(setOfThree);

    //check if voteMore button has been clicked
    if (voteMore) {
        storageObjectOne.voteMore = true;
    } else {
        storageObjectOne.voteMore = false;
    };

// check if processClick is true/false
    if (processClick) {
      storageObjectOne.processClick = true;
    } else {
      storageObjectOne.processClick = false;
    }

// check if clicksChart object exists
    if (typeof clicksChart !== 'undefined') {
      storageObjectOne.Charts = true;
    }
} //storeClicks Function Closed





/*
=====================
 All event listeners
=====================
*/

imageOne.addEventListener("click", imageClicked);
imageTwo.addEventListener("click", imageClicked);
imageThree.addEventListener("click", imageClicked);

displayButton.addEventListener("click", showResults);

voteMoreButton.addEventListener("click", eightMore);

resetButton.addEventListener("click", newVoteRound);
