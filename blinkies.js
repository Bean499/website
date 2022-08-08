const blinkies = [
	"button",
	"miku",
	"autism",
	"gay",
	"nb",
	// "kirby",
	"arch",
	// "linux",
	"computer",
	"vim",
]

for (i = 0; i < blinkies.length; i++){
	if (blinkies[i] == "button") {
		image = "./src/" + blinkies[i] + ".gif";
		$("#blinkies").append("<img src=" + image + "><br><br>")
	}
	else {
		image = "./src/blinkies/" + blinkies[i] + ".gif";
		$("#blinkies").append("<img src=" + image + "><br>")
	}
}
