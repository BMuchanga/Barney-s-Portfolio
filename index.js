document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const figures = Array.from(track.children);
    const cloneCount = 2; // Number of elements to clone

    // Clone the first few elements and append them to the end
    for (let i = 0; i < cloneCount; i++) {
        const clone = figures[i].cloneNode(true);
        track.appendChild(clone);
    }

    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex++;
        const amountToMove = -currentIndex * 100;
        track.style.transform = `translateX(${amountToMove}%)`;

        // Reset the position when reaching the cloned elements
        if (currentIndex === figures.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 500);
        }
    }

    setInterval(moveToNextSlide, 5000); // Change slide every 3 seconds
});

//not yet added to webpage