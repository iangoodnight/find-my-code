function app() {
	var input = document.querySelector('input#search');
	input.focus();
	input.addEventListener('keydown', function(e) {
		console.log(`Value: ${input.value}`);
		if (input.value.length >= 12) {
			console.log("Outer conditional...");
			if (e.keyCode === 9 || e.keyCode === 13) {
				console.log('Hit inner conditional...');
				location.replace(`/${input.value}`);

			};
		};
		console.log(e.keyCode);
	});
};

document.body.addEventListener('click', function(e) {
	document.querySelector('input#search').focus();
});

document.body.addEventListener('touchstart', function(e) {
	document.querySelector('input#search').focus();
});

app();