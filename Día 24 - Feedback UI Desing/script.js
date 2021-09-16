const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

//Events listener for click
ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        // console.log(selectedRating)
    }
})
//Event click send
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thnak you!</strong>
    <br>
    <strong>Feedback : ${selectedRating}</strong>
    <p>We'll use feedback to improve our customer support</p>
    `
})

//Remove active classes

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}