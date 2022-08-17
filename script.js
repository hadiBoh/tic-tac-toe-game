//setup variables
let blocks = Array.from(document.querySelectorAll(".game-board div"));
let circleArray = [];
let crossArray = [];
var drawFlag =1;
var endGame =false;
var winCounter=0;
var winingPositionsX = [null,null,null];
var winingPositionsO = [null,null,null];
//wining states
const winPositions = [
	[0,1,2],
	[2,5,8],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[3,4,5],
	[2,4,6],
	[0,4,8]
]
var counter=0;
//add class to blocks
for(let i =0; i<blocks.length; i++){
	blocks[i].classList.add(i);
}
//add X and O and check for win
blocks.forEach(block=>{
	block.addEventListener("click",()=>{
		if (counter%2 != 0 && endGame == false 
			&& circleArray.some(circle=> circle == parseInt(block.classList)) == false 
			&& crossArray.some(circle=> circle == parseInt(block.classList)) == false ) {
			block.style.backgroundImage = "url('circle-black.jpg')"
			block.style.opacity = "1"
			block.style.cursor = "not-allowed"
			circleArray.push(parseInt(block.classList));
			for (var j = 0; j < winPositions.length; j++) {
				for (var i = 0; i < circleArray.length; i++) {
					if (winPositions[j][0] == circleArray[i]) {winCounter++; winingPositionsO[0] = circleArray[i]}
					if (winPositions[j][1] == circleArray[i]) {winCounter++; winingPositionsO[1] = circleArray[i]}
					if (winPositions[j][2] == circleArray[i]) {winCounter++; winingPositionsO[2] = circleArray[i]}
				}
				if (winCounter == 3) {
					var draw = document.querySelector(".draw");
					draw.style.color = "lightcoral";
					draw.innerHTML = "O Wins !";
					winingPositionsO.forEach(win=>{
						blocks[win].style.backgroundImage = "url('circle-red.jpg')"
						endGame = true;
						drawFlag =0;
					})
				}else{
					winCounter=0;
				}	
			}

			counter++;
		}else if(counter%2 == 0 && endGame == false
			&& circleArray.some(circle=> circle == parseInt(block.classList)) == false 
			&& crossArray.some(circle=> circle == parseInt(block.classList)) == false ){
			block.style.backgroundImage = "url('cross-black.jpg')"
			block.style.opacity = "1"
			block.style.cursor = "not-allowed"
			crossArray.push(parseInt(block.classList));
			for (var j = 0; j < winPositions.length; j++) {
				for (var i = 0; i < crossArray.length; i++) {
					if (winPositions[j][0] == crossArray[i]) {winCounter++; winingPositionsX[0] = crossArray[i]}
					if (winPositions[j][1] == crossArray[i]) {winCounter++; winingPositionsX[1] = crossArray[i]}
					if (winPositions[j][2] == crossArray[i]) {winCounter++; winingPositionsX[2] = crossArray[i]}
				}
				if (winCounter == 3) {
					var draw = document.querySelector(".draw");
					draw.style.color = "lightcoral";
					draw.innerHTML = "X Wins !";
					winingPositionsX.forEach(win=>{
						blocks[win].style.backgroundImage = "url('cross-red.jpg')"
						endGame = true;
						drawFlag = 0;
					})

				}else{
					winCounter=0;
				}	
			}
			counter++;
		}

		//check for draw
		
		if (crossArray.length == 5 && drawFlag == 1) {
			var draw = document.querySelector(".draw");
			draw.innerHTML = "Draw !";
		}
	})
})

//mouse hover effect
blocks.forEach(block=>{
	block.addEventListener("mouseover",()=>{
		if (counter%2 != 0 && endGame == false 
			&& circleArray.some(circle=> circle == parseInt(block.classList)) == false 
			&& crossArray.some(cross=> cross == parseInt(block.classList)) == false ) {
			block.style.backgroundImage = "url('circle-black.jpg')"
			block.style.opacity = "0.5"
			block.addEventListener("mouseout",()=>{
				if (circleArray.some(circle=> circle == parseInt(block.classList))
					||crossArray.some(cross=> cross == parseInt(block.classList))) {
					return;
				}else{
					block.style.backgroundImage = "";
				}
			})
		}else if(counter%2 == 0 && endGame == false
			&& circleArray.some(circle=> circle == parseInt(block.classList)) == false 
			&& crossArray.some(cross=> cross == parseInt(block.classList)) == false ){
			block.style.backgroundImage = "url('cross-black.jpg')"
			block.style.opacity = "0.5"
			block.addEventListener("mouseout",()=>{
				if (circleArray.some(circle=> circle == parseInt(block.classList))
					||crossArray.some(cross=> cross == parseInt(block.classList))) {
					return;
				}else{
					block.style.backgroundImage = "";
				}
			})
		}		
	})
})

/*
			circleArray.push(parseInt(block.classList));
			for (var j = 0; j < winPositions.length; j++) {
				winFlag.push(circleArray.some(circle=>(circle == winPositions[j][0])));
				winFlag.push(circleArray.some(circle=>(circle == winPositions[j][1])));
				winFlag.push(circleArray.some(circle=>(circle == winPositions[j][2])));
				if (winFlag[0] == true && winFlag[1] == true && winFlag[2] == true) {
					alert("O wins")
				}else {winFlag = [null,null,null];}	
			}
*/