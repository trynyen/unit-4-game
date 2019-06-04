$(document).ready(function() {
    
var totalScore = 0;
var wins = 0;
var losses = 0;
var numRandom;
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;

//Set a random number each time the game is reset
function random(){
    numRandom = Math.floor(Math.random()*100)+20;
    redCrystal = Math.floor(Math.random()*10);  
    blueCrystal = Math.floor(Math.random()*10); 
    yellowCrystal = Math.floor(Math.random()*10); 
    greenCrystal = Math.floor(Math.random()*10); 
}

//When reset, random funtion is run and value is set to the new random value
function reset(){
    random();
    totalScore = 0;
    $("#score").text(totalScore);
    $("#randomNumber").text(numRandom);
    $("#red").attr(redCrystal);
    $("#blue").attr(blueCrystal);
    $("#yellow").attr(yellowCrystal);
    $("#green").attr(greenCrystal);
    $("#wins").text("Wins" + wins);
    $("#losses").text("Losses" + losses);
}

//When win, score goes up and shows on page
function win(){
    wins++;
    $("#wins").text("Wins:" + wins);
}

//When lose, score goes down and shows on page
function lose(){
    losses++;
    $("#losses").text("Losses: " + losses);
}

reset();

$(".crystal").on("click", function (){
    var redCryst = parseInt(redCrystal);
    var blueCryst = parseInt(blueCrystal);
    var yellowCryst = parseInt(yellowCrystal);
    var greenCryst = parseInt(greenCrystal);
    totalScore = redCryst + blueCryst + yellowCryst + greenCryst;
    $("#score").text(totalScore); 

    if ($("#score") === numRandom){
        win();
        reset();
    }

    else if ($("#score") > numRandom){
        lose();
        reset();
    }
    })
});


