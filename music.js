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
	[
		"TSUKI NO SHIHAI", "31/08/2022",
		`This is probably my favourite song from Guilty Gear Xrd,
		tied with Destructive Goodwill (expect to see that song
		appear soon). I'm a really really big fan of Raven:
		he's probably my third favourite character in the series,
		after Faust and Testament. Hopefully we'll see him in
		Guilty Gear -STRIVE- one day as a DLC character. I can only
		hope. Anyways, I'm glad they decided to do lyrical songs
		for the Revelator character themes because this one's just
		cracking.`
	],
]

for (i = songs.length - 1; i > -1; i--) {
	$("#songs").append("<div class='song'><h2>" + songs[i][0] + " - " + songs[i][1] + "</h2><img src='src/img/songs/" + i + ".png' class='cover'><p>" + songs[i][2] + "</p></div>")
}

$("#recentsong").attr("src", "src/img/songs/" + (songs.length - 1) + ".png");
$("#recenttitle").html(songs[songs.length - 1][0]);
