// Your code here
let input = document.querySelector('#addToDo');
let list = document.querySelector('ul');

function addItem() {
    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = '';
}

input.addEventListener('keydown', )

