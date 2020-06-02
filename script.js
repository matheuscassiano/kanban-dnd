/** help */
function log(msg){
    console.log('> ' + msg);
}

/** app */
let cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

const addModalButton = document.querySelector('.add');
const addCardlButton = document.querySelector('.addCard');

function dragstart(){
    // log('CARD: Start dragging');
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    this.classList.add('is-dragging');
}
function drag(){
    // log('CARD: Is dragging');
}
function dragend(){
    // log('CARD: Stop drag');
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}

/* place where i will drop cards */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    // log('DROPZONE: Enter in zone');
}

function dragover(){
    // log('DROPZONE: Over the zone');
    this.classList.add('over');

    // Get draggin card
    const cardBeingDragged = document.querySelector('.is-dragging');
    
    this.appendChild(cardBeingDragged)
}

function dragleave(){
    // log('DROPZONE: Leave the zone');
    this.classList.remove('over');
}

function drop(){
    // log('DROPZONE: Dropped in the zone');
}

addModalButton.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal-container');
    const exit = document.querySelector('.exit');

    modal.classList.add('show');
    exit.addEventListener('click', () => {
        modal.classList.remove('show');
    })
})

addCardlButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal-container');

    const todo = dropzones[0];
    const cardTitleInput = document.getElementById('cardTitle');
    const cardColorInput = document.getElementById('colors');
    const title = cardTitleInput.value;
    const color = cardColorInput.value;

    let card = document.createElement('div');
    let cardStatus = document.createElement('div');
    let cardTitle = document.createElement('div');

    card.classList.add('card');

    cardStatus.classList.add('status');
    cardStatus.classList.add('blue');
    cardStatus.style.background = color;

    cardTitle.classList.add('content');
    cardTitle.innerHTML = title;

    card.appendChild(cardStatus);
    card.appendChild(cardTitle);

    card.setAttribute('draggable', true);

    todo.appendChild(card)
    cards = document.querySelectorAll('.card');

    console.log(color)

    cards.forEach(card => {
        card.setAttribute('draggable', true)  
        card.addEventListener('dragstart', dragstart)
        card.addEventListener('drag', drag)
        card.addEventListener('dragend', dragend)
    })

    modal.classList.remove('show');
})