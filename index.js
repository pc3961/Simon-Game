var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {

    var UserChosenColour = $(this).attr("id");
    userClickedPattern.push(varUserChosenColour);
    playsound(UserChosenColour);
})
function nextSequence() {
    var randomNumber = Math.floor(Math.random(0) * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}