// 1. Define your array of images (with titles & real src filenames)
const images = [
  { title: 'Party Time',       src: 'images/birthday.jpg' },
  { title: 'Dressed Up',       src: 'images/clown.jpg' },
  { title: "It's Raining",     src: 'images/rain.jpg' },
  { title: 'Reading a Book',   src: 'images/read.jpg' },
  { title: 'Gardening',        src: 'images/shovel.jpg' },
  { title: 'Work from Home',   src: 'images/work.jpg' },
];

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const popup   = document.getElementById('popup');
  const pTitle  = document.getElementById('popup-title');
  const pImg    = document.getElementById('popup-img');
  const close   = document.getElementById('close');

  // 2. Build gallery cards
  images.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}">
      <div class="overlay"><h3>${item.title}</h3></div>
    `;
    // 3. Click → open popup
    card.addEventListener('click', () => {
      pTitle.textContent = item.title;
      pImg.src = item.src;
      pImg.alt = item.title;
      popup.classList.remove('hidden');
    });
    gallery.appendChild(card);
  });

  // 4. Close button
  close.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  // (Optional) click outside content to close
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.add('hidden');
  });
});
