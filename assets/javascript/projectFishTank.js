
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(512, 400);
        frameRate(30);

        background(32, 192, 192);

        var fishColor = color(random(255), random(255), random(255));

        // add pebbles
        mouseClicked = function () {
            var pebbleHeight = random(30, 40);
            fill(mouseX, 90, 250);
            strokeWeight(2);
            stroke(random(255), random(255), random(255));
            ellipse(mouseX, mouseY,
                pebbleHeight, pebbleHeight * random(1 / 2, 2 / 3));
        };

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
            quad(centerX - bodyLength / 2, centerY,
                centerX - bodyLength / 1.5 - tailWidth, centerY - tailHeight,
                centerX - bodyLength / 2 - tailWidth, centerY,
                centerX - bodyLength / 1.5 - tailWidth, centerY + tailHeight);
            // eye
            fill(200, 200, 255);
            ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
        };

        drawFish(random(50, 300), 40,
            random(40, 160), random(40, 100), random(fishColor));
        drawFish(random(50, 200), 80,
            random(40, 160), random(40, 100), random(fishColor));
        drawFish(random(50, 300), 120,
            random(40, 160), random(40, 100), random(fishColor));
        drawFish(random(50, 400), 160,
            random(40, 160), random(40, 100), random(fishColor));
        drawFish(random(50, 100), 200,
            random(40, 160), random(40, 100), random(fishColor));
        drawFish(random(50, 200), 240,
            random(40, 160), random(40, 100), random(fishColor));
        drawFish(random(50, 300), 280,
            random(40, 160), random(40, 100), random(fishColor));
        drawFish(random(50, 400), 320,
            random(40, 160), random(40, 100), random(fishColor));
    }
};

