// Your code here
let input = document.querySelector('#addToDo');
let list = document.querySelector('ul');

function addItem() {
    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    list.appendChild(newItem);
    input.value = '';
}

input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 && input.value !== '') {
        addItem();
    )};

    let trash = document.createElement('span');
    trash.classList.add('trash-icon');
    trash.textContent = "🗑️"
    trash.addEventListener("click", function() {
        list.removeChild(newItem);

        newItem.appendChild(trash);
    list.appendChild(newItem);
    newItem.value = ''
    }
});

/* Vaig molt perduda, demanar-li a l'Òscar de fer-lo junts. */


let trash = document.querySelector('span');
let task = document.querySelector('li');

/* function deleteItem() {
    trash.onclick.
} */
