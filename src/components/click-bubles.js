  const container = document.getElementById('wm-container');
  const bubleImgSrc = './img/buble.jpg';

  function randomAround(radius = 30) {
    const angle = Math.random() * 2 * Math.PI;
    const r = Math.random() * radius;
    return {
      dx: Math.cos(angle) * r,
      dy: Math.sin(angle) * r
    };
  }

  function spawnBuble(x, y) {
    const wm = document.createElement('img');
    wm.src = bubleImgSrc;
    wm.className = 'buble';

    const offset = randomAround(30);
    wm.style.left = `${x + offset.dx}px`;
    wm.style.top = `${y + offset.dy}px`;

    const animOffset = randomAround(60);
    wm.style.setProperty('--dx', `${animOffset.dx}px`);
    wm.style.setProperty('--dy', `${animOffset.dy}px`);

    container.appendChild(wm);

    setTimeout(() => wm.classList.add('fade-out'), 50);
    setTimeout(() => wm.remove(), 1600);
  }

  window.addEventListener('click', (e) => {
    for (let i = 0; i < 6; i++) {
      spawnBuble(e.clientX, e.clientY);
    }
  });
