//Pacmanin sijainti
var posRow=1, posCel=1;
const maxRow=2, maxCel=2;
function movePacMan(){
	document.getElementById("playground").rows[posRow].cells[posCel].innerHTML='<img src="./kuvat/pacman.png">';
}
function clearCell(){
	document.getElementById("playground").rows[posRow].cells[posCel].innerHTML='';
}

function isCellEmpty(r, c){
	var paikka = document.getElementById("playground").rows[r].cells[c].innerHTML;
	if( paikka.indexOf("brick.jpg") == -1){
		posRow = r;
		posCel = c;
	}
}

function moveUp(){
	var x = posRow;
	if( x == 0 ){
		x = maxRow;
	}else{
		x--;
	}
	isCellEmpty(x, posCel);
}
function moveDown(){
	var x = posRow;
	if( x == maxRow ){
		x = 0;
	}else{
		x++;
	}
	isCellEmpty(x, posCel);
}

function run(){
	document.addEventListener('keydown', 
		function(event) {
			clearCell();
			switch( event.code ){
				case "KeyW": moveUp();
				break;
				case "KeyS": moveDown();
				break;			
			}
			movePacMan();
			console.log(event.code);
		}
	);
	movePacMan();
}
