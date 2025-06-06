
document.getElementById('draw-houses-btn').onclick = () => {
  const ctr = document.getElementById('houses-container');
  ctr.innerHTML = '';            // clear old
  for (let i = 0; i < 6; i++) {
    const h = document.createElement('div');
    h.className = 'house';

    const roof = document.createElement('div');
    roof.className = 'roof';

    const base = document.createElement('div');
    base.className = 'base';

    const door = document.createElement('div');
    door.className = 'door';

    base.appendChild(door);
    h.appendChild(roof);
    h.appendChild(base);
    ctr.appendChild(h);
  }

  document.getElementById('exercise-section').style.display = 'block';
};


// 2) Exercise animation 
const stretches = [
  'images/stretch1.png',
  'images/stretch2.png',
  'images/stretch3.png',
  'images/stretch4.png',
  'images/stretch5.png',
  'images/stretch6.png'
];

let idx = 0, intervalId;
document.getElementById('exercise-btn').onclick = () => {
  const img = document.getElementById('stick-figure');
  idx = 0;
  img.src = stretches[0];

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    idx++;
    if (idx >= stretches.length) {
      clearInterval(intervalId);
    } else {
      img.src = stretches[idx];
    }
  }, 1000);
};