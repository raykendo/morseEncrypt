/**
 * morseEncrypt.js
 * -- --- .-. ... . . -. -.-. .-. -.-- .--. - .-.-.- .--- ... 
 * Morse Code Encryption Bookmarklet.
 * Translates text you've entered on a web page's textarea into morse code.
 * If no text area is provided, this adds a blank on the page where you can
 * type your message and click "Encrypt" to turn it to morse code.
 * Tested on IE11, Chrome, and Firefox
 * Let me know what else it works/doesn't work with.
 */
(function () {
	'use strict';
	var d = document, // document shortener
		x;
	function morse() {
		// replaces all textarea element contents with 
		// the equivalent in morse code.
		var translator = { // key/value pairs for translation to morse code
			A: ".-",
			B: "-...",
			C: "-.-.",
			D: "-..",
			E: ".",
			F: "..-.",
			G: "--.",
			H: "....",
			I: "..",
			J: ".---",
			K: "-.-",
			L: ".-..",
			M: "--",
			N: "-.",
			O: "---",
			P: ".--.",
			Q: "--.-",
			R: ".-.",
			S: "...",
			T: "-",
			U: "..-",
			V: "...-",
			W: ".--",
			X: "-..-",
			Y: "-.--",
			Z: "--..",
			"1": ".----",
			"2": "..---",
			"3": "...--",
			"4": "....-",
			"5": ".....",
			"6": "-....",
			"7": "--...",
			"8": "---..",
			"9": "----.",
			"0": "-----",
			",": "--..--",
			".": ".-.-.-",
			"?": "..--..",
			";": "-.-.-",
			":": "---...",
			"/": "-..-.",
			"-": "-....-",
			"'": ".----.",
			"()": "-.--.-",
			"_": "..--.-",
			" ": " /"
		};
			
		[].forEach.call(d.getElementsByTagName("textarea"), function (el) {
			var letters = el.value.toUpperCase().split("");
			el.value = letters.map(function (i) { return translator[i];}).join(" ");
		});
		
	}
	
	if (d.getElementsByTagName('textarea').length < 1) { // if there are no textareas...
		x = d.createElement("div");
		x.setAttribute("style", "height:50px;width:200px;position:fixed;top:0;right:0;z-index:9999;");
		x.innerHTML = "<textarea></textarea>Morse:&nbsp;<button type='button' id='morseEnc'>Encrypt</button>";
		d.body.appendChild(x);
		d.getElementById("morseEnc").onclick = morse;
	} else {
		morse(); // replaces all textarea contents with morse code.
	}
})();