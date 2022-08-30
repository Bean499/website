const songs = [
	[
		"Alone Infection", "28/08/2022",
		`I'm starting things off with my absolute favourite song,
		being Faust's theme from Guilty Gear -STRIVE-. This song
		definitely sounds like it was written by a crazy person.
		This song's my favourite of all time, and for good reason.`
	],
	[
		"Weird Science", "29/08/2022",
		`This song is very funny. I like how whimsical it is.
		Expect to see other songs from the album Dead Man's Party,
		because they're all cracking.`
	],
	[
		"Zero Stage 2", "30/08/2022",
		`I enjoy this song very much. The synth is wonderful and I
		also like the piano, and the clicks are also simply
		wonderful. As to be expected of the Meagaman X series.`
	],
]

for (i = songs.length - 1; i > -1; i--) {
	$("#songs").append("<div class='song'><h2>" + songs[i][0] + " - " + songs[i][1] + "</h2><img src='src/img/songs/" + i + ".png' class='cover'><p>" + songs[i][2] + "</p></div>")
}

$("#recentsong").attr("src", "src/img/songs/" + (songs.length - 1) + ".png");
$("#recenttitle").html(songs[songs.length - 1][0]);
