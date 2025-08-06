buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        let nx = x / (rect.width / 2);
        let ny = y / (rect.height / 2);

        nx = Math.max(-0.7, Math.min(0.7, nx));
        ny = Math.max(-0.7, Math.min(0.7, ny));

        const maxTilt = 10;
        const rotateX = -ny * maxTilt;
        const rotateY = nx * maxTilt;

        btn.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'none';
    });
    });