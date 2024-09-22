const targetDate = new Date('September 12, 2024 22:56:00').getTime();

function updateTimeCounter() {
    const now = new Date().getTime();
    const elapsedTime = now - targetDate;

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById("timeCounter").innerHTML =
        `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniyedir ailesinden ayrı.`;

    setTimeout(updateTimeCounter, 1000);
}

// Start the counter
updateTimeCounter();
