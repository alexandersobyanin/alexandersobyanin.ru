$(document).ready(function() {
	/*
	// change host to only one
	if (location.host != "alexandersobyanin.ru") {
		location.replace("http://alexandersobyanin.ru");
	}
	// change https to http
	if (location.href.indexOf("https://") == 0) {
		location.href = location.href.replace("https://", "http://");
	}
	//change http to https
	if (location.href.indexOf("http://") == 0) {
		location.href = location.href.replace("http://", "https://");
	}
	*/
	var block_home_page = $('#block-home-page');
	$.ajax({
		url: '//b1oki.noip.me/health.php',
		dataType: 'json',
		success: function (data) {
			if (data.health != 1) {
				block_home_page.hide();
			}
		},
		error: function (data) {
			block_home_page.hide();
		}
	});
});
