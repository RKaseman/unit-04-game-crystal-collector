
var sketchProc1 = function (processingInstance) {
    with (processingInstance) {
        size(500, 400);
        frameRate(30);
        background(32, 192, 192);
        strokeWeight(2);
        stroke(16, 176, 128);
        line(256, 0, 256, 400);
        line(0, 200, 512, 200);

        // rect = new RectButton(150, 20, 100, buttoncolor, highlight);

    var fishColor = color(random(255), random(255), random(255));

    // add pebbles
    $("#mycanvas1").on("click", function() {
        var pebbleHeight = random(30, 40);
        fill(mouseX, 90, 250);
        strokeWeight(2);
        stroke(random(255), random(255), random(255));
        ellipse(mouseX, mouseY, pebbleHeight, pebbleHeight * random(1 / 2, 2 / 3));
    });

    // random fish gen
    var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {
        // body
        stroke(250, 250, 250);
        fill(bodyColor);
        ellipse(centerX, centerY, bodyLength, bodyHeight);
        // tail
        var tailWidth = bodyLength / 4;
        var tailHeight = bodyHeight / 2;
        fill(bodyColor);
        quad(centerX - bodyLength / 2, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY - tailHeight, centerX - bodyLength / 2 - tailWidth, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY + tailHeight);
        // eye
        fill(200, 200, 255);
        ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
    };

    drawFish(10, 10, random(40, 160), random(40, 100), random(fishColor));
    drawFish(416, 100, random(40, 160), random(40, 100), random(fishColor));
    drawFish(162, 300, random(40, 160), random(40, 100), random(fishColor));
    drawFish(416, 300, random(40, 160), random(40, 100), random(fishColor));
    }
};

// 
// 
// 

// draw = function() {
//     fill(0, 255, 68); // start color

//     if (mouseIsPressed && mouseX > 50 && mouseX < 300 && mouseY < 250 && mouseY > 150) { 
//         fill(33, 112, 52); // click color
//     }
//     rect(50, 150, 250, 100);  // the button

//     // The button text
//     fill(0, 0, 0);
//     textSize(30);
//     text("PRESS ME!", 93, 193);
// };


// var sketchProc2 = function (processingInstance2) {
//     with (processingInstance2) {
//         size(50, 40);
//         frameRate(30);
//         background(32, 192, 192);
//         strokeWeight(2);
//         stroke(16, 176, 128);
//         line(256, 0, 256, 400);
//         line(0, 200, 512, 200);

//         rect2 = new RectButton2(150, 20, 100, buttoncolor, highlight);

//     var fishColor = color(random(255), random(255), random(255));

//     // add pebbles
//     $("#mycanvas2").on("click", function() {
//         var pebbleHeight = random(30, 40);
//         fill(mouseX, 90, 250);
//         strokeWeight(2);
//         stroke(random(255), random(255), random(255));
//         ellipse(mouseX, mouseY, pebbleHeight, pebbleHeight * random(1 / 2, 2 / 3));
//     });

//     // random fish gen
//     var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {
//         // body
//         stroke(250, 250, 250);
//         fill(bodyColor);
//         ellipse(centerX, centerY, bodyLength, bodyHeight);
//         // tail
//         var tailWidth = bodyLength / 4;
//         var tailHeight = bodyHeight / 2;
//         fill(bodyColor);
//         quad(centerX - bodyLength / 2, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY - tailHeight, centerX - bodyLength / 2 - tailWidth, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY + tailHeight);
//         // eye
//         fill(200, 200, 255);
//         ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
//     };

//     drawFish(10, 10, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(416, 100, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(162, 300, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(416, 300, random(40, 160), random(40, 100), random(fishColor));
//     }
// };


// var sketchProc3 = function (processingInstance3) {
//     with (processingInstance3) {
//         size(50, 40);
//         frameRate(30);
//         background(32, 192, 192);
//         strokeWeight(2);
//         stroke(16, 176, 128);
//         line(256, 0, 256, 400);
//         line(0, 200, 512, 200);

//         rect3 = new RectButton3(150, 20, 100, buttoncolor, highlight);

//     var fishColor = color(random(255), random(255), random(255));

//     // add pebbles
//     $("#mycanvas3").on("click", function() {
//         var pebbleHeight = random(30, 40);
//         fill(mouseX, 90, 250);
//         strokeWeight(2);
//         stroke(random(255), random(255), random(255));
//         ellipse(mouseX, mouseY, pebbleHeight, pebbleHeight * random(1 / 2, 2 / 3));
//     });

//     // random fish gen
//     var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {
//         // body
//         stroke(250, 250, 250);
//         fill(bodyColor);
//         ellipse(centerX, centerY, bodyLength, bodyHeight);
//         // tail
//         var tailWidth = bodyLength / 4;
//         var tailHeight = bodyHeight / 2;
//         fill(bodyColor);
//         quad(centerX - bodyLength / 2, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY - tailHeight, centerX - bodyLength / 2 - tailWidth, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY + tailHeight);
//         // eye
//         fill(200, 200, 255);
//         ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
//     };

//     drawFish(10, 10, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(416, 100, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(162, 300, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(416, 300, random(40, 160), random(40, 100), random(fishColor));
//     }
// };


// var sketchProc4 = function (processingInstance4) {
//     with (processingInstance4) {
//         size(50, 40);
//         frameRate(30);
//         background(32, 192, 192);
//         strokeWeight(2);
//         stroke(16, 176, 128);
//         line(256, 0, 256, 400);
//         line(0, 200, 512, 200);

//         rect4 = new RectButton4(150, 20, 100, buttoncolor, highlight);

//     var fishColor = color(random(255), random(255), random(255));

//     // add pebbles
//     $("#mycanvas4").on("click", function() {
//         var pebbleHeight = random(30, 40);
//         fill(mouseX, 90, 250);
//         strokeWeight(2);
//         stroke(random(255), random(255), random(255));
//         ellipse(mouseX, mouseY, pebbleHeight, pebbleHeight * random(1 / 2, 2 / 3));
//     });

//     // random fish gen
//     var drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {
//         // body
//         stroke(250, 250, 250);
//         fill(bodyColor);
//         ellipse(centerX, centerY, bodyLength, bodyHeight);
//         // tail
//         var tailWidth = bodyLength / 4;
//         var tailHeight = bodyHeight / 2;
//         fill(bodyColor);
//         quad(centerX - bodyLength / 2, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY - tailHeight, centerX - bodyLength / 2 - tailWidth, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY + tailHeight);
//         // eye
//         fill(200, 200, 255);
//         ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
//     };

//     drawFish(10, 10, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(416, 100, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(162, 300, random(40, 160), random(40, 100), random(fishColor));
//     drawFish(416, 300, random(40, 160), random(40, 100), random(fishColor));
//     }
// };

