function setup() {
	createCanvas(windowWidth, windowHeight);
	
	updateTheme();
	onThemeChange((newTheme) => {});
	
}

function draw() {
	background(theme.bg)
}

function update(deltaTime) {
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {}
function touchEnded() {}
function touchMoved() {}