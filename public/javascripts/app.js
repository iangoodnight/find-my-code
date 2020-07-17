function app() {
	var input = document.querySelector('input#search');
	input.focus();
	input.addEventListener('keydown', function(e) {
		if (input.value >= 12) {
			if (e.keyCode === 9 || e.keyCode === 13) {
				location.replace(`/${input.value}`);
				e.stop();
			};
		};
	});
};

document.body.addEventListener('click', function(e) {
	document.querySelector('input#search').focus();
});

document.body.addEventListener('touchstart', function(e) {
	document.querySelector('input#search').focus();
});

app();