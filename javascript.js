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
var secondletter = "";
var thirdletter = "";
var fourthletter = "";
var	fifthletter = "";


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
	word[13]="beats";
	word[14]="gaapt";
	word[15]="gapen";
	word[16]="gebod";
	word[17]="gedag";
	word[18]="gazon";
	word[19]="geest";
	word[20]="gebit";
	

	rdmWordPos = Math.floor(Math.random()*word.length);			// hij pakt een random getal (waar een random woord aan zit gekoppeld)
	rdmWord = word[rdmWordPos]; 								// getal wordt opmgezet naar tekst
	document.getElementById('display').innerHTML=rdmWord;		// laat het gekozen random woord zien in de display, rdmWord is dus het gehele woord waar later op gecontroleerd gaat worden
	
	//split het woord op in losse delen
    var res = rdmWord.split("");								// rdmWord wordt opgesplitst in losse letters en in het variabele 'res' gestopt
	console.log(res);											// losse letters worden getoond in de console log 
	
	
	//pakt de eerste letter van het woord
	var firstletter = rdmWord.substring(0 ,1);					// filtert van het woord de laatste woorden weg en laat alleen de eerste letter zien
	console.log(firstletter);									// wordt eerste letter getoont in de console log 
	document.getElementById('firstletter_input').value=firstletter;	// wordt eerste letter getoont in display2 
	
	
	
	// de andere letters komen in de overige 4 blokken op volgorde (ontzichtbaar)
	
	//second letter: wordt los gehaald van het woord en in het variable secondletter gestopt
	secondletter = rdmWord.substring(1,2);
	console.log(secondletter);
	//document.getElementById('secondletter_input').value=secondletter;	// stopt het variable in de html input		
	
	//thirdletter: wordt los gehaald van het woord en in het variable thirdletter gestopt
	thirdletter = rdmWord.substring(2,3);
	console.log(thirdletter);
	//document.getElementById('thirdletter_input').value=thirdletter;		// stopt het variable in de html input
	
	//fourthletter: wordt los gehaald van het woord en in het variable fourthletter gestopt
	fourthletter = rdmWord.substring(3,4);
	console.log(fourthletter);
	//document.getElementById('fourthletter_input').value=fourthletter;	// stopt het variable in de html input
	
	//fifthletter: wordt los gehaald van het woord en in het variable fifthletter gestopt
	fifthletter = rdmWord.substring(4,5);
	console.log(fifthletter);
	//document.getElementById('fifthletter_input').value=fifthletter;  	// stopt het variable in de html input
	
}


