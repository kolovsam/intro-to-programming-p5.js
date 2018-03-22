/* Assignmet 5 - Chess Board
	Kristen Demarjian
	11/13/17
	HCDE 598A Intro to Programming
	*/

const tileSize = 50
const numAcross = 8;   //number of tiles across
const numDown = 8;    //number of tiles down

const tileColor1 = (155, 178, 235);
const tileColor2 = (255);


function setup() {
	createCanvas(800, 800);
	
	/*starting at 0, if there are less than 8 tiles, add one across 
	and one down
	
	structure; for (initialization; contuniation; update)
	*/
	
	for (tilesAcross = 0; tilesAcross < numAcross; tilesAcross++) {
		for (tilesDown = 0; tilesDown < numDown; tilesDown++) {
			
			/* if tilesDown divided by 2 has a remainder of 0 (making
			the if statement true), and tilesAcross divided by 2 has a remainder
			of 0, fill with tileColor2.
			Else, fill tileColor1.
			Otherwise, if tilesDown has a remainder of 1, and tilesAcross
			has a remainder of 0, fill with tileColor1. Else fill with 
			tileColor2.
			*/
			
			if (tilesDown % 2 == 0) {
				if (tilesAcross % 2 == 0) {
					fill(tileColor2);
					noStroke();
				} else {
				 fill(tileColor1);
				}
			} else {
				if (tilesAcross % 2 == 0) {
					fill(tileColor1);
				} else {
					fill(tileColor2);
				}
			}
			//draw the squares with these parameters
			rect(tileSize * tilesAcross, tileSize * tilesDown, tileSize, tileSize);
		}
	}
}


	
	