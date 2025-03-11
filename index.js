document.addEventListener("DOMContentLoaded", function () {
    let homeScoreBtnOne = document.getElementById("home-score-btn-1");
    let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
    let homeScoreBtnThree = document.getElementById("home-score-btn-3");
    let homeStoreEl = document.getElementById("home-score");
    let resetBtn = document.getElementById("reset-btn");

    let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
    let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
    let guestScoreBtnThree = document.getElementById("guest-score-btn-3");
    let guestStoreEl = document.getElementById("guest-score");

    let homeScore = 0;
    let guestScore = 0;

    function increaseHomeScore(points) {
        homeScore += points;
        homeStoreEl.textContent = homeScore;
    }

    function increaseGuestScore(points) {
        guestScore += points;
        guestStoreEl.textContent = guestScore;
    }
    function resetScores() {
        homeScore = 0;
        guestScore = 0;
        homeStoreEl.textContent = homeScore;
        guestStoreEl.textContent = guestScore;
    }
    resetBtn.addEventListener("click", resetScores);
    homeScoreBtnOne.addEventListener("click", function () { increaseHomeScore(1); });
    homeScoreBtnTwo.addEventListener("click", function () { increaseHomeScore(2); });
    homeScoreBtnThree.addEventListener("click", function () { increaseHomeScore(3); });

    guestScoreBtnOne.addEventListener("click", function () { increaseGuestScore(1); });
    guestScoreBtnTwo.addEventListener("click", function () { increaseGuestScore(2); });
    guestScoreBtnThree.addEventListener("click", function () { increaseGuestScore(3); });
});
