const songs = [
	[
		"Alone Infection", "GUILTY GEAR -STRIVE-", "28/08/2022",
		`I'm starting things off with my absolute favourite song,
		being Faust's theme from GUILTY GEAR -STRIVE-. This song
		definitely sounds like it was written by a crazy person.
		This song's my favourite of all time, and for good reason.`
	],
	[
		"Weird Science", "Dead Man's Party", "29/08/2022",
		`This song is very funny. I like how whimsical it is.
		Expect to see other songs from the album Dead Man's Party,
		because they're all cracking.`
	],
	[
		"Zero Stage 2", "Mega Man X5", "30/08/2022",
		`I enjoy this song very much. The synth is wonderful and I
		also like the piano, and the clicks are also simply
		wonderful. As to be expected of the Meagaman X series.`
	],
	[
		"TSUKI NO SHIHAI", "GUILTY GEAR Xrd -REVELATOR-", "31/08/2022",
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
	[
		"Touch-Tone Telephone", "Spirit Phone", "01/09/2022",
		`I like this song for reasons similar to Weird Science. The
		lyrics are very funny and the song overall just appeals to
		me due to this. I'm not quite sure how to explain why I
		like it, I just do.`
	],
	[
		"Wasteland", "Terraria Calamity Mod", "02/09/2022",
		`This song is very relaxing. It also manages to stay
		impressively faithful to Terraria's original soundtrack,
		what with the heavy reliance on synthesized beep boops. I
		very much enjoy it.`
	],
	[
		"Cats on Mars", "Cowboy Bebop OST 2: No Disc", "03/09/2022",
		`This song appeals to me for how silly it is, what with the
		gibberish "lyrics" and the funny beeps and boops. It also
		reminds me of Edward who is easily my favourite character
		from Cowboy Bebop. This song is very much befitting of
		them.`
	],
]

for (i = songs.length - 1; i > -1; i--) {
	$("#songs").append("<div class='song'><h3>" + songs[i][0] + " - " + songs[i][2] + "</h3><figure class='cover'><img src='src/img/songs/" + i + ".png'><figcaption>" + songs[i][1] + "</figcaption></figure><p>" + songs[i][3] + "</p></div>")
}

$("#recentsong").attr("src", "src/img/songs/" + (songs.length - 1) + ".png");
$("#recenttitle").html(songs[songs.length - 1][0]);
