window.onload = function () {
	const RANDOM_API = 'https://api.adviceslip.com/advice';
	const button = document.querySelector('.box button');
	button.addEventListener('click', function (event) {
		fetch(RANDOM_API)
			.then(function (res) {
				return res.json();
			})
			.then(function (json) {
				const randomAdvice = json.slip.advice;
				const advice = document.querySelector('.box p');
				advice.innerHTML = randomAdvice;
			})
			.catch(function (error) {
				return console.log('error', error);
			});
	});
};
