// document.addEventListener("DOMContentLoaded", function() {
// 	var input = document.querySelector('input');
// 	input.focus();
// 	input.addEventListener('keydown', function(e) {
// 		if (input.value >= 12) {
// 			if (e.keyCode === 9 || e.keyCode === 13) {
// 				location.replace(`/${input.value}`);
// 				input.focus();111280058923	
// 			};
// 		};
// 	});

// });

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

app();