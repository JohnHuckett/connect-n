

	function pulseAnimation(winningRowCells,max,min,color,timeOutDelay,targetName,repeatCount){
		var winningRowCellsLength = winningRowCells.length;
		console.log(winningRowCells);
		var size = max;
		var halfMax = max/2;
		var i =0;
		var delay = timeOutDelay;
		repeatCounter = 0;
		if(animate = true){
			delayShrink();
		}

		function delayGrow(){
			setTimeout(grow, delay);
		}

		function delayShrink(){
			setTimeout(shrink, delay);
		}
		

		function grow(){
			size = size +2;

			if(size<=max){

				for(var x=0;x<winningRowCellsLength;x++){
					targetCell = document.getElementById(targetName+winningRowCells[i]);
					targetCell.style.backgroundColor = color;
					targetCell.style.width = size+"px";
					targetCell.style.height = size+"px";
					targetCell.style.borderRadius = size/2+"px";
					targetCell.style.marginLeft = halfMax -size/2+"px";
					targetCell.style.marginTop = halfMax -size/2+"px";
					i++;
				}

				i=0;
				delayGrow();
			};
			
			if(size>max && animate==true){
				repeatCounter++
				console.log(repeatCounter);
				delayShrink();
			};
			if(repeatCounter >= 5){
				animate=false;
				document.getElementById("newGameButton").style.visibility="visible";
			}

		};
		
		function shrink(){
			size = size -2;
			if(size>=min){
				for(var x=0;x<winningRowCellsLength;x++){
					targetCell = document.getElementById(targetName+winningRowCells[i]);
				targetCell.style.backgroundColor = color;
				targetCell.style.width = size+"px";
				targetCell.style.height = size+"px";
				targetCell.style.borderRadius = size/2+"px";
				targetCell.style.marginLeft = halfMax -size/2+"px";
				targetCell.style.marginTop = halfMax -size/2+"px";
				i++;
				}
				i=0;
				delayShrink();
			}
			if(size<min){
				delayGrow();
			};

		};
	};

