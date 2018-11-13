
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(512, 400);
        frameRate(30);
        background(0, 34, 102);
        strokeWeight(2);

        fishColor = color(random(255), random(255), random(255));
        var y = 48;

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

        // on button click, randomizes fish appearance
        $("#button1").click(function () {
            console.log("this: " + this.id)
            noStroke();
            fill(0, 34, 102);
            rect(0, 0, 256, 200);
            drawFish(162, 100, random(40, 160), random(64, 72), random(fishColor));
        });

        $("#button2").click(function () {
            console.log("this: " + this.id)
            noStroke();
            fill(0, 34, 102);
            rect(256, 0, 256, 200);
            drawFish(416, 100, random(40, 160), random(64, 72), random(fishColor));
        });

        $("#button3").click(function () {
            console.log("this: " + this.id)
            noStroke();
            fill(0, 34, 102);
            rect(0, 200, 256, 200);
            drawFish(162, 300, random(40, 160), random(64, 72), random(fishColor));
        });

        $("#button4").click(function () {
            console.log("this: " + this.id)
            noStroke();
            fill(0, 34, 102);
            rect(256, 200, 256, 200);
            drawFish(416, 300, random(40, 160), random(64, 72), random(fishColor));
        });

        // render fish on the canvas
        drawFish(162, 100, random(40, 160), random(64, 72), random(fishColor));
        drawFish(416, 100, random(40, 160), random(64, 72), random(fishColor));
        drawFish(162, 300, random(40, 160), random(64, 72), random(fishColor));
        drawFish(416, 300, random(40, 160), random(64, 72), random(fishColor));

    };
};

