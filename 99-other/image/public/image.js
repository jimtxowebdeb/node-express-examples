var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(10, 10, 100, 100);

var image = new Image();
// image.src = "data:image/  png;base64,iJmCC";
image.src = "zubirimanteo.png";

image.onload = function() {
    ctx.drawImage(image, 0, 0);
};