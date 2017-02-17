/*

var start = '';
var word = '';
var res = word.split("");
var words = '';

*/





/*
function start() {
	

 var words = new Array;
 words[0]="\"Quote 1.\"";
 words[1]="\"Quote 2.\"";
 words[2]="\"Quote 3.\""

 rdmQuote = Math.floor(Math.random()*words.length);
 document.getElementById("start") .value=words[rdmQuote];
}
window.onload=start;	
	
	*/

var word = " ";




function start(){

	var word = new Array;
	word[0]="fikst";
	word[1]="files";
	word[2]="filet";
	word[3]="films";
	word[4]="filmt";
	word[5]="afdak";
	word[6]="afdek";
	word[7]="banen";
	word[8]="beest";
	word[9]="beeld";
	word[10]="steel";
	word[11]="fonts";
	word[12]="beats";


	rdmWordPos = Math.floor(Math.random()*word.length);			// hij pakt een random getal (waar een random woord aan zit gekoppeld)
	rdmWord = word[rdmWordPos]; 								// getal wordt opmgezet naar tekst
	document.getElementById('display').innerHTML=rdmWord;		// laat het gekozen random woord zien in de display
	
	//split het woord op in losse delen
    var res = rdmWord.split("");								// rdmWord wordt opgesplitst in losse letters en in het variabele 'res' gestopt
	console.log(res);											// losse letters worden getoond in de console log 
	
	
	//pakt de eerste letter van het woord
	var firstletter = rdmWord.substring(0 ,1);					// filtert van het woord de laatste woorden weg en laat alleen de eerste letter zien
	console.log(firstletter);									// wordt eerste letter getoont in de console log 
	document.getElementById('display2').innerHTML=firstletter;	// wordt eerste letter getoont in display2 
}





	

/*
var word = words[Math.floor(Math.random()*things.length)];

	switch(words) {
			
			case '1':
				var word = fikst;
				break;
				
			case '2':
				var word = files;
				break;
				
			case '3':
				var word = filet;
				break;
			
			case '4':
				var word = films;
				break;
				
			case '5':
				var word = filmt;
				break;
			
			case '6':
				var word = afdak;
				break;
			
			case '7':
				var word = afdek;
				break;
				
			case '8':
				var word = banen;
				break;
				
				
			case '9':
				var word = beest;
				break;
				
			case '10':
				var word = beeld;
				break;
				
				
		}
		document.getElementById('word').innerHTML = word; 
*/
