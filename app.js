$(document).ready(function() {
	var block_home_page = $('#block-home-page');
	block_home_page.hide();
	$.getJSON('http://b1oki.noip.me/health.php', function (data) {
		console.log('begin data');
		console.log(data);
		console.log('finish data');
		if (data.health == 1) {
			block_home_page.show();
		}
	});
});
