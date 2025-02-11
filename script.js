        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        const container = document.querySelector('.container');
        const message = document.querySelector('.message');

        noBtn.addEventListener('mouseover', () => {
            const containerRect = container.getBoundingClientRect();
            const newX = Math.random() * (containerRect.width - noBtn.offsetWidth);
            const newY = Math.random() * (containerRect.height - noBtn.offsetHeight);
            
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
        });

        function createFlower() {
            const flower = document.createElement('div');
            flower.innerHTML = '🌸';
            flower.className = 'flower';
            flower.style.left = Math.random() * 100 + '%';
            document.body.appendChild(flower);
            
            setTimeout(() => flower.remove(), 3000);
        }

        yesBtn.addEventListener('click', () => {
            document.querySelectorAll('.btn').forEach(btn => btn.style.display = 'none');
            document.querySelector('h1').style.display = 'none';
            message.style.display = 'block';

            // Flower rain effect
            const flowerInterval = setInterval(createFlower, 100);
            setTimeout(() => clearInterval(flowerInterval), 3000);
        });
