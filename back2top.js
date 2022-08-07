$("#back2top").html("<center><p><img src='./src/umbrella.gif' id='umbrella'></p><p>🔝 Back to top</p></center>")

$("#back2top").click(() => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
