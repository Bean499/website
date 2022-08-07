const blinkies = [
	"autism",
	"gay",
	"nb",
	"kirby",
	"arch",
	// "linux",
	"computer",
	"vim",
]

for (i = 0; i < blinkies.length; i++){
	image = "./src/" + blinkies[i] + ".gif";
	$("#blinkies").append("<img src=" + image + "><br>")
}
