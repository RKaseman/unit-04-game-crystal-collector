
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(512, 400);
        frameRate(30);
        background(0, 68, 136);
        strokeWeight(2);

        fishColor = color(random(255), random(255), random(255));

        // fish generator
        drawFish = function (centerX, centerY, bodyLength, bodyHeight, bodyColor) {
            var tailWidth = bodyLength / 4;
            var tailHeight = bodyHeight / 2;
            // body
            stroke(0, 32, 68);
            fill(bodyColor);
            ellipse(centerX, centerY, bodyLength, bodyHeight);
            // tail
            fill(bodyColor);
            quad(centerX - bodyLength / 2, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY - tailHeight, centerX - bodyLength / 2 - tailWidth, centerY, centerX - bodyLength / 1.5 - tailWidth, centerY + tailHeight);
            // eye
            fill(192, 192, 248);
            ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
        };

        // render fish on the canvas
        $("#button1").click(function () {
            noStroke();
            fill(0, 68, 136);
            rect(0, 0, 256, 200);
            drawFish(162, 100, random(40, 160), random(40, 100), random(fishColor));
        });
        drawFish(416, 100, random(40, 160), random(40, 100), random(fishColor));
        drawFish(162, 300, random(40, 160), random(40, 100), random(fishColor));
        drawFish(416, 300, random(40, 160), random(40, 100), random(fishColor));

        var y = 48;
        draw = function () {
            if (y > 0) {
                fill(0, 68, 136);
                rect(152, 0, 64, 56);
                fill(255, 0, 0);
                ellipse(192, y, 10, 10);
                y = y - 1;
                console.log("y: " + y);
            };
        };

    };
};

