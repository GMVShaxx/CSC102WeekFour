// This is for Assignment 4.1 for CSC102, created by Gage Vaughan

// These variables placed about the functions are global = usable by any function
var intervalID = 0
var change = 100

// This will start the intervals of the image moving around the page until stopped or the page is reset
function startWalk()
{
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    var image = document.getElementById("doggo");

    intervalID = setInterval(function()
    {
        // This moves our image by the specified amount of pixels
        image.style.top = change + "px";
        image.style.left = change + "px";

        change +=20; //change = change + 50
        // runs repeatedly at the specified interval
    },500); // 500 = # of milliseconds
}
// This will stop the image from moving and will remain where it is once the button is pressed
function pauseWalk()
{
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    clearInterval(intervalID);
}
// Here I will set it up so that when the user presses the "Come Back" Button, the page resets to its orginal state
function restart()
{
    location.reload();
}