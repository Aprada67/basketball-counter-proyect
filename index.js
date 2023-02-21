let elHomeScore = document.getElementById('home-score')
let elGuestScore = document.getElementById('guest-score')
let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    elHomeScore.textContent = homeScore
}

function increseHomeScoreTwo() {
    homeScore += 2
    elHomeScore.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    elHomeScore.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore += 1
    elGuestScore.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    elGuestScore.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    elGuestScore.textContent = guestScore
}

function reset() {
    location.reload()
}