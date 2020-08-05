'use strict';
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let centerX = width / 2;
let centerY = height / 2;

document.onmousemove = move;

(function basicHeader() {
    context.fillRect(0, 0, width, height);
    context.textAlign = "center";
    context.font = "bold 80pt Bebas Neue";
    context.fillStyle = "white";
    context.fillText("Amélie Detrez", centerX, centerY);
})();

function move(e) {
    console.log(e.pageX);
    context.fillStyle = "white";
    Utils.fillEllipse(e.pageX, e.pageY, Utils.randomNumber(-25, 5), Utils.randomNumber(-25, 5));
};