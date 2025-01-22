function createStars(numStars) {
    const body = document.querySelector('body');
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 4 + 1;
        const xPosition = Math.random() * window.innerWidth;
        const yPosition = Math.random() * window.innerHeight;

        const xDirection = (Math.random() - 0.5) * 200 + 'px';
        const yDirection = (Math.random() - 0.5) * 200 + 'px';
        const animationDuration = Math.random() * 8 + 3;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${yPosition}px`;
        star.style.left = `${xPosition}px`;

        star.style.setProperty('--x-direction', xDirection);
        star.style.setProperty('--y-direction', yDirection);

        star.style.animationDuration = `${animationDuration}s`;

        body.appendChild(star);
    }
}

createStars(100);