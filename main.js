var c;
var cc;

var scl = 15;

var map = {
	x: Math.floor(1280/scl),
	y: Math.floor(720/scl) - 1,
	map: [[]],

	initMap: function() {
		console.log(map.x + ", " + map.y);
		for (var x = 0; x <= map.x; x++) {
			for (var y = 0; y <= map.y; y++) {
				map.map[[x, y]] = '0';
			}
		}
		map.map[[0, 47]] = '1';
	},

	renderMap: function() {
		cc.font = "15px Courier New";
		cc.fillStyle = "white";
		for (var x = 0; x <= map.x; x++) {
			for (var y = 0; y <= map.y; y++) {
				switch (map.map[[x, y]]) {
					case '0': cc.fillText('_', x*scl + 5, y*scl + 10); break;
					case '1': cc.fillText('@', x*scl + 5, y*scl + 10); break;
				}
			}
		}
	}

};

window.onload = function() {
	c = document.getElementById('gc');
	cc = c.getContext('2d');

	init();
	setInterval(update, 1000/60);
};

function init() {
	map.initMap();
}

function update() {
	render();
}

function render() {
	cc.fillStyle = 'black';
	cc.fillRect(0, 0, c.width, c.height);
	map.renderMap();
}
