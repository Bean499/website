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
	[
		"The Alchemist's Haven", "Shovel Knight: Plague of Shadows", "04/09/2022",
		`This song is so very mischeivous sounding. It is
		incredibly befitting of Plague Knight, who is
		absolutely one of my favourite Shovel Knight
		characters, so I'm sort of obligated to like this
		theme.`
	],
	[
		"Death By Galmour", "UNDERTALE", "05/09/2022",
		`This is defiitely my favourite song from UNDERTALE. It's
		just so groovy. Mettaton is an excellent character which is
		why I'm glad they got such a cracking battle theme. This
		song and BIG SHOT from DELTARUNE make me wish there was a
		full length version of Power of NEO, but oh well.`
	],
	[
		"Destructive Goodwill", "GUILTY GEAR Xrd -SIGN-", "06/09/2022",
		`I am a massive fan of this song. It fits Faust so
		perfectly, what with the swapping between the more serious
		guitar sections and the silly piano sections. This one is
		very good.`
	],
	[
		"hello world", "Louie Zong", "07/09/2022",
		`Funny text to speech singing and a good melody. I need no
		more reason to like a song.`
	]
]

for (i = songs.length - 1; i > -1; i--) {
	$("#songs").append("<div class='song'><h3>" + songs[i][0] + " - " + songs[i][2] + "</h3><figure class='cover'><img src='src/img/songs/" + i + ".png'><figcaption>" + songs[i][1] + "</figcaption></figure><p>" + songs[i][3] + "</p></div>")
}

$("#recentsong").attr("src", "src/img/songs/" + (songs.length - 1) + ".png");
$("#recenttitle").html(songs[songs.length - 1][0]);
