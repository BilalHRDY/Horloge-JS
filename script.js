var container =  document.getElementById('container');

// Création des cercles du cadran:

var circles = []; 
var count=0;
for (var i = 0; i < 12; i++) {
	circles[count] = createBigCircle(20);
	circles[count+1] = createLittleCircle(20);
	circles[count+2]= createLittleCircle(20);
	circles[count+3] = createLittleCircle(20);
	circles[count+4] = createLittleCircle(20);

	container.append(circles[count],circles[count+1],circles[count+2],circles[count+3],circles[count+4]);
	count+=5;
	};

function createBigCircle(size){
	var bigCircle = document.createElement('div');
	bigCircle.style['width'] = size + 'px';
	bigCircle.style['height'] = size + 'px';
	bigCircle.style.borderRadius= '50%';
	bigCircle.style.backgroundColor= 'black';
	bigCircle.style.position = 'absolute';
	bigCircle.style['transform'] = 'translate(-50%, -50%)';
	
	return bigCircle;
	};

function createLittleCircle(size){
	var wraperDiv = document.createElement('div');
	wraperDiv.style['width'] = size + 'px';
	wraperDiv.style['height'] = size + 'px';
	wraperDiv.style.position = 'absolute';
	wraperDiv.style['transform'] = 'translate(-50%, -50%)';

	var circleInside = document.createElement('div');
	circleInside.style['width'] = (size/2) + 'px';
	circleInside.style['height'] = (size/2) + 'px';
	circleInside.style.borderRadius= '50%';
	circleInside.style.backgroundColor= 'black';
	circleInside.style.left= '25%';
	circleInside.style.top= '25%';
	circleInside.style.position = 'absolute';
	
	wraperDiv.appendChild(circleInside);
	return wraperDiv;
};

function positionCircle(element, angle){
	element.style.left= 50 + (45*Math.cos(angle)) + '%';
	element.style.top= 50 + (45*Math.sin(angle)) + '%';
};

for (var i = 0; i < circles.length; i++) {

	let angle = ((Math.PI*2) / circles.length) * i ;
	positionCircle(circles[i], angle);
};

// Création des nombres du cadran:

function createNumber(size, num){
	var number = document.createElement('div');
	number.style['width'] = size + 'px';
	number.style['height'] = size + 'px';
	number.style.position = 'absolute';
	number.textContent = num;
	number.style['transform'] = 'translate(-50%, -50%)';
	number.style['display'] = 'flex';
	number.style['justify-content'] = 'center';
	number.style['align-items'] = 'center';

	return number;
}

var numbers = []; 
for (var i = 0; i < 12; i++) {
	numbers[i] = createNumber(50, (i+1));
	
	container.appendChild(numbers[i]);

	};

function positionNumber(element, angle){
	element.style.left= 50 + (30*Math.cos(angle)) + '%';
	element.style.top= 50 + (30*Math.sin(angle)) + '%';
};

for (var i = 0; i < numbers.length; i++) {

	let angle = ((Math.PI*2) / numbers.length) * i ;
	positionNumber(numbers[i], angle);
};