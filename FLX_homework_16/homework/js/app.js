// task 1
function assign(target) {
	if (!target || target === null) {
        return console.error('Type error of converting target object');
    }
    let outputObj = Object(target);
	let nextSource = 0;
	for (let i = 0; i < arguments.length; i++) {
		nextSource = arguments[i];
		if(nextSource !== undefined || nextSource !== null) {
			for(let key in nextSource) {
				if (nextSource.hasOwnProperty(key)) {
                    outputObj[key] = nextSource[key];
                }
			}
		}
	}
	return outputObj;
}

// let defaults = { a: 123, b: 777 };
// let options = { a: 456 };
// let configs = assign({}, defaults, options); // {a: 456, b: 777}
// console.log(configs);


// task 2
function Bot(obj) {
	this.name = obj.name;
	this.defaultSpeed = obj.speed;
	this.speed = obj.speed;
	this.x = obj.x;
	this.y = obj.y;
	this.type = 'Bot';
}

Bot.prototype.getSpeed = function() {
	return this.speed;
}

Bot.prototype.setSpeed = function(newSpeed) {
	if(newSpeed > 0 && isFinite(newSpeed)) {
		this.speed = newSpeed;
	} else {
		console.log('wrong input when trying to set speed.');
	}
}

Bot.prototype.getDefaultSpeed = function() {
	return this.defaultSpeed;
}

Bot.prototype.getCoordinates = function() {
	return {x: this.x, y: this.y};
}

Bot.prototype.setCoordinates = function(newX, newY) {
	if(isFinite(newX) && isFinite(newY)) {
		this.x = newX;
		this.y = newY;
	} else {
		console.log('wrong input when trying to set coordinates.')
	}
}

Bot.prototype.move = function(course) {
	switch(course) {
		case 'left': this.x -= this.speed; break;
		case 'right': this.x += this.speed; break;
		case 'up': this.y += this.speed; break;
		case 'down': this.y -= this.speed; break;
		default: console.log('Wromg input. You can use only right, left, up and down values.')
	}
}

Bot.prototype.showPosition = function() {
	let template = `I am ${this.type} ${this.name}. I am located at ${this.x}:${this.y}.`;
	console.log(template);
}


function Racebot(obj) {
	Bot.call(this, obj);
	this.prevCourse = null;
	this.type = 'Racebot';	
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function(course) {
	this.prevCourse === course ? this.setSpeed(this.getSpeed() + 1) : this.setSpeed(this.defaultSpeed);
	Bot.prototype.move.call(this, course);
	this.prevCourse = course;
}

function Speedbot(obj) {
	Bot.call(this, obj);
	this.type = 'Speedbot';
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;

Speedbot.prototype.prepareEngine = function() {
	this.setSpeed(this.getSpeed() + 2 );
}

Speedbot.prototype.move = function(course) {
	Bot.prototype.move.call(this, course);

	if(this.speed > this.defaultSpeed) {
		this.setSpeed(this.getSpeed() - 1);
	} 
}


// let Botty = new Bot({name: 'Betty', speed: 2, x: 0, y: 1});
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
// Botty.move('left');
// Botty.move('down');
// Botty.move('up');
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.

// let Zoom = new Racebot({name: 'Lightning', speed: 2, x: 0, y: 1});
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
// Zoom.move('left');
// Zoom.move('down');
// Zoom.move('up');
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.

// let Broom = new Speedbot({name: 'Thunder', speed: 2, x: 0, y: 1});
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
// Broom.prepareEngine();
// Broom.move('left');
// Broom.move('down');
// Broom.move('up');
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.



