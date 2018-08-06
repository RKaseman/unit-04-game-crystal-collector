
$(document).ready(function() {

    var targetScore = Math.floor(Math.random() * (30 - 19 + 1)) + 19;
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

// make this a jquery statement
    button1.setAttribute("value", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    console.log("button1 = " + button1.value);

    var x = parseInt(button1.value);
    console.log("button1.value parseInt = " + x);

    $("#targetScore").text(targetScore);
    console.log("targetScore [ " + targetScore + " ]");
    $("#playerTotal").text(playerTotal);
    console.log("playerTotal = [ " + playerTotal + " ]");
    $("#wins").text(wins);
    console.log("wins [ " + wins + " ]");
    $("#losses").text(losses);
    console.log("losses [ " + losses + " ]");

    function reset(){
        console.log("--reset--");
        targetScore = Math.floor(Math.random() * (30 - 19 + 1)) + 19;
        $("#targetScore").text(targetScore);
        console.log("reset targetScore [ " + targetScore + " ]");

        button1.setAttribute("value", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log("reset button1 = " + button1.value);

        $("#playerTotal").text(playerTotal = 0);
        console.log("reset playerTotal = [ " + playerTotal + " ]");
        console.log("--------");
    }

    $("#button1").on("click", function() {
        $("#playerTotal").text(playerTotal + x);
        console.log("playerTotal + x " + (playerTotal + x));
        playerTotal += x;
        console.log("playerTotal " + (playerTotal));
        $("#messages").text("...waiting");

        if (playerTotal === targetScore) {
            $("#messages").text("...win!");
            wins++;
            $("#wins").text(wins);
            reset();
        }
            else if (playerTotal >= targetScore) {
                $("#messages").text("...try again.");
                losses++;
                $("#losses").text(losses);
                reset();
            }
    })

});

