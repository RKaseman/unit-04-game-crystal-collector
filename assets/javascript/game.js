
$(document).ready(function () {

    var targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;
    var parseBtn1;
    var parseBtn2;
    var parseBtn3;
    var parseBtn4;

    function reset() {
        console.log("--reset--");
        targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#targetScore").text(targetScore);
        console.log("reset targetScore [ " + targetScore + " ]");

        $("#button1").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        parseBtn1 = parseInt(button1.value);
        console.log("reset button1 = " + parseBtn1);

        $("#button2").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        parseBtn2 = parseInt(button2.value);
        console.log("reset button2 = " + parseBtn2);
        while (parseBtn2 === parseBtn1) {
            btn2();
        }

        $("#button3").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        parseBtn3 = parseInt(button3.value);
        console.log("reset button3 = " + parseBtn3);
        while (parseBtn3 === parseBtn2 || parseBtn3 === parseBtn1) {
            btn3();
        }
    
        $("#button4").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        parseBtn4 = parseInt(button4.value);
        console.log("reset button4 = " + parseBtn4);
        while (parseBtn4 === parseBtn3 || parseBtn4 === parseBtn2 || parseBtn4 === parseBtn1) {
            btn4();
        }
        console.log(parseBtn1, parseBtn2, parseBtn3, parseBtn4);
        console.log("--------");
        
        $("#playerTotal").text(playerTotal = 0);
        console.log("reset playerTotal = [ " + playerTotal + " ]");
        console.log("--------");
        
    }

    // set button1
    $("#button1").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    parseBtn1 = parseInt(button1.value);
    console.log("setBtn1 : " + typeof parseBtn1, parseBtn1);

    // keep trying button2 while values match
    $("#button2").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    parseBtn2 = parseInt(button2.value);
    console.log("setBtn2 : " + typeof parseBtn2, parseBtn2);
    while (parseBtn2 === parseBtn1) {
        btn2();
    }

        function btn2() {
            parseBtn2 = parseInt(button2.value);
            $("#button2").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            console.log("resetbtn2(); = " + typeof parseBtn2, parseBtn2);
        };

    // keep trying button3 while values match
    $("#button3").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    parseBtn3 = parseInt(button3.value);
    console.log("setBtn3 : " + typeof parseBtn3, parseBtn3);
    while (parseBtn3 === parseBtn2 || parseBtn3 === parseBtn1) {
        btn3();
    }

        function btn3() {
            parseBtn3 = parseInt(button3.value);
            $("#button3").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            console.log("resetbtn3(); = " + typeof parseBtn3, parseBtn3);
        };

    // keep trying button4 while values match
    $("#button4").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    parseBtn4 = parseInt(button4.value);
    console.log("setBtn4 : " + typeof parseBtn4, parseBtn4);
    while (parseBtn4 === parseBtn3 || parseBtn4 === parseBtn2 || parseBtn4 === parseBtn1) {
        btn4();
    }

        function btn4() {
            parseBtn4 = parseInt(button4.value);
            $("#button4").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            console.log("resetbtn4(); = " + typeof parseBtn4, parseBtn4);
        };

    console.log("--------");
    console.log(parseBtn1, parseBtn2, parseBtn3, parseBtn4);
    console.log("--------");

    $("#targetScore").text(targetScore);
    console.log("targetScore [ " + targetScore + " ]");
    $("#playerTotal").text(playerTotal);
    console.log("playerTotal = [ " + playerTotal + " ]");
    $("#wins").text(wins);
    console.log("wins [ " + wins + " ]");
    $("#losses").text(losses);
    console.log("losses [ " + losses + " ]");

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

