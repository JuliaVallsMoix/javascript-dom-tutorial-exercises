let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let helloWorld = document.createElement('div');
	helloWorld.innerHTML = 'Hello World';
	helloWorld.style.backgroundColor = 'yellow';

	document.body.appendChild(helloWorld);
	

	
});