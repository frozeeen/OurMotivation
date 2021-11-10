
(function(){

	// Console design
	var consoleDesign = "color: green;";

	// List of motivations
	var phrases = [
		"It's ok to debug, we all do.",
		"Don't refresh to hard.",
		"Refreshing multiple times, sometimes it's not gonna help you.",
		"Maybe you forgot the semicolon? `;` this thing.",
		"It's ok to take ☕ break... You know.",
		"Did you know Javascript was created by NetScape?",
		"Come here, lemme calm you down... Java and Javascript are the same.",
		"Monitor is also a hardware that you can kick when you're angry.",
		"Programming has made me smarter, now I know that < is greater than, and > is less than, oh wait."
	];

	// Throw Phrases
	var n = Math.floor( Math.random() * phrases.length );
	console.log(`%c${ phrases[n] } `, consoleDesign);

})();