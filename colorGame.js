var numSquares=6;
var colors=generateRandomcolor(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message"); 
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");


// var easyBtn=document.querySelector("#easyBtn");
// var hardBtn=document.querySelector("#hardBtn");


for (var i=0;i<modeButton.length;i++)
{
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");

		//this.textContent==="Easy"? numSquares=3 :numSquares=6;
		
		if (this.textContent==="Easy") {
			numSquares=3;
		}
		else{
			numSquares=6; 
		}
		reset();

		//how square to show
		//pick new color
		//pick a new pickedcolor
		//update page to reflect change

	});
}

function reset()
{
	//generate all new colors
	colors=generateRandomcolor(numSquares);
	//pick a new randon color from array
	pickedColor=pickColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New colors";
	messageDisplay.textContent="";
	//change colors to squares
	for(var i=0;i<squares.length;i++)
		{
			if(colors[i]){
				squares[i].style.display="block ";
				squares[i].style.backgroundColor=colors[i];			
			}
			else
			{
				squares[i].style.display="none";
			}
		}
	h1.style.backgroundColor="steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares=3;
// 	colors=generateRandomcolor(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++)
// 		{
// 			if (colors[i]) {
// 				squares[i].style.backgroundColor=colors[i];
// 			}else{
// 				squares[i].style.display="none";
// 			}		
// 		}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;
// 	colors=generateRandomcolor(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++)
// 		{
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
			
// 		}
// });

resetButton.addEventListener("click",function(){
	reset();

	// //generate all new colors
	// colors=generateRandomcolor(numSquares);
	// //pick a new randon color from array
	// pickedColor=pickColor();
	// //change color display to match picked color
	// colorDisplay.textContent=pickedColor;

	// resetButton.textContent="New colors";

	// messageDisplay.textContent="";
	// //change colors to squares
	// for(var i=0;i<squares.length;i++)
	// 	{
	// 		squares[i].style.backgroundColor=colors[i];
	// 	}
	// h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent=pickedColor;


for(var i=0;i<squares.length;i++)
{	//add initial color to square
	squares[i].style.backgroundColor=colors[i];
	//add click listener
	squares[i].addEventListener("click",function(){
	//grab color to picked color
	var clickedColor=this.style.backgroundColor;
	//compare color to pick color
	if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?"
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
	else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


function changeColor(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomcolor(num){
	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}


function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", "+ g + ", "+ b +")";
}