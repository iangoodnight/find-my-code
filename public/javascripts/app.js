function app() {
	var input = document.querySelector('input#search');
	var sku = document.querySelector('input#sku');
	input.focus();
	input.addEventListener('keydown', function(e) {
		if (e.keyCode === 9 || e.keyCode === 13) {
			sku.checked ? location.replace(`/s/${input.value}`) :
				location.replace(`/${input.value}`);
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