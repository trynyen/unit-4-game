$(document).ready(function() {
    
var totalScore = 0;
var wins = 0;
var losses = 0;
var buttonRandom;
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;


$(".number").on("click", function(reset){

    buttonRandom = Math.floor(Math.random()*100)+20;
    $("#randomNumber").text(buttonRandom);

    redCrystal = Math.floor(Math.random()*10);  
    $("#red").attr(redCrystal);

    blueCrystal = Math.floor(Math.random()*10); 
    $("#blue").attr(blueCrystal);

    yellowCrystal = Math.floor(Math.random()*10); 
    $("#yellow").attr(yellowCrystal);
    
    greenCrystal = Math.floor(Math.random()*10); 
    $("#green").attr(greenCrystal);
})

$(".crystal").on("click", function (){

})
$("#score").text(redCrystal + blueCrystal + yellowCrystal + greenCrystal);

});


