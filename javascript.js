//Pacmanin sijainti
var posRow=2, posCel=1;
const maxRow=2, maxCel=2;
function movePacMan(){
	document.getElementById("playground").rows[posRow].cells[posCel].innerHTML='<img src="./kuvat/pacman.png">';
}
function clearCell(){
	document.getElementById("playground").rows[posRow].cells[posCel].innerHTML='';
}

function moveUp(){
	clearCell();
	if( posRow == 0 ){
		posRow = maxRow;
	}else{
		posRow--;
	}
	movePacMan();
}

function run(){
	document.addEventListener('keydown', 
		function(event) {
			switch( event.code ){
				case "KeyW": moveUp();
				break;
			}
			console.log(event.code);
		}
	);
	movePacMan();
}
