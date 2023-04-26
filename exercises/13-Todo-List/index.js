// Your code here

// 1. Tengo que recuperar todos los iconos de 'basura'.
// 2. A cada span de basura, le tengo que asociar un evento 
// click para que al hacer click elimine el item

document.querySelectorAll('span').forEach( x => {
    x.addEventListener('click', function (event) {

        // Borra a mi padre <li>
       // Tenemos que usar la propiedad currentTarget porque es donde hemos asociado el listener 

        event.currentTarget.parentElement.remove();
    });
});

document.querySelector('input').addEventListener('keyup', function (event) {

    // Voy a ver si el usuario le ha dado al Enter. Si es así, tengo que añadir el TODO a la lista desordenada

    if (event.code === 'Enter') {

        //1. Recuperar el valor del input

        const task = document.querySelector('#addToDo').value;

        //2. Crear un nuevo nodo <li>. Tenemos que 'rellenarlo' con la misma estructura que los otros li,  y luego,  añadirlo al <ul>

        const item = document.createElement('li');
        
        item.innerHTML = `<span><i class="fa fa-trash"></i></span> ${task}`;

        document.querySelector('ul').appendChild(item);

        item.querySelector('span').addEventListener('click', function (event) {
            event.currentTarget.parentElement.remove();
        });

        //3. Limpiar el input

        document.querySelector('#addToDo').value = ''

    }
});





/* A partir d'aquí el que vaig fer jo: */

/* let input = document.querySelector('#addToDo');
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
    });

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


/* let trash = document.querySelector('span');
let task = document.querySelector('li'); */
 
/* function deleteItem() {
    trash.onclick.
} */
