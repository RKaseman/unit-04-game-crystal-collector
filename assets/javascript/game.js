
$(document).ready(function () {

    var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;
    var btnValArray = [];

    // set the random button values
    $("#button1").val(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    console.log("button1.value = " + button1.value);
    var parseBtn1 = parseInt(button1.value);
    // pushes button1 immediately
    btnValArray.push(parseBtn1);
    console.log("button1:push = " + btnValArray);
    console.log("--------");

    $("#button2").val(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    console.log("button2.value = " + button2.value);
    var parseBtn2 = parseInt(button2.value);
    btnValArray.push(parseBtn2);
    console.log("button2:push = " + btnValArray);
    console.log("--------");

    function btn2() {
        if (btnValArray[1] !== parseBtn1) {
            btnValArray.push(parseBtn2);
            console.log("button2:push = " + btnValArray);
        }
        else {
            btnValArray.pop();
            $("#button2").val(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
            parseBtn2 = parseInt(button2.value);
            console.log("button2:else = " + parseBtn2);
        }
    };
    console.log("btnValArray[0] = " + btnValArray[0]);
    console.log("btnValArray[1] = " + btnValArray[1]);
    btn2();

    console.log("--------");
    console.log("filled btnValArray = " + btnValArray);
    console.log("--------");

    $("#targetScore").text(targetScore);
    console.log("targetScore [ " + targetScore + " ]");
    $("#playerTotal").text(playerTotal);
    console.log("playerTotal = [ " + playerTotal + " ]");
    $("#wins").text(wins);
    console.log("wins [ " + wins + " ]");
    $("#losses").text(losses);
    console.log("losses [ " + losses + " ]");

    function reset() {
        console.log("--reset--");
        targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#targetScore").text(targetScore);
        console.log("reset targetScore [ " + targetScore + " ]");

        button1.setAttribute("value", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log("reset button1 = " + button1.value);
        parseBtn1 = parseInt(button1.value);

        button2.setAttribute("value", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log("reset button2 = " + button2.value);
        parseBtn2 = parseInt(button2.value);

        button3.setAttribute("value", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log("reset button3 = " + button3.value);
        parseBtn3 = parseInt(button3.value);

        button4.setAttribute("value", Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        console.log("reset button4 = " + button4.value);
        parseBtn4 = parseInt(button4.value);

        $("#playerTotal").text(playerTotal = 0);
        console.log("reset playerTotal = [ " + playerTotal + " ]");
        console.log("--------");
    }

    $("#button1").on("click", function () {
        $("#playerTotal").text(playerTotal + parseBtn1);
        console.log("playerTotal + parseBtn1 " + (playerTotal + parseBtn1));
        playerTotal += parseBtn1;
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

    $("#button2").on("click", function () {
        $("#playerTotal").text(playerTotal + parseBtn2);
        console.log("playerTotal + parseBtn2 " + (playerTotal + parseBtn2));
        playerTotal += parseBtn2;
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

    $("#button3").on("click", function () {
        $("#playerTotal").text(playerTotal + parseBtn3);
        console.log("playerTotal + parseBtn3 " + (playerTotal + parseBtn3));
        playerTotal += parseBtn3;
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

    $("#button4").on("click", function () {
        $("#playerTotal").text(playerTotal + parseBtn4);
        console.log("playerTotal + parseBtn4 " + (playerTotal + parseBtn4));
        playerTotal += parseBtn4;
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

