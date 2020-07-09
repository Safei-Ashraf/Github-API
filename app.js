console.log('script attached')

// //Define Main Dom Elements on Page:
let inputField = document.querySelector('input');
let getBtn = document.querySelector('button.btn-get');
let displayDiv = document.querySelector('div.data-display')
let warning = document.createElement('p');
    warning.textContent =`Please Add A Valid "User Name" In Order To Get A "USER" Data!`;


getBtn.addEventListener('click', ()=>{
    getData();
})


//Main Functions:
function getData(){

    if (inputField.value = '') {
        displayDiv.prepend(warning);

    } else 
    {
        fetch('https://api.github.com/users/safei-ashraf')
        .then(res => res.json())
        .then(data => console.log(data));
        //Empty Display div:
        displayDiv.innerHTML = '';

    }
}
function displayData(){

}