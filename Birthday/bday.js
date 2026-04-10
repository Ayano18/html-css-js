function openInvitation() {
    const splash = document.getElementById('splash-screen');
    const main = document.getElementById('main-content');
    
    // Slide-up transition
    splash.classList.add('hide-splash');
    main.classList.remove('hidden');
    
    // Enable scrolling
    document.body.style.overflowY = "auto";
    
    // Initialize Animate on Scroll
    setTimeout(() => {
        AOS.init({ 
            duration: 1200, 
            once: true,
            offset: 50,
            easing: 'ease-out-back'
        });
    }, 200);
}

// Countdown Target: April 19, 2026 at 3:00 PM Afternoon
const targetDate = new Date("April 19, 2026 15:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // If the count down is finished
    if (difference < 0) {
        clearInterval(countdown);
        const timerBlock = document.getElementById("countdown");
        if (timerBlock) {
            timerBlock.innerHTML = "<h2 class='silver-text text-2xl font-bold'>The celebration has started!</h2>";
        }
        return;
    }

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in the corresponding elements
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}, 1000);

// Lock scrolling initially
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflowY = "hidden";
});