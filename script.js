// 🔥 Dinamički dim generator
function createSmoke() {
  const wrap = document.querySelector('.smoke-wrap');
  const smoke = document.createElement('div');
  smoke.className = 'smoke';

  // random pozicija po širini ekrana
  smoke.style.left = Math.random() * 100 + "%";
  // random veličina
  const size = 10 + Math.random() * 20; // 10-30vmin
  smoke.style.width = size + "vmin";
  smoke.style.height = size + "vmin";
  // random trajanje animacije
  const duration = 10 + Math.random() * 15; // 10-25s
  smoke.style.animation = `rise ${duration}s linear forwards`;

  wrap.appendChild(smoke);

  // makni kad završi animacija da ne puni memoriju
  setTimeout(() => smoke.remove(), duration * 1000);
}

// 🚀 stvara novi oblak svake 3 sekunde
setInterval(createSmoke, 3000);
