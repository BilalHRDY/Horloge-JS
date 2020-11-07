var container =  document.getElementById('container');


var circles = []; 
var count=0;
for (var i = 0; i < 12; i++) {
	circles[count] = createBigCircle(20);
	circles[count+1] = createLittleCircle(20);
	circles[count+2]= createLittleCircle(20);
	circles[count+3] = createLittleCircle(20);
	circles[count+4] = createLittleCircle(20);

	container.append(circles[count],circles[count+1],circles[count+2],circles[count+3],circles[count+4]);
	console.log(circles);
	count+=5;
	};

function createBigCircle(size){
	var circle1 = document.createElement('div');
	circle1.style['width'] = size + 'px';
	circle1.style['height'] = size + 'px';
	circle1.style.borderRadius= '50%';
	circle1.style.backgroundColor= 'black';
	circle1.style.position = 'absolute';
	circle1.style['transform'] = 'translate(-50%, -50%)';
	
	return circle1;
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
	element.style.left= 50 + (40*Math.cos(angle)) + '%';
	element.style.top= 50 + (40*Math.sin(angle)) + '%';
};

for (var i = 0; i < circles.length; i++) {

	let angle = ((Math.PI*2) / circles.length) * i ;
	positionCircle(circles[i], angle);
};