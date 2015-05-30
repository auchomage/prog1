/* Created by auchomage on 17/05/2015 */

/* fruits is an array of images */

var fruits = new Array ("./images/hyphen.jpg","./images/apple.png", "./images/cherry.png", "./images/orange.png");

function setDisplayBox(that) {
  /*
    Generates a random index number, that is used to select an image
    from the fruits array.
    
    Check for zero, ensures that the first indice in the array is not
    use for comparison.

    The first indice in the fruits array is used as a 'reset'.
  */

  
  var indexValue = Math.floor((Math.random() * 4) + 1);
  var elementCount = fruits.length;
  
  if (indexValue > 0 && indexValue < elementCount) {
    that.src = fruits[indexValue];
    checkingForAMatch();
    return false;
  }
  else {
    setDisplayBox(that);
  }
 
}

function screenReset() {
  // Resets all the screens to a 'dash' & hides the congratulatory message 
  for (var screenNo = 0; screenNo < 3; screenNo++) {
    document.images[screenNo].src=fruits[0];
  }
  // Hide congratulatory message if visible
  if (document.getElementById("matchFound").style.visibility === "visible") {
    hideCongratulatoryMessage();
  } 
}

function hideCongratulatoryMessage() {
  // matchFound = textarea element, that displays the congratulatory message 
    document.getElementById("matchFound").style.visibility = "hidden";
}

function showCongratulatoryMessage() {
// Show the congratulatory message 
  document.getElementById("matchFound").style.visibility = "visible";
}

function checkingForAMatch() {
  // Check that all 3 screens match, if they do display a congratulatory message 

  var screen0 = document.images[0];
  var screen1 = document.images[1];
  var screen2 = document.images[2];
  var allScreensMatch = false;

  if ((screen0.src === screen1.src) && (screen1.src === screen2.src)) {
    allScreensMatch = true;
  }
  
  if (allScreensMatch) {
    showCongratulatoryMessage();
  }
  else {
    hideCongratulatoryMessage();
  }
}