function check(){
	console.log("entering check()");
	
	
	//controle op de 2e letter
	var raad2 = document.getElementById('secondletter_input').value;
	
	if ( raad2 == secondletter ) {
		document.getElementById('secondletter_input').style.backgroundColor="#ffad33";
	}
	
	//controle op de 3e letter
	var raad3 = document.getElementById('thirdletter_input').value;
	
	if ( raad3 == thirdletter ) {
		document.getElementById('thirdletter_input').style.backgroundColor="#ffad33";
	}
	
	//controle op de 4e letter
	var raad4 = document.getElementById('fourthletter_input').value;
	
	if ( raad4 == fourthletter ) {
		document.getElementById('fourthletter_input').style.backgroundColor="#ffad33";
	}
	
	
	//controle op de 5e letter
	var raad5 = document.getElementById('fifthletter_input').value;
	
	if ( raad5 == fifthletter ) {
		document.getElementById('fifthletter_input').style.backgroundColor="#ffad33";
	}
	
	
	if (raad2 == secondletter && raad3 == thirdletter && raad4 == fourthletter && raad5 == fifthletter){
		window.alert("You are a winner!");
		
	
	}
	
	
	//Hieronder de regels wanneer de letters niet goed zijn! 
	
	
	
	// Wanneer een van de letters niet goed is, hou dan de eerste letter vast, verplaatst die naar onder, en begin opnieuw. 
	if (raad2 != secondletter || raad3 != thirdletter || raad4 != fourthletter || raad5 != fifthletter){
	
		//pakt de eerste letter van het woord
		var firstletter = rdmWord.substring(0 ,1);					// filtert van het woord de laatste woorden weg en laat alleen de eerste letter zien
		console.log(firstletter);									// wordt eerste letter getoont in de console log 
		document.getElementById('firstletter_input_2').value=firstletter;	// wordt eerste letter getoont in display2 
		
		
		
		// Hieronder de nieuwe check
			var raad2 = document.getElementById('secondletter_input_2').value;
	
			if ( raad2 == secondletter ) {
				document.getElementById('secondletter_input_2').style.backgroundColor="#ffad33";
			}
			
			//controle op de 3e letter
			var raad3 = document.getElementById('thirdletter_input_2').value;
			
			if ( raad3 == thirdletter ) {
				document.getElementById('thirdletter_input_2').style.backgroundColor="#ffad33";
			}
			
			//controle op de 4e letter
			var raad4 = document.getElementById('fourthletter_input_2').value;
			
			if ( raad4 == fourthletter ) {
				document.getElementById('fourthletter_input_2').style.backgroundColor="#ffad33";
			}
			
			
			//controle op de 5e letter
			var raad5 = document.getElementById('fifthletter_input_2').value;
			
			if ( raad5 == fifthletter ) {
				document.getElementById('fifthletter_input_2').style.backgroundColor="#ffad33";
			}
			
			
			if (raad2 == secondletter && raad3 == thirdletter && raad4 == fourthletter && raad5 == fifthletter){
				window.alert("You are a winner!");
				
			
			}
		
		
	} //Afsluiting eerste if functie
	
	
	
	// Wanneer een van de letters niet goed is, hou dan de eerste letter vast, verplaatst die naar onder, en begin opnieuw. 
	if (raad2 != secondletter || raad3 != thirdletter || raad4 != fourthletter || raad5 != fifthletter){
	
		//pakt de eerste letter van het woord
		var firstletter = rdmWord.substring(0 ,1);					// filtert van het woord de laatste woorden weg en laat alleen de eerste letter zien
		console.log(firstletter);									// wordt eerste letter getoont in de console log 
		document.getElementById('firstletter_input_3').value=firstletter;	// wordt eerste letter getoont in display2 
		
		
		
		// Hieronder de nieuwe check
			var raad2 = document.getElementById('secondletter_input_3').value;
	
			if ( raad2 == secondletter ) {
				document.getElementById('secondletter_input_3').style.backgroundColor="#ffad33";
			}
			
			//controle op de 3e letter
			var raad3 = document.getElementById('thirdletter_input_3').value;
			
			if ( raad3 == thirdletter ) {
				document.getElementById('thirdletter_input_3').style.backgroundColor="#ffad33";
			}
			
			//controle op de 4e letter
			var raad4 = document.getElementById('fourthletter_input_3').value;
			
			if ( raad4 == fourthletter ) {
				document.getElementById('fourthletter_input_3').style.backgroundColor="#ffad33";
			}
			
			
			//controle op de 5e letter
			var raad5 = document.getElementById('fifthletter_input_3').value;
			
			if ( raad5 == fifthletter ) {
				document.getElementById('fifthletter_input_3').style.backgroundColor="#ffad33";
			}
			
			
			if (raad2 == secondletter && raad3 == thirdletter && raad4 == fourthletter && raad5 == fifthletter){
				window.alert("You are a winner!");
				
			
			}
		
		
	}//Afsluiting eerste if 
	
	
	
	// Wanneer een van de letters niet goed is, hou dan de eerste letter vast, verplaatst die naar onder, en begin opnieuw. 
	if (raad2 != secondletter || raad3 != thirdletter || raad4 != fourthletter || raad5 != fifthletter){
	
		//pakt de eerste letter van het woord
		var firstletter = rdmWord.substring(0 ,1);					// filtert van het woord de laatste woorden weg en laat alleen de eerste letter zien
		console.log(firstletter);									// wordt eerste letter getoont in de console log 
		document.getElementById('firstletter_input_4').value=firstletter;	// wordt eerste letter getoont in display2 
		
		// Hieronder de nieuwe check
			var raad2 = document.getElementById('secondletter_input_4').value;
	
			if ( raad2 == secondletter ) {
				document.getElementById('secondletter_input_4').style.backgroundColor="#ffad33";
			}
			
			//controle op de 3e letter
			var raad3 = document.getElementById('thirdletter_input_4').value;
			
			if ( raad3 == thirdletter ) {
				document.getElementById('thirdletter_input_4').style.backgroundColor="#ffad33";
			}
			
			//controle op de 4e letter
			var raad4 = document.getElementById('fourthletter_input_4').value;
			
			if ( raad4 == fourthletter ) {
				document.getElementById('fourthletter_input_4').style.backgroundColor="#ffad33";
			}
			
			
			//controle op de 5e letter
			var raad5 = document.getElementById('fifthletter_input_4').value;
			
			if ( raad5 == fifthletter ) {
				document.getElementById('fifthletter_input_4').style.backgroundColor="#ffad33";
			}
			
			
			if (raad2 == secondletter && raad3 == thirdletter && raad4 == fourthletter && raad5 == fifthletter){
				window.alert("You are a winner!");
				
			
			}
		
		
	} //Afsluiting eerste if
	
	
	// Wanneer een van de letters niet goed is, hou dan de eerste letter vast, verplaatst die naar onder, en begin opnieuw. 
	if (raad2 != secondletter || raad3 != thirdletter || raad4 != fourthletter || raad5 != fifthletter){
	
		//pakt de eerste letter van het woord
		var firstletter = rdmWord.substring(0 ,1);					// filtert van het woord de laatste woorden weg en laat alleen de eerste letter zien
		console.log(firstletter);									// wordt eerste letter getoont in de console log 
		document.getElementById('firstletter_input_5').value=firstletter;	// wordt eerste letter getoont in display2 
		
		// Hieronder de nieuwe check
			var raad2 = document.getElementById('secondletter_input_5').value;
	
			if ( raad2 == secondletter ) {
				document.getElementById('secondletter_input_5').style.backgroundColor="#ffad33";
			}
			
			//controle op de 3e letter
			var raad3 = document.getElementById('thirdletter_input_5').value;
			
			if ( raad3 == thirdletter ) {
				document.getElementById('thirdletter_input_5').style.backgroundColor="#ffad33";
			}
			
			//controle op de 4e letter
			var raad4 = document.getElementById('fourthletter_input_5').value;
			
			if ( raad4 == fourthletter ) {
				document.getElementById('fourthletter_input_5').style.backgroundColor="#ffad33";
			}
			
			
			//controle op de 5e letter
			var raad5 = document.getElementById('fifthletter_input_5').value;
			
			if ( raad5 == fifthletter ) {
				document.getElementById('fifthletter_input_5').style.backgroundColor="#ffad33";
			}
			
			
			if (raad2 == secondletter && raad3 == thirdletter && raad4 == fourthletter && raad5 == fifthletter){
				window.alert("You are a winner!");
				
			
			}
		
		
		
	} //afsluiting eerste if 
	
}


	


