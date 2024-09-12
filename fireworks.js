document.getElementById('fireworks-button').addEventListener('click', function() {
    // Fireworks effect using JS
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedY = Math.random() * 5 + 1;
            this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
        }

        update() {
            this.y -= this.speedY;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const fireworks = [];

    function createFireworks() {
        fireworks.push(new Firework());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            if (firework.y < 0) {
                fireworks.splice(index, 1);
            }
        });
        requestAnimationFrame(animate);
    }

    setInterval(createFireworks, 100);
    animate();
});
