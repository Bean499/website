//Newest goes at the top
const statuses = [
	//[title, icon, date, content]
	//In Vim, use `gqq` to make long lines into multiple lines
	["New website design!", "💻", "29 Aug 2022",
	`Good afternoon, dear visitor. Welcome to my little corner of the
	internet. After a recent restructure of the site I will now be writing
	miscellany on this page. "Why?", I hear you ask. Because I feel like
	it, that is why. Reasons aside, you can expect more ramblings to
	appear on this page over time. See you then!`
	],
]

$("#status-content").html(statuses[0][0]);
$("#emoji").html(statuses[0][1]);
$("#when").html(statuses[0][2]);

for (i = 0; i < statuses.length; i++) {
	$("#statuses").append("<h2>" + statuses[i][1] + " " + statuses[i][0] +
	" - " + statuses[i][2] + "</h2><p>" + statuses[i][3]);
}
