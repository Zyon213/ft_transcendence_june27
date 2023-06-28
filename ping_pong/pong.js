var canvas = document.getElementById("pong");
var context = canvas.getContext("2d");
// variable for the player
var rectX = 0;

// canvas draw rate
var framePerSecond = 50;
// draw the rectangle
function drawRect(x, y, w, h, color) {
	context.fillStyle = color;
	context.fillRect(x, y, w, h);
}

// Draw the circle
function drawCircle(x, y, r, color) {
	context.fillStyle = color;
	context.beginPath();
	context.arc(x, y, r, 0, Math.PI * 2, true);
	context.closePath();
	context.fill();
}

// Draw the text
function drawText(text, x, y, color) {
	context.fillStyle = color;
	context.font = '75px fantasy';
	context.fillText(text, x, y);
}

// Draw a moving rectangle
function renderRect(){
	drawRect(0, 0, 600, 400, 'black');
	drawRect(rectX, 0, 100, 100, 'white');
	rectX += 100;
}

// Define the player initial values
var player = {
	x : 0,
	y : canvas.height/ 2 - 100/2,
	width : 10, 
	height : 100, 
	color : 'white',
	score : 0
}

// Define the computer initial values
var com = {
	x : canvas.width - 10,
	y : canvas.height/ 2 - 100/2,
	width : 10, 
	height : 100, 
	color : 'white',
	score : 0
}

// Define the net values
var net = {
	x : canvas.width / 2 - 2 / 2,
	y : 0,
	width : 2,
	height : 10,
	color : 'white'
}

// Define the ball initial values
var ball = {
	x : canvas.width / 2,
	y : canvas.height / 2,
	radius : 10,
	speed : 5,
	velocityX : 5,
	velocityY : 5,
	color : 'white'
}
// Draw the net
function drawNet() {
	for (var i = 0; i <= canvas.height; i+=15){
		drawRect(net.x, net.y + i, net.width, net.height, net.color);
	}
}

// reset the position of the ball after one of score
function resetBall() {
	ball.x = canvas.width / 2;
	ball.y = canvas.height / 2;
	ball.speed = 5;
	ball.velocityX = -ball.velocityX;
}

// event handler for the com
canvas.addEventListener('mousemove', movePaddle);

function movePaddle(evt) {
	let rect = canvas.getBoundingClientRect();
	player.y = evt.clientY - rect.top - player.height / 2; 
}

// movement of the ball
function update(){

	// increase the score value if the com scores
	if (ball.x - ball.radius < 0) {
		com.score++;
		resetBall();
	}
	// if the player score increment the player score
	else if (ball.x + ball.radius > canvas.width) {
		player.score++;
		resetBall();
	}
		
	ball.x += ball.velocityX; 
	ball.y += ball.velocityY; 

	// control the compupter paddle
	let computerLevel = 0.1;
	com.y += (ball.y - (com.y + com.height / 2)) * computerLevel;

	if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
		ball.velocityY = -ball.velocityY;
	}


	//check if the ball is hit by the user or the com
	let user = (ball.x + ball.radius < canvas.width / 2) ? player : com;
	if (collision(ball, user)) {
		// collision point where ball and player become 0
		let collidePoint = (ball.y - (user.y + user.height / 2));
		collidePoint = collidePoint / (user.height / 2);

		// convert to radian
		let angleRad = (Math.PI / 4) * collidePoint;

		// get the direction of the ball hit from the player or the com
		let direction = (ball.x + ball.radius < canvas.width / 2) ? 1 : -1;

		// calculate the velocity of the ball speed and direction
		ball.velocityX = direction * ball.speed * Math.cos(angleRad);
		ball.velocityY = direction * ball.speed * Math.sin(angleRad);

		// every time the ball bounce back increment the speed
		ball.speed += 0.1; 
	}


}

// collision detection between ball and players
function collision(ball, player) {
	// get all the sides of player where collision might occur
	player.top = player.y;
	player.bottom = player.y + player.height;
	player.left = player.x;
	player.right = player.x + player.width;

	// calculate all the inside of the ball where collision might occur
	ball.top = ball.y - ball.radius;
	ball.bottom = ball.y + ball.radius;
	ball.left = ball.x - ball.radius;
	ball.right = ball.x + ball.radius;
	
 
	return ball.right > player.left && ball.top < player.bottom && ball.left < player.right && ball.bottom > player.top;
}
function render(){
	// Draw the canvas
	drawRect(0, 0, canvas.width, canvas.height, 'black');
	// Draw the player and com score
	drawText(player.score, canvas.width / 4, canvas.height / 5, 'white');
	drawText(com.score, 3 *canvas.width / 4, canvas.height / 5, 'white');
	// Draw the net
	drawNet();
	// Draw the player
	drawRect(player.x, player.y, player.width, player.height, player.color);
	// Draw the com
	drawRect(com.x, com.y, com.width, com.height, com.color);
	// Draw the ball
	drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

function game() {
	update();
	render();
}

let loop = setInterval(game, 1000 / framePerSecond);