$(document).ready(function() {
//Set variables   
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

//When win, score goes up and logged on page
function win(){
    wins++;
    $("#wins").text("Wins:" + wins);
}

//When lose, score goes down and logged on page
function lose(){
    losses++;
    $("#losses").text("Losses: " + losses);
}

//Reset function is called when page is loaded
reset();


//When one of crystal buttons are clicked, total score is the total value of 4 crystals
$(".crystal").on("click", function (){
    var redCryst = parseInt(redCrystal);
    var blueCryst = parseInt(blueCrystal);
    var yellowCryst = parseInt(yellowCrystal);
    var greenCryst = parseInt(greenCrystal);
    totalScore = redCryst + blueCryst + yellowCryst + greenCryst;
    $("#score").text(totalScore); 

//If score equals current random number, we win: win function is called, game is reset
    if ($("#score") === numRandom){
        win();
        reset();
    }

//If score is higher than current random number, we lose: lose function is called, game is reset
    else if ($("#score") > numRandom){
        lose();
        reset();
    }
    })
});


