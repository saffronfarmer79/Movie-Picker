document.addEventListener('DOMContentLoaded', function () {
	
console.log("DOM content loaded.");
	const movies = [
		"It's A Wonderful Life",
		"Catch Me If You Can"
		"Pan's Labyrinth"
		"Ikuru"
		"Mishima"
		"Taxi Driver"
		"Spirited Away"
		];
	const pickButton = document.getElementById('pickButton');
	const resultElement = document.getElementbyId('result');

	pickButton.addEventListener('click', function () {
		console.log("Button clicked.");
		
		const randomIndex = Math.floor(Math.random() * movies.length);
		const randomMovie = movies[randomIndex];
		resultElement.textContent = 'You should watch: ${randomMovie}';
	});
});
	
