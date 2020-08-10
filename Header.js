'use strict';
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

var x = 5000;
var y = 5000;
var dx = 2;
var dy = 2;

let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

//gradient from W3schools//
var gradient = context.createRadialGradient(centerX, centerY - 200, 50, centerX, centerY - 200, 700);

gradient.addColorStop(0, "white");
gradient.addColorStop(0.01, "#03133B");
gradient.addColorStop(1, "#000007");

document.onmousemove = move;

function move(e) {
    console.log(e.pageX);
    context.fillStyle = Utils.hsla(Utils.randomNumber(10, 50), 100, 85, 100);;
    Utils.fillEllipse(e.pageX, e.pageY, Utils.randomNumber(-5, 5), Utils.randomNumber(-5, 5));
    console.log(e.pageX);
};

(function basicHeader() {
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    context.textAlign = "center";
    context.font = "bold 80pt Bebas Neue";
    context.fillStyle = "white";
    context.fillText("Amélie Detrez", centerX, centerY);
})();



(function moon() {
    //base moon//
    context.fillStyle = "#fff5d1";
    Utils.fillEllipse(centerX, centerY - 200, 50, 50);
})();

function drawStar() {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(x * Math.random(0, width), y * Math.random(0, height), 3, 0, Math.PI * 2);
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

setInterval(draw, Math.random(0, 30));