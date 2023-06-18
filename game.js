var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

 
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4) ;
   var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).on("click", function() {
        $("." + randomChosenColour).fadeOut(100).fadeIn(100);

        //var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
        //audio.play();
        console.log("ya lo toco");

    });
};

nextSequence();
function playsounds(name){
    $("#" + name).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function()  {
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playsounds(userChosenColour);
}); 
 function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
 }
