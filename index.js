const debug = false;
// const debug = true;

if (debug) {
	$("#main").css("background-color","red");
	$("#left").css("background-color","yellow");
	$("#right").css("background-color","pink");
	$("#topright").css("background-color","blue");
	$("#botright").css("background-color","green");
}

splashes = [
	"WE'VE GOT ONLY ONE SKY",
	// "the alchemist's lair",
	// "also try minecraft!",
	// "welcome to the underground!",
	// "now with unlimited breadsticks!",
	// "as seen on television!",
	// "classy!",
	// "enhanced!",
	// "9/10 doctors approve!",
	// "lots of added sugar!",
	// "sensational!",
	// "now in 2D!",
	// "what is real?",
	// "§1C§2o§3l§4o§5r§6m§7a§8t§9i§ac",
	// "reject flesh, embrace skeleton",
	// "no bones about it!",
]
splash = splashes[Math.floor(Math.random() * splashes.length)];
$("#splash-text").html(splash);

const theme = localStorage.getItem("theme");
if (theme) {
	$("#body").attr("class", theme);
}

$("#godark").click(() => {
	$("#body").attr("class", "dark");
	localStorage.setItem("theme", "dark");
});

$("#golight").click(() => {
	$("#body").attr("class", "light");
	localStorage.setItem("theme", "light");
});
