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
