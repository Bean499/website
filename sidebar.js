links = [
	{
		"link": "index.html",
		"name": "Home",
	},
	{
		"link": "about.html",
		"name": "About Me",
	},
	{
		"link": "links.html",
		"name": "Links",
	},
	{
		"link": "stuff.html",
		"name": "Stuff I've Made",
	},
	// {
	// 	"link": "music.html",
	// 	"name": "Music",
	// },
	{
		"link": "status.html",
		"name": "Posts",
	},
	{
		"link": "sitemap.html",
		"name": "Sitemap",
	},
	{
		"link": "credits.html",
		"name": "Credits",
	},
]

for (let i = 0; i < links.length; i++) {
	$("#links").append("<li><a href='" + links[i]["link"] + "' class='link'>" + links[i]["name"] + "</a></li>");
}
