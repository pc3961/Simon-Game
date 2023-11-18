var buttonColours =["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function(){

    varUserChosenColour = $(this).attr("id");
    userClickedPattern.push(varUserChosenColour);
    
})
function nextSequence() {
    var randomNumber= Math.floor(Math.random(0)*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}