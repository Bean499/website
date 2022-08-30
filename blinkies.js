const blinkies = [
	"button",
	"wave",
	"miku",
	"linux",
	"autism",
	"gay",
	// "nb",
	// "kirby",
	"arch",
	"computer",
	"vim",
]

for (i = 0; i < blinkies.length; i++){
	if (blinkies[i] == "button") {
		image = "./src/" + blinkies[i] + ".gif";
		$("#blinkies").append("<img src=" + image + "><hr>")
	}
	else {
		image = "./src/blinkies/" + blinkies[i] + ".gif";
		$("#blinkies").append("<img src=" + image + "><br>")
	}
}
