$(document).ready(function() {

	if (location.href.indexOf("https://") == -1) {
		location.href = location.href.replace("http://", "https://");
	}

	var block_home_page = $('#block-home-page');
	$.getJSON('http://b1oki.noip.me/health.php', function (data) {
		console.log('begin data');
		console.log(data);
		console.log('finish data');
		if (data.health != 1) {
			block_home_page.hide();
		}
	});

});
