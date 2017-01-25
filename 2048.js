var game = (function (){
	if(localStorage.getItem('flagStance')){
		var flag = true;
	}
	else{
    var flag = false;
	}

    //recalling local game
    if(!flag){
    var arr=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	}
	else{
		var fetch = localStorage.getItem('current-matrix');
		var arr = JSON.parse(fetch);
		var highscore = localStorage.getItem('high-Score');
	}

	//recalling local score
    var score = 0;

	//recalling high score
    if(localStorage.getItem('high-Score') > 0){
    	var highscore = localStorage.getItem('high-Score');
    }
    else{
    localStorage.setItem('high-Score', '0');
    var highscore = localStorage.getItem('high-Score');
    
}
		

    function randomNumber(){
    	var locat = Math.floor((Math.random() * 16));
    	return locat;
    }


    function random(){
    	var num = Math.floor((Math.random() * 10) + 1);
    	var locat = randomNumber();
    	
    	var row = Math.floor(locat/4);
    	
    	var column = locat%4;
    	
    	var count = 0;
    	while(arr[row][column] >0 ){
    		var locat = randomNumber();
    		var row = Math.floor(locat/4);
    		var column = locat%4;
    		count++;
    		if(count == 5000){
    			gameover();
    		}
    		}
    		if(count<5000){
    	if(num<8){
    		arr[row][column] = 2;

    	}
    	else{
    		arr[row][column] = 4;
    	}
    }
    	
    }

    function gameover(){
    		alert("gameover");
    		newGame();
    }


    function left(){
    	//pushing all zeroes to right
    	
    	for(var i=0;i<4;i++){
    	  var count = 0;
    	  
    	  for(var j=0;j<4;j++){
    		if(arr[i][j] != 0 ){
    			arr[i][count++]=arr[i][j];
    		}
    	}
    	while(count<4){
    		arr[i][count++] = 0;
    	}
    	
		}

		//combining conescutive elements!
    	for (var i = 0; i < 4; i++) {
    		for(var j = 0;j<3;j++){
    			if(arr[i][j] > 0){
    				if(arr[i][j] == arr[i][j+1]){
    					arr[i][j]=arr[i][j]*2;
    					arr[i][j+1] = 0;
    					score += arr[i][j];
    					
    				}
    			}
    		}
    	}

    	//pushing all zeroes to right again
    	for(var i=0;i<4;i++){
    	  var count = 0;
    	  for(var j=0;j<4;j++){
    		if(arr[i][j] != 0 ){
    			arr[i][count++]=arr[i][j];
    		}
    	}
    	while(count<4){
    		arr[i][count++] = 0;
    	}
		}
    }


    function right(){

    	for(var i=0;i<4;i++){
    	  var count = 3;
    	  for(var j=3;j>=0;j--){
    		if(arr[i][j] != 0 ){
    			arr[i][count--]=arr[i][j];
    		}
    	}
    	while(count>=0){
    		arr[i][count--] = 0;
    	}
		}

    	for (var i = 0; i < 4; i++) {
    		for(var j = 3;j>0;j--){
    			if(arr[i][j] > 0){
    				if(arr[i][j] == arr[i][j-1]){
    					arr[i][j]=arr[i][j]*2;
    					arr[i][j-1] = 0;
    					score += arr[i][j];
    					
    				}
    			}
    		}
    	}
    	for(var i=0;i<4;i++){
    	  var count = 3;
    	  for(var j=3;j>=0;j--){
    		if(arr[i][j] != 0 ){
    			arr[i][count--]=arr[i][j];
    		}
    	}
    	while(count>=0){
    		arr[i][count--] = 0;
    	}
		}
    	
    }
   
  function up(){
  	for(var i=0;i<4;i++){
    	  var count = 0;
    	  for(var j=0;j<4;j++){
    		if(arr[j][i] != 0 ){
    			arr[count++][i]=arr[j][i];
    		}
    	}
    	while(count<4){
    		arr[count++][i] = 0;
    	}
		}
    	for (var i = 1; i < 4; i++) {
    		for(var j = 0;j<4;j++){
    			if(arr[i][j] > 0){
    				if(arr[i][j] == arr[i-1][j]){
    					arr[i-1][j]=arr[i][j]*2;
    					arr[i][j] = 0;
    					score += arr[i-1][j];
    					
    				}
    			}
    		}
    	}
    	for(var i=0;i<4;i++){
    	  var count = 0;
    	  for(var j=0;j<4;j++){
    		if(arr[j][i] != 0 ){
    			arr[count++][i]=arr[j][i];
    		}
    	}
    	while(count<4){
    		arr[count++][i] = 0;
    	}
		}
    	
    }
    function down(){
    	for(var i=0;i<4;i++){
    	  var count = 3;
    	  for(var j=3;j>=0;j--){
    		if(arr[j][i] != 0 ){
    			arr[count--][i]=arr[j][i];
    		}
    	}
    	while(count>=0){
    		arr[count--][i] = 0;
    	}
		}

    	for (var i = 0; i < 4; i++) {
    		for(var j = 3;j>0;j--){
    			if(arr[j][i] > 0){
    				if(arr[j][i] == arr[j-1][i]){
    					arr[j][i]=arr[j][i]*2;
    					arr[j-1][i] = 0;
    					score += arr[j][i];
    					
    				}
    			}
    		}
    	}

    	for(var i=0;i<4;i++){
    	  var count = 3;
    	  for(var j=3;j>=0;j--){
    		if(arr[j][i] != 0 ){
    			arr[count--][i]=arr[j][i];
    		}
    	}
    	while(count>=0){
    		arr[count--][i] = 0;
    	}
		}
    	
    }
    function scoreUpdate(){
    	var ele = document.getElementById('score-display');
    	var dis = ele.firstElementChild;
    	dis.innerHTML = score;
    }

function highScore(){
	var ele = document.getElementById('highscore-display');
	var dis =  ele.firstElementChild;
	
	if(score>highscore){
		highscore = score;
	    localStorage.setItem("high-Score", highscore);
	}
	dis.innerHTML = highscore;
}


function main(e){
		updateundo();
	var s = e.keyCode;
		
		switch (s){
			case 37:
				flag = true;
				localStorage.setItem('flagStance','flag');
				left();
				random();
				break;
			case 39:
				flag = true;
				localStorage.setItem('flagStance','flag');
				right();
				random();
				break;
			case 38 :
				flag = true;
				localStorage.setItem('flagStance','flag');
				up();
				random();
				break;
			case 40:
				flag = true;
				localStorage.setItem('flagStance','flag');
				down();
				random();
				break;
		}
		
		display();
		scoreUpdate();
		highScore();
		updateCurrentMatrix();

	}
	function updateCurrentMatrix(){
		var currentMatrix = JSON.stringify(arr);
		localStorage.setItem('current-matrix',currentMatrix);
	}

	function updateundo(){
		var js = JSON.stringify(arr);
		localStorage.setItem('matrix',js);	
	}
		function display(){
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				var element = document.getElementById((4*i)+j +'');
				var par = element.firstElementChild;
				
				par.innerHTML = arr[i][j];

				element.className = ('block');
				element.className += (' class' + arr[i][j]);
			
		}
		}
	}
	
	function Undo(){
		console.log("in function");
		var fetch = localStorage.getItem('matrix');
		arr = JSON.parse(fetch);
		
		display();

	}

	function newGame(){
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				arr[i][j] = 0;
				var element = document.getElementById((4*i)+j +'');
				element.className = ('block');
			}
		}
		score = 0;
		localStorage.setItem("Score",score);
		display();
	}




	return {
		init : function(){
			display();
			
			window.addEventListener('keydown',main);
			var undoGame = document.getElementById('undo');
			undoGame.addEventListener('click',Undo);
			
			var new_game = document.getElementById('New-Game');
			new_game.addEventListener('click',newGame);
			
		}
	};
})();