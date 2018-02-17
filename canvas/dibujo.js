var = d =document.getElementById("dibujito");
var lienzo; = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(10,10);
lienzo.lineTo(10,290);
lienzo.lineTo(290,290);
lienzo.lineTo(290,10);
lienzo.lineTo(10,10);
lienzo.stroke();
lienzo.closePath();
