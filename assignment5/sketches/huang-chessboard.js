      /* Chessboard
      Natalie Huang, 11/11/2017
      */
      
      
      
      // the size of the overall canvas
      const canvasWidth = 600;
      const canvasHeight = 600;
      
      // the uppper left corner of the progress bar
      const xOrigin = 100;
      const yOrigin = 100;
      
      // some colors
      const bgColor = 'pink';
      
      
      // parameters for each box in the progress bar
      const segmentSize = 50;
      const borderWidth = 2;
      
      // how many segments and rows to draw in the chessboard
      const barSegments = 8;
      const numRows = 8;
      
      
      function setup() {
      
         // create the canvas
         createCanvas(canvasWidth, canvasHeight);
         background(bgColor);
      
         // set drawing paraemeters for the bar segments
      	 noStroke();
         strokeWeight(borderWidth);
        
         //draw squares
         drawBoard();

		}




        //remainder

        function isOdd(n){
            var remainder =n % 2;
              	if(remainder == 0){
              		return false;
              	} else {
              		return true;   
              	}
              }

    
   // draw a single square 
    function drawSquare(x, y, size1, size2){
      
            rect(x, y, size1, size2);
    }
     
        
    // make drawSquare into a loop and also fill in colors
    function drawBoard(){
       for (j = 0; j < numRows; j++) {
        		// y coordinate
        		var yCorner = yOrigin + j * segmentSize;
		
				for (i = 0; i < barSegments; i++) {
						// x coordinate
						var xCorner = xOrigin + i * segmentSize; {
          
          if ( isOdd(i) == isOdd(j)){
						  fill("lightblue");
						    } else {
						      fill("white");
                 }	
            }
					  
					drawSquare(xCorner, yCorner, segmentSize, segmentSize);
				      }
        }	
    }







function draw() {}