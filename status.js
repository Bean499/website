const statuses = [
	//[title, icon, date, content]
	//In Vim, use `gqq` to make long lines into multiple lines
	[
		"New website design!", "💻", "29 Aug 2022",
		`Good afternoon, dear visitor. Welcome to my little corner of the
		internet. After a recent restructure of the site I will now be writing
		miscellany on this page. "Why?", I hear you ask. Because I feel like
		it, that is why. Reasons aside, you can expect more ramblings to
		appear on this page over time. See you then!`
	],
	[
		"Programming endeavours", "💡", "31 Aug 2022",
		`After a long while of thinnking of something other than this website to
		make, I was finally struck with inspiration this morning! After looking
		into things, it turns out that Xiaomi's Yeelights (the smart lights I
		have) have a Python API, so I spent most of today programming a TUI
		program to control my smart lights. If you'd like to see more about
		them, check out my <a href='stuff.html'>stuff page</a> for more info,
		including source code!`
	],
	[
		"Splatoon 3", "🦑", "10 Sep 2022",
		`Splatoon 3 looks really cool! I sitll don't have it yet but I have
		been listening to the soundtrack quite a bit and it is as wonderful as
		I have come to expect Splatoon's music to be. I did play the demo,
		which was very fun. I enjoyed the NZap for its Tacticooler, which was
		very useful in coordinated play with my friends.`
	],
	[
		"Ultrawide monitor", "🖥️", "11 Sep 2022",
		`<img src="src/img/stuff/monitor.png">Before going to university I
		have invested in an ultrawide monitor to connect to my laptop, and oh
		my goodness was that a good chocie! The increase in space is so
		wonderful. I have particularly enjoyed maintaining my website since I
		now have the space for two editors to be open alongside a windows of
		the actual website. Additionally, the USB ports on the back of it are
		super useful for lessening the mess of cable management.`
	],
	[
		"Filesystem organisation", "📂", "12 Sep 2022",
		`After talking to a friend about it today, I've given my computer's
		filesystem a good reorganisation. Before it was cluttered, which made
		it hard to naviagte, especially via a command line, but after a few
		changes I am already becoming much more efficient. The first change I
		made was renaming folders in the root of my home directory to something
		short and simple. For example, "Documents" became simply "docs". All
		names were 4 letters which mean they were all in a standard format. The
		second change was numbering important subdirectories so that they
		appear in a good order, as well as making it easier to move into them
		using the cd command and tab completion. Doing these two things has
		made my life a lot easier!`
	],
	[
		"Terminal music players", "🎵", "13 Sep 2022",
		`Recently I have become increasingly inclined to use terminal
		applicaitons so as to be able to do whatever I want from the terminal.
		One thing I have wanted for a while was a usic player. I begrudgingly
		switched to Spotify to use <a
		href="https://github.com/Rigellute/spotify-tui">spotify-tui</a>, but
		it required Spotify premium, so I gave up using it after a while. I
		didn't want to have to download all the music I play, but today I have
		downloaded a few albums so taht I can give <a href="https://github.com/ncmpcpp/ncmpcpp">
		ncmpcpp</a> a go. So far my experience with it and mpd have been
		positive, besides needing another application for MPRIS media key
		support. It is very nice not needing anything to be open for my music
		to play, but it is somewhat a faff moving from streaming all my music
		to needing now to download it. I will see whether it becomes too
		annoying and perhaps be tempted back into using a GUI.`
	],
]

index = statuses.length - 1
$("#status-content").html(statuses[index][0]);
$("#emoji").html(statuses[index][1]);
$("#when").html(statuses[index][2]);

for (i = statuses.length - 1; i > -1; i--) {
	$("#statuses").append("<h2>" + statuses[i][1] + " " + statuses[i][0] +
	" - " + statuses[i][2] + "</h2><p>" + statuses[i][3]);
}

$("#status").click(() => {
	window.location.href = "./status.html";
});
