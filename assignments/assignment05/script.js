// script.js

// ICE CREAM: click column to add a new bold line
const iceCol    = document.querySelector('.ice-col');
const iceArea   = document.getElementById('ice-area');
let iceCount    = 0;

iceCol.addEventListener('click', () => {
  iceCount++;
  const p = document.createElement('p');
  p.innerHTML = '<strong>I like IceCream!</strong>';
  iceArea.appendChild(p);
});

// PICK A NUMBER: slider from 1–5 shows “I want X ice creams!”
const slider = document.getElementById('num-slider');
const output = document.getElementById('num-output');

slider.addEventListener('input', () => {
  const val = slider.value;
  output.textContent = `I want ${val} ice creams!`;
});

// IMAGE CHANGE: show image, hide button
const showBtn  = document.getElementById('show-btn');
const iceImage = document.getElementById('ice-image');

showBtn.addEventListener('click', () => {
  showBtn.classList.add('hidden');
  iceImage.classList.remove('hidden');
});