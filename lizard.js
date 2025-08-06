function releaseLizard() {
        const lizardSound=new Audio('lizard.mp3')
        lizardSound.currentTime=0.3;
        lizardSound.play()

        const container = document.querySelector('.container');
        const lizard = document.createElement('div');
        lizard.classList.add('flying-lizard');
        lizard.textContent = '🦎';

        const screenWidth = window.innerWidth;
        const randomX = Math.random() * (screenWidth - 60);
        lizard.style.left = `${randomX}px`;

        container.appendChild(lizard);

        // Remove the emoji after the animation finishes
        setTimeout(() => {
            container.removeChild(lizard);
        }, 2000);
    }