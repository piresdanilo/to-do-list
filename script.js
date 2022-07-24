const newInput = document.querySelector('#userInput');
const button = document.querySelector('#btn');
const listToBeFilled = document.querySelector('#toFill');
const error = document.querySelector('#error')

button.addEventListener('click', () => {
    if (newInput.value == '') {
        error.innerHTML = 'Add an item!'
    } else { 
    const newItem = document.createElement('li');
    const newParagraph = document.createElement('p');
    const deleteButton = document.createElement('img');
    deleteButton.setAttribute('src', 'del.svg');
    deleteButton.classList.add('img')
    newParagraph.innerHTML = newInput.value;
    newItem.appendChild(newParagraph);
    newItem.appendChild(deleteButton);
    listToBeFilled.appendChild(newItem);
    newItem.addEventListener('click', () => {
        if (newItem.classList.contains('newInput')){
            newItem.classList.remove('newInput')
        } else {
            newItem.classList.add('newInput')
        }
    })
    deleteButton.addEventListener('click', () => {
        listToBeFilled.removeChild(newItem)
    })
    newInput.value = '';
    error.innerHTML = ''
    }
})

