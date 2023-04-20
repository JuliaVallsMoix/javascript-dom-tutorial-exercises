let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let select = document.querySelector('#mySelect');
for (let i = 0; i < countries.length; i++) {
    let option = document.createElement('option');
    option.text = countries[i];
    select.appendChild(option);
}

select.addEventListener('change', function() {
    let selectedOption = select.options[select.selectedIndex];
    let selectedCountry = selectedOption.textContent;
    alert("You selected " + selectedCountry);
})

/* It is working because I have asked chat GPT, but there are things that are not assigned to any value so I don't understand why is working. For exmaple: selectedIndex, selectedOption, options... */
