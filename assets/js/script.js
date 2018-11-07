var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");
ctx.fillStyle = "#0000ff";
ctx.fillRect(50,50,350,350);
ctx.beginPath();
ctx.moveTo(150,250);
ctx.quadraticCurveTo(225,200,300,250);
ctx.fillStyle = "grey"; // Définition de la couleur de remplissage
ctx.fill();
ctx.beginPath();
ctx.moveTo(150,250);
ctx.quadraticCurveTo(225,300,300,250);
ctx.fillStyle = "black"; // Définition de la couleur de remplissage
ctx.fill();
ctx.beginPath();
ctx.moveTo(200,227);
ctx.quadraticCurveTo(225,160,250,227);
ctx.fillStyle = "white"; // Définition de la couleur de remplissage
ctx.fill();
