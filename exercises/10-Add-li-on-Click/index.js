let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let liElement = document.createElement('li');
	liElement.innerHTML = 'Forth element';
	let newElement = document.querySelector('#myList');
	newElement.appendChild(liElement);

});
