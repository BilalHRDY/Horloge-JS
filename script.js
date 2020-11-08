var container =  document.getElementById('container');

// Création et positionnement des cercles dans le cadran:

var listCircles = []; 
var count=0;
for (var i = 0; i < 12; i++) {
	listCircles[count] = createBigCircle(3);
	listCircles[count+1] = createLittleCircle(1);
	listCircles[count+2]= createLittleCircle(1);
	listCircles[count+3] = createLittleCircle(1);
	listCircles[count+4] = createLittleCircle(1);

	container.append(listCircles[count],listCircles[count+1],listCircles[count+2],
		listCircles[count+3],listCircles[count+4]);
	count+=5;
	};

function createBigCircle(size){
	var bigCircle = document.createElement('div');
	bigCircle.style['width'] = size + '%';
	bigCircle.style['height'] = size + '%';
	bigCircle.style.borderRadius= '50%';
	bigCircle.style.backgroundColor= 'black';
	bigCircle.style.position = 'absolute';
	bigCircle.style['transform'] = 'translate(-50%, -50%)';
	
	return bigCircle;
	};

function createLittleCircle(size){
	var littleCircle = document.createElement('div');
	littleCircle.style['width'] = size + '%';
	littleCircle.style['height'] = size + '%';
	littleCircle.style.borderRadius= '50%';
	littleCircle.style.backgroundColor= 'black';
	littleCircle.style.position = 'absolute';
	littleCircle.style['transform'] = 'translate(-50%, -50%)';

	return littleCircle;
};

function positionCircle(element, angle){
	element.style.left= 50 + (45*Math.cos(angle)) + '%';
	element.style.top= 50 + (45*Math.sin(angle)) + '%';
};

for (var i = 0; i < listCircles.length; i++) {
	let angle = ((Math.PI*2) / listCircles.length) * i ;
	positionCircle(listCircles[i], angle);
};




// Création et positionnement des nombres dans le cadran:

function createNumber(num){
	var numberDiv = document.createElement('div');
	numberDiv.style.position = 'absolute';
	numberDiv.textContent = num;
	numberDiv.style['font-size'] = '5vw';
	numberDiv.style['transform'] = 'translate(-50%, -50%)';

	return numberDiv;
}

var listNumberDiv = []; 
for (var i = 0; i < 12; i++) {
	let numberInOrder=[3,4,5,6,7,8,9,10,11,12,1,2]
	listNumberDiv[i] = createNumber(numberInOrder[i]);
	
	container.appendChild(listNumberDiv[i]);

	};

function positionNumber(element, angle){
	element.style.left= 50 + (38*Math.cos(angle)) + '%';
	element.style.top= 50 + (38*Math.sin(angle)) + '%';
};

for (var i = 0; i < listNumberDiv.length; i++) {

	let angle = ((Math.PI*2) / listNumberDiv.length) * i ;
	positionNumber(listNumberDiv[i], angle);
};


// Création des aiguilles:

var needleSecond = documentcreateElement('div');
needleSecond.style

