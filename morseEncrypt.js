/**
 * morseEncrypt.js
 * -- --- .-. ... . . -. -.-. .-. -.-- .--. - .-.-.- .--- ... 
 * Morse Code Encryption Bookmarklet.
 * Translates text you've entered on a web page's textarea into morse code.
 * If no text area is provided, this adds a blank on the page where you can
 * type your message and click "Encrypt" to turn it to morse code.
 * Tested on Firefox 10+
 * Let me know what else it works/doesn't work with.
 */
(function () {
	'use strict';
	var d = document, // document shortener
		getTextArea = function () {return d.getElementsByTagName('textarea'); },
		morse = function () {
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
			},
				textAreas = getTextArea(),
				letters,
				i,
				j;
			for (i = 0; i < textAreas.length; i++) {
				letters = textAreas[i].value.toUpperCase().split("");
				for (j = 0; j < letters.length; j++) {
					letters[j] = translator[letters[j]] + " ";
				}
				textAreas[i].value = letters.join("");
			}
		},
		x,
		styles = { // css styling for morse encryption form
			height: "50px",
			width: "200px",
			position: "fixed",
			top: "0",
			right: "0",
			zIndex: "9999"
		},
		s;
	if (getTextArea().length < 1) { // if there are no textareas...
		x = d.createElement("div");
		for (s in styles) {
			x.style[s] = styles[s];
		}
		x.innerHTML = "<textarea></textarea>Morse:&nbsp;<button id='morseEnc'>Encrypt</button>";
		d.body.appendChild(x);
		d.getElementById("morseEnc").onclick = morse;
	} else {
		morse(); // replaces all textarea contents with morse code.
	}
})();