const debug = false;
// const debug = true;

if (debug) {
	$("#main").css("background-color","red");
	$("#left").css("background-color","yellow");
	$("#right").css("background-color","pink");
	$("#topright").css("background-color","blue");
	$("#botright").css("background-color","green");
}

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
