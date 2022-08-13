canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_image_width = 75;
greencar_image_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	background_img_Tag = new Image();
    background_img_Tag.onload = uploadBackground;
	background_img_Tag.src = background_image;

	greencar_img_Tag = new Image();
    greencar_img_Tag.onload = uploadgreencar;
	greencar_img_Tag.src = greencar_image;
}
function uploadBackground() {
	ctx.drawImage(background_img_Tag,0,0,canvas.height,canvas.width);

}

function uploadgreencar() {
	ctx.drawImage(greencar_img_Tag,greencar_x,greencar_y,greencar_width,canvas_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){
		greencar_y = greencar_y-10;
		console.log("When up arrow is pressed, x ="+ greencar_x +" | y ="+ greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y >=0){
		greencar_y = greencar_y+10;
		console.log("When down arrow is pressed, x ="+ greencar_x +" | y ="+ greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x >=0){
		greencar_x = greencar_x-10;
		console.log("When down arrow is pressed, x ="+ greencar_x +" | y ="+ greencar_y);
		uploadBackground();
		uploadgreencar();
}}

function right()
{
	if(greencar_x >=0){
		greencar_x = greencar_x+10;
		console.log("When down arrow is pressed, x ="+ greencar_x +" | y ="+ greencar_y);
		uploadBackground();
		uploadgreencar();
	}}
