/**
 *
 */
(function () {
	'use strict';
	var d = function () {return document.getElementsByTagName('textarea'); },
		m = function () {
			var t = {
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
			a=d(),
			b,
			i, 
			j;
			for (i=0; i < a.length; i++) {
				b = a[i].value.toUpperCase().split("");
				for (j=0; j < b.length; j++) {
					b[j] = t[b[j]] + " ";
				}
				a[i].value = b.join("");
			}
		},
		x,
		y = document;
		if (d().length<1) {
			x = y.createElement("div");
			x.style.height="50px";x.style.width="200px";x.style.position="fixed";x.style.top="0";x.style.right="0";
			x.innerHTML="<textarea></textarea>Morse:&nbsp;<button id='morseEnc'>Encrypt</button>";
			y.body.appendChild(x);
			y.getElementById("morseEnc").onclick=m;
		} else {
			m();
		}
	}	
)();