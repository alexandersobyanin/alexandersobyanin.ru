$(document).ready(function() {
	if (location.host != "alexandersobyanin.ru") {
		location.replace("http://alexandersobyanin.ru");
	}
	if (location.href.indexOf("https://") == 0) {
		location.href = location.href.replace("https://", "http://");
	}

	var block_home_page = $('#block-home-page');
	$.ajax({
		url: 'http://b1oki.noip.me/health.php',
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
