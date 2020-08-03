'use strict';
import context from "./context/context.js";
import * as Utils from "./context/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

document.onmousemove = move;

function move(e) {
    context.fillRect(0, 0, width, height);
    console.log(e.pageX);
    Utils.fillArc(e.pageX, e.pageY, 50, 0, 2 * Math.PI);
    Utils.fillArc(e.pageX, e.pageY, 150, 0, 2 * Math.PI);
    context.stroke();
};

(function header() {
    context.fillRect(0, 0, width, height);
    context.textAlign = "center";
    context.font = "bold 80pt Bebas Neue";
    context.fillStyle = "white";
    context.fillText("Amélie Detrez", width / 2, height / 2);
})();