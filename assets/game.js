$(document).ready(function() {
    
var totalScore = 0;
var wins = 0;
var losses = 0;
var buttonRandom;
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;


function random(){
    buttonRandom = Math.floor(Math.random()*100)+20;
    redCrystal = Math.floor(Math.random()*10);  
    blueCrystal = Math.floor(Math.random()*10); 
    yellowCrystal = Math.floor(Math.random()*10); 
    greenCrystal = Math.floor(Math.random()*10); 
}

function reset(){
    random();
    totalScore = 0;
    $("#score").text(totalScore)
    $("#randomNumber").text(buttonRandom);
    $("#red").attr(redCrystal);
    $("#blue").attr(blueCrystal);
    $("#yellow").attr(yellowCrystal);
    $("#green").attr(greenCrystal);
    $("#wins").text("Wins" + wins);
    $("#losses").text("Losses" + losses);
}

function youWin(){
    wins++;
    $("#wins").text(wins);
}

function youLose(){
    losses++;
    $("#losses").text(losses);
}

reset();

$(".crystal").on("click", function (){
    
    $("#score").text(redCrystal + blueCrystal + yellowCrystal + greenCrystal);
    if ($("#score") < totalScore){
        $("#score").text()

        console.log(this);
  if(!operatorPressed){
  firstnum = firstnum + $(this).attr("value");
  console.log(firstnum);
  $("#first-number").text(firstnum);
}
var result = $("#result");
$(".equal").on("click", function() {
  var num1 = parseInt(firstnum);
  var num2 = parseInt(secondnum);
  if(operator==="plus"){
    $("#result").text(num1 + num2);
  } 
  else if(operator==="minus"){
    $("#result").text(num1 - num2);
  }





 else {
  secondnum = secondnum + $(this).attr("value");
  console.log(secondnum);
  $("#second-number").text(secondnum);
 }
        
    }
    else if ($("#score") === totalScore){
        youWin();
        reset();
    }
    else {
        youLose();
        reset();
    }
    })
});


