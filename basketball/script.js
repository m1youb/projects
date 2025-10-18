let homeEl = document.getElementById('home');
let guestEl = document.getElementById('guest');

let homePoints = 0;
let guestPoints = 0;

function incrementHome(points) {
    homePoints += points;
    homeEl.innerText = homePoints;
}

function incrementGuest(points) {
    guestPoints += points;
    guestEl.innerText = guestPoints;
}