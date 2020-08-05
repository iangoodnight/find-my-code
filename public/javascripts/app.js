function app() {
	var input = document.querySelector('input#search');
	var sku = document.querySelector('input#sku');
	input.focus();
	input.addEventListener('keydown', function(e) {
<<<<<<< HEAD
		console.log(`Value: ${input.value}`);
		if (input.value.length >= 12) {
			console.log("Outer conditional...");
			if (e.keyCode === 9 || e.keyCode === 13) {
				console.log('Hit inner conditional...');
				location.replace(`/${input.value}`);

			};
=======
		if (e.keyCode === 9 || e.keyCode === 13) {
			sku.checked ? location.replace(`/s/${input.value}`) :
				location.replace(`/${input.value}`);
>>>>>>> cs-edition
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