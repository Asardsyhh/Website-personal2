// Basic Carousel Functionality (if needed for auto-scroll effect)
document.querySelectorAll('.card-container').forEach(container => {
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 150; // Adjust scroll step here
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0;
        }
        container.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth"
        });
    }, 3000); // Adjust interval for speed of auto-scroll
});
