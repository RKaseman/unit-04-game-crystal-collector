
$(document).ready(function() {

// console.log("newScore :04 is " + newScore);
    var playerTotal = 700;
    var wins = 0;
    var losses = 0;
    var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#targetScore").text(targetScore);
        console.log("targetScore is " + targetScore);
    $("#wins").text(wins);
    $("#losses").text(losses);

    var but1 = document.getElementById("button1");
    button1.setAttribute("value", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log("button1 :16 is " + but1.value);

    button1.addEventListener("click", function(newScore) {
        // var newScore = 2 + playerTotal;
        var x = parseInt(but1.value);
            console.log("parseInt but1.value = " + x);
        var y = parseInt(playerTotal);
            console.log("parseInt playerTotal = " + y);
        var newScore = x + y;
            console.log("newScore = " + newScore);

            console.log("button1 :26 is " + but1.value);
            // console.log("newScore is " + newScore);
            console.log("playerTotal is " + playerTotal);

        return newScore;
    })

    // function scoreTotal(newScore) {
    //     return newScore;
    // }

});

// 

var that = 0;
function go(input) {
    return input++;
}
that = go(that);
console.log(that); // 1

// 

// var x = myFunction(4, 3); 

// function myFunction(a, b) {
//     return a * b;   
// }    
// document.getElementById("demo").innerHTML = x;

// 

// var sum = 0;
// // $("#score").html(sum + " Points");

// $(document).on("click", "#increase-5", function() {
//   sum = sum + 5;
//   $("#score").html(sum + " Points");
// });

// $(document).on("click", "#decrease-5", function() {
//   sum = sum - 5;
//   $("#score").html(sum + " Points");

// });

// $(document).on("click", "#submit-custom-score", function (){
//     var custom = parseInt($("#custom-score").val());
//     $("#score").html(custom + " Points");
//     sum = custom;
// });

// 

// var total = 0;

// document.getElementById("zero").onclick = zero;
// document.getElementById("add5").onclick = add5;
// document.getElementById("add10").onclick = add10;
// document.getElementById("sub1").onclick = sub1;

// function zero() {
//   total = 0;
//   document.getElementById("result").innerHTML = total;
// }

// function add5() {
//   total = total + 5;
//   document.getElementById("result").innerHTML = total;
// }

// function add10() {
//   total = total + 10;
//   document.getElementById("result").innerHTML = total;
// }

// function sub1() {
//   total = total - 1;
//   document.getElementById("result").innerHTML = total;
// }

// 

  // var yourScore = document.getElementById("yourScore");
// //var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
// yourScore.innerHTML = 0; //
// var targetScore = document.getElementById("targetScore");
// targetScore.innerHTML = getRandomValue(10, 4);

// function addToScore(val) {
//   var numberToAdd = parseInt(val);
//   var currentScore = parseInt(yourScore.innerHTML);
//   yourScore.innerHTML = numberToAdd + currentScore;
// }

// var red = document.getElementById("red");
// //red.setAttribute("value", "5");
// console.log(red.value);

// var blue = document.getElementById("blue");
// //console.log(blue.value);

// var yellow = document.getElementById("yellow");
// //console.log(yellow.value);

// var green = document.getElementById("green");
// //console.log(green.value);

// // add an event listener to elements
// red.addEventListener("click", function() {
//   //this refers to red
//   addToScore(this.value);
//   checkPlayerScore();
// });

// blue.addEventListener("click", function() {
//   // this refers to blue
//   addToScore(this.value);
//   checkPlayerScore();
// });

// yellow.addEventListener("click", function() {
//   // this refers to blue
//   addToScore(this.value);
//   checkPlayerScore();
// });

// green.addEventListener("click", function() {
//   // this refers to blue
//   addToScore(this.value);
//   checkPlayerScore();
// });
// //var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// // console.log (sum);
// function getRandomValue (a, b){
//   return Math.floor((Math.random() * a) + b);
// }

// function checkPlayerScore() {
//   var playerInt = parseInt(yourScore.innerHTML);
//   var targetInt = parseInt(targetScore.innerHTML);
//   if (playerInt === targetInt) {
//       alert("You win!");
//   } else if (playerInt > targetInt) {
//     alert("You lose!");
//   } 
// }

// console.log(getRandomValue(10, 4));

// // 
// // 
// // 
// // 

// $(document).ready(function() {

// 	crystals = ["assets/images/red.png","assets/images/blue.png","assets/images/yellow.png","assets/images/green.png"];

// 	var counter = 0;
// 	var wins = 0;
// 	var losses = 0;
// 	$("#win").text(wins);
// 	$("#loss").text(losses);
	
// 	newCrystals();
// 	newGame();

// 	function newCrystals () {
// 		var numbers = []
// 			while(numbers.length < 4){
// 			  var randomnumber = Math.ceil(Math.random()*12)
// 			  var found = false;
// 			  for (var i=0; i< numbers.length; i++){
// 				if (numbers[i] == randomnumber){
// 					found = true; break
// 				}
// 			  }
// 			  if(!found)numbers[numbers.length]=randomnumber;
// 			}
// 		console.log(numbers);		

// 		for (i = 0; i < numbers.length; i++) {
// 			var imageCrystal = $("<img>");
// 			imageCrystal.attr("data-num", numbers[i]);
// 			imageCrystal.attr("src", crystals[i]);
// 			imageCrystal.attr("alt", "crystals");
// 			imageCrystal.addClass("crystalImage")
// 			$("#crystals").append(imageCrystal);
// 		}
// 	}

// 	function newGame() {

// 		counter = 0;
// 		$("#yourScore").text(counter);

// 		function randomIntFromInterval(min,max){
// 		   	return Math.floor(Math.random()*(max-min+1)+min);
// 			}

// 		var numberToGuess = randomIntFromInterval(19,120);

// 		$(".value").text(numberToGuess);


// 		$(".crystalImage").on("click", function(){
// 		    counter = counter + parseInt($(this).data("num"));
		   
// 		    $("#yourScore").text(counter);

// 		    if (counter == numberToGuess){
// 		      $("#status").text("You won!!!!");
// 		      wins ++;
// 		      $("#win").text(wins);
// 		      console.log(wins)
// 		      $("#crystals").empty();
// 		      newCrystals();
// 		      newGame();
		        
// 		    } else if ( counter > numberToGuess){
// 		        $("#status").text("You lost!")
// 		        losses ++;
// 		        $("#loss").text(losses);
// 		        console.log(losses)
// 		        $("#crystals").empty();
// 		        newCrystals();
// 		        newGame();
// 		    }
// 		});
// 	}
// });

