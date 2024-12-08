// Hiển thị ảnh toàn màn hình khi nhấp vào
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';

        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.style.maxWidth = '90%';
        fullImg.style.maxHeight = '90%';
        overlay.appendChild(fullImg);

        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
window.addEventListener('load', () => {
    const player = document.getElementById('player');
    player.play().catch(error => {
        alert('Vui lòng nhấp vào màn hình để phát nhạc!');
    });
});

document.addEventListener('click', () => {
    const player = document.getElementById('player');
    player.play().catch(error => {
        console.log('Không thể phát nhạc:', error);
    });
}, { once: true });