// This is for Assignment 4.2 For CSC102, created by Gage Vaughan

// This allows us to play sound files on our webpage when we call for a sound file
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }

}

// This will call the sound file once the button is pressed by the user
function play()
{
    mySound = new sound("cartoon-birds-2_daniel-simion.mp3")
    mySound.play();
}

// This will stop the sound file once pressed by the user
function stop()
{
    window.location.reload();
}