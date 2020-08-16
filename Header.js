'use strict';
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

canvas.height = 750;

var x = 2500;
var y = 2500;
var dx = 2;
var dy = 2;

let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

//gradient from W3schools//
var gradient = context.createRadialGradient(centerX, centerY - 200, 50, centerX, centerY - 200, 600);

gradient.addColorStop(0, "white");
gradient.addColorStop(0.01, "lightyellow");
gradient.addColorStop(0.2, "#264396");
gradient.addColorStop(0.3, "#072370");
gradient.addColorStop(1, "#000007");

document.onmousemove = move;

(function moon() {
    context.fillStyle = "#fff5d1";
    Utils.fillEllipse(centerX, centerY - 200, 50, 50);
})();

(function basicHeader() {
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    context.textAlign = "center";
    context.font = "bold 80pt Bebas Neue";
    context.fillStyle = "white";
    context.fillText("Amélie Detrez", centerX, centerY);
})();

function move(e) {
    context.fillStyle = Utils.hsla(Utils.randomNumber(10, 50), 100, 85, 100);;
    context.beginPath();
    context.fillStyle = Utils.hsla(Utils.randomNumber(40, 60), 100, 90, Utils.randomNumber(10, 100));
    context.arc(e.pageX, e.pageY, Utils.randomNumber(1, 5), 0, Math.PI * 2);
    context.fill();
    context.closePath();
    context.fillStyle = "rgba(0,0,0, 0.1)";
    context.fillRect(0, 0, width, height);
    context.textAlign = "center";
    context.font = "bold 80pt Bebas Neue";
    context.fillStyle = gradient;
    context.fillText("Amélie Detrez", centerX, centerY);
};



function drawStar() {
    context.beginPath();
    context.fillStyle = Utils.hsla(Utils.randomNumber(40, 60), 100, 90, Utils.randomNumber(10, 100));
    context.arc(x * Math.random(0, width), y * Math.random(0, height), Utils.randomNumber(1, 5), 0, Math.PI * 2);
    context.fill();
    context.closePath();
}


function draw() {
    for (let i = 0; i < 5; i++) {
        drawStar();
        x += dy;
        y += dx;
    }
}

setInterval(draw, Math.random(0, 40));