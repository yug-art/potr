// Stars background
const starsContainer = document.querySelector('.stars');
if (starsContainer) {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`;
    starsContainer.appendChild(star);
  }
}

// Auto year
document.getElementById('year').textContent = new Date().getFullYear();

// Form demo
function sendMessage(event) {
  event.preventDefault();
  alert('Terima kasih! Pesan kamu sudah terkirim (demo).');
}

// Fade transition antar halaman
document.querySelectorAll('.nav-link, .transition-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.body.style.opacity = 0;
    setTimeout(() => { window.location = href; }, 400);
  });
});

// Twinkle animation style
const style = document.createElement('style');
style.textContent = `
@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}`;
document.head.appendChild(style);
