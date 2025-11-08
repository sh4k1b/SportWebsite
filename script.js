document.addEventListener('DOMContentLoaded', function() {

    // Countdown Timer
    const countdownElement = document.getElementById("countdown");
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (countdownElement && daysEl && hoursEl && minutesEl && secondsEl) {
        const countdownDate = new Date("October 5, 2025 00:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = days.toString().padStart(2, '0');
            hoursEl.textContent = hours.toString().padStart(2, '0');
            minutesEl.textContent = minutes.toString().padStart(2, '0');
            secondsEl.textContent = seconds.toString().padStart(2, '0');

            if (distance < 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = "<h2>The Cricket World Cup has started!</h2>";
            }
        }

        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Slideshow functionality
    const slides = document.getElementsByClassName("slide-fade");
    const dots = document.getElementsByClassName("dot");

    if (slides.length && dots.length) {
        let slideIndex = 1;

        function showSlides(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
            for (let i = 0; i < dots.length; i++) dots[i].classList.remove("active");

            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].classList.add("active");
        }

        showSlides(slideIndex);

        window.plusSlides = function(n) { showSlides(slideIndex += n); }
        window.currentSlide = function(n) { showSlides(slideIndex = n); }
    }

    // Ticket purchase alert
    const ticketForm = document.querySelector('.ticket-form');
    if (ticketForm) {
        ticketForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const match = document.getElementById('match').value;
            const quantity = document.getElementById('quantity').value;

            alert(`Thank you, ${name}! You have successfully purchased ${quantity} ticket(s) for ${match}.`);

            ticketForm.reset();
        });
    }
});
