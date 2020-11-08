var container =  document.getElementById('container');
let log = console.log;


// Création et positionnement des cercles sur le cadran:

function createCircle(size){
	var circle = document.createElement('div');
	circle.style['width'] = size + '%';
	circle.style['height'] = size + '%';
	circle.style['borderRadius']= '50%';
	circle.style['backgroundColor']= 'black';
	circle.style['position'] = 'absolute';
	circle.style['transform'] = 'translate(-50%, -50%)';
	
	return circle;
	};

var listCircles = []; 
var count=0;
for (var i = 0; i < 12; i++) {    // Création des 60 cercles du cadran avec ce pattern : 1 grand pour 4 petits
	listCircles[count] = createCircle(3);
	listCircles[count+1] = createCircle(1);
	listCircles[count+2]= createCircle(1);
	listCircles[count+3] = createCircle(1);
	listCircles[count+4] = createCircle(1);

	container.append(listCircles[count],listCircles[count+1],listCircles[count+2],
		listCircles[count+3],listCircles[count+4]);
	count+=5;
	};

function positionCircle(circle, angle){
	circle.style['left']= 50 + (45*Math.cos(angle)) + '%';
	circle.style['top']= 50 + (45*Math.sin(angle)) + '%';
};

for (var i = 0; i < listCircles.length; i++) {
	let angle = ((Math.PI*2) / listCircles.length) * i ;
	positionCircle(listCircles[i], angle);
};


// Création et positionnement des nombres sur le cadran:

function createNumber(num){
	var numberDiv = document.createElement('div');
	numberDiv.style['position'] = 'absolute';
	numberDiv.style['font-size'] = '5vw';
	numberDiv.style['transform'] = 'translate(-50%, -50%)';
	numberDiv.textContent = num;

	return numberDiv;
};

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



// Configuration des deux aiguilles:

var needleSec = document.getElementById('needleSec');
var needleHour = document.getElementById('needleHour');

var d = new Date();
var secondsCurrent = d.getSeconds();
var minutesCurrent = d.getMinutes();
var hoursCurrent = d.getHours();

var angleStepSec = 360/60; 	// L'angle qui va être appliqué à l'aiguille à chaque intervalle
var angleStepHour = 360/720;

var positionNeedleSec = angleStepSec*secondsCurrent + 180; // On ajoute 180 degrés pour annuler le positionnement de l'aiguille par défaut à 6h
var positionNeedleHour = (360/12)*hoursCurrent + angleStepHour*minutesCurrent + 180;

function setNeedlePosition(needle, angle){        
	needle.style.setProperty("--angle", `${angle}deg`);
}

setNeedlePosition(needleSec,positionNeedleSec);   // On initialise le placement des aiguilles sur le cadran avec l'heure actuelle
setNeedlePosition(needleHour,positionNeedleHour);

let activeNeedleSec = setInterval(function(){

    needleSec.style.setProperty("--angle", `${positionNeedleSec}deg`);
    positionNeedleSec += angleStepSec;
	}, 1000); // 1000ms = 1 seconde

let activeNeedleHour = setInterval(function(){ 
 	
    needleHour.style.setProperty("--angle", `${positionNeedleHour}deg`);
    positionNeedleHour += angleStepHour;
	}, 60000); // 60000ms = 1 minute 




