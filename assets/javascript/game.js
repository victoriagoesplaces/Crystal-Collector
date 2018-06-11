
var current = 0

var targetNumber =  Math.floor(Math.random() * (120 - 19)) + 19;    
$("#target").text(targetNumber);

var crystal =  Math.floor(Math.random() * 12) + 1;
var crystal2 =  Math.floor(Math.random() * 12) + 1;
var crystal3 =  Math.floor(Math.random() * 12) + 1;
var crystal4 =  Math.floor(Math.random() * 12) + 1;

var winCounter = 0 
var lossCounter = 0

        
$(".crystal").on("click", function() {
    current = current + crystal;
    $("#current").text(current);
    score();
});

$(".crystal2").on("click", function() {
    current = current + crystal2;
    $("#current").text(current);
    score();
});

$(".crystal3").on("click", function() {
    current = current + crystal3;
    $("#current").text(current);
    score();
});

$(".crystal4").on("click", function() {
    current = current + crystal4;
    $("#current").text(current);
    score();
});

function reset() {

    var current = 0
    $("#current").text(current);

    var targetNumber =  Math.floor(Math.random() * (120 - 19)) + 19;
    $("#target").text(targetNumber);

    var crystal =  Math.floor(Math.random() * 12) + 1;
    var crystal2 =  Math.floor(Math.random() * 12) + 1;
    var crystal3 =  Math.floor(Math.random() * 12) + 1;
    var crystal4 =  Math.floor(Math.random() * 12) + 1;
    
    $("#lossCounter").text(lossCounter);
    $("#winCounter").text(winCounter);}

$("#resetButton").on("click", function() {
    reset();
});

function score() {
if (current === targetNumber) {
    winCounter++;
    alert("You won!")
    $("#winCounter").text(winCounter);
    reset()
}

else if (current > targetNumber){
    lossCounter++
    alert("Oh Oh, try again!")
    $("#lossCounter").text(lossCounter);
    reset()
}
}

