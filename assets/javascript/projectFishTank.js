
var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(512, 400);
        frameRate(30);
        background(0, 68, 136);
        // strokeWeight(2);
        // stroke(0, 0, 250);
        // line(256, 0, 256, 400);
        // line(0, 200, 512, 200);

    fishColor = color(random(255), random(255), random(255));

    // drawFish styleGen
    drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor) {
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
    }

    // render fish on the canvas
    drawFish(162, 100, random(40, 160), random(40, 100), random(fishColor));
    console.log(drawFish);
    drawFish(416, 100, random(40, 160), random(40, 100), random(fishColor));
    drawFish(162, 300, random(40, 160), random(40, 100), random(fishColor));
    drawFish(416, 300, random(40, 160), random(40, 100), random(fishColor));

    }
};

