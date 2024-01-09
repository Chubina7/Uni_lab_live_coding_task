// Variables
const seeMore = document.querySelectorAll('.see-more')
const popupOverlay = document.getElementById('popupOverlay')
const popupCloserBtn = document.getElementById('popupCloserBtn')
const popupCard = document.getElementById('popupCard')

const timer = document.querySelector('.timer')
const price = document.querySelector('.price')

// Popup open-close
seeMore.forEach(seeMore => {
    seeMore.addEventListener('click', () => {
        popupCard.style.display = "flex"
        popupOverlay.style.display = "flex"
    })
});
popupOverlay.addEventListener('click', () => {
    popupOverlay.style.display = "none"
    popupCard.style.display = "none"
})
popupCloserBtn.addEventListener('click', () => {
    popupOverlay.style.display = "none"
    popupCard.style.display = "none"
})

// Timer

let currentTime = 20;

let deadlline = setInterval(function deadline() {
    timer.innerHTML = `Sale End in: ${currentTime} seconds`
    currentTime--;

    if (currentTime == 0) {
        clearInterval(deadlline)
        timer.innerHTML = 'Unavaliable'
        price.style.display = 'none'
    }
}, 1000);