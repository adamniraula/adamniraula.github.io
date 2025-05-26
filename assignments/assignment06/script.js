// — Tabs Toggle —
const tabSpeed = document.getElementById('tab-speed');
const tabArt   = document.getElementById('tab-art');
const secSpeed = document.getElementById('speeding');
const secArt   = document.getElementById('art');

tabSpeed.addEventListener('click', () => {
  secSpeed.classList.add('active');
  secArt  .classList.remove('active');
});
tabArt.addEventListener('click', () => {
  secArt  .classList.add('active');
  secSpeed.classList.remove('active');
});

// — Exercise 1: Bike Animation —
const slider = document.getElementById('speed-slider');
const btnGo   = document.getElementById('btn-go');
const btnStop = document.getElementById('btn-stop');
const bike    = document.getElementById('bike');
let anim;

btnGo.addEventListener('click', () => {
  clearInterval(anim);
  const speed = parseInt(slider.value, 10);
  anim = setInterval(() => {
    let left = bike.offsetLeft + speed;
    if (left > window.innerWidth) left = -100;
    bike.style.left = `${left}px`;
  }, 100);
});

btnStop.addEventListener('click', () => {
  clearInterval(anim);
});

// — Exercise 2: CSS Art Drawer —
const artBtns = document.querySelectorAll('.art-btn');
const artArea = document.getElementById('art-area');

artBtns.forEach(btn =>
  btn.addEventListener('click', e => {
    artArea.innerHTML = '';
    const shape = e.target.dataset.shape;
    const el    = document.createElement('div');
    el.classList.add(shape);
    artArea.appendChild(el);
  })
);
