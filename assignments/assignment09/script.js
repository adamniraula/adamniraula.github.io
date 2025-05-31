// ================= HotDog Class =================

class HotDog {
  /**
   * @param {string} name      - e.g. "Chicago Dog"
   * @param {string} imageFile - e.g. "chicagodog.png" (inside ./images/)
   * @param {string} meat      - e.g. "Beef"
   * @param {string[]} toppings - e.g. ["Pickle Spear", "Tomato", "Onions"]
   * @param {string} bun       - e.g. "Poppy Seed Bun"
   */
  constructor(name, imageFile, meat, toppings, bun) {
    this.name = name;
    this.imageFile = imageFile;
    this.meat = meat;
    this.toppings = toppings;
    this.bun = bun;
  }

  /**
   * Builds a <div class="hotdog-card"> element containing:
   *   - An <img src="images/this.imageFile"> 
   *   - A <div class="hotdog-overlay"> with the name (shown on hover)
   * When clicked, calls showModal(this).
   */
  createCardElement() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("hotdog-card");

    const img = document.createElement("img");
    img.src = `images/${this.imageFile}`;
    img.alt = this.name;

    const overlay = document.createElement("div");
    overlay.classList.add("hotdog-overlay");
    overlay.textContent = this.name;

    wrapper.addEventListener("click", () => {
      showModal(this);
    });

    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
    return wrapper;
  }
}

// ================= Modal Logic =================

function showModal(hotdog) {
  // 1) Hot Dog name
  document.getElementById("modal-title").textContent = hotdog.name;

  // 2) Image in the left half
  const modalImg = document.getElementById("modal-img");
  modalImg.src = `images/${hotdog.imageFile}`;
  modalImg.alt = hotdog.name;

  // 3) Meat, Toppings, Bun
  document.getElementById("modal-meat").textContent = hotdog.meat;
  document.getElementById("modal-toppings").textContent =
    hotdog.toppings.join(", ");
  document.getElementById("modal-bun").textContent = hotdog.bun;

  // 4) Show the W3.CSS modal (with dark backdrop)
  document.getElementById("hotdog-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("hotdog-modal").style.display = "none";
}

// Clicking outside modal content also closes it
window.onclick = function (event) {
  const modal = document.getElementById("hotdog-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ================= Initialize Gallery on Load =================

window.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("hotdog-gallery");

  // Create at least four HotDog instances (imageFile must match ./images/)
  const allHotDogs = [
    new HotDog(
      "Chicago Dog",
      "chicagodog.png",
      "Beef",
      ["Pickle Spear", "Tomatoes", "Sport Peppers", "Onions", "Mustard"],
      "Poppy Seed Bun"
    ),
    new HotDog(
      "Bacon Lover",
      "bacondog.png",
      "Beef",
      ["Crispy Bacon", "Lettuce", "Tomato", "Mayonnaise"],
      "Toasted Brioche"
    ),
    new HotDog(
      "Classic Dog",
      "classicdog.png",
      "Pork & Beef",
      ["Ketchup", "Mustard", "Relish", "Onions"],
      "Traditional Bun"
    ),
    new HotDog(
      "Pickle Dog",
      "pickledog.png",
      "Turkey",
      ["Coleslaw", "Pickle Spear", "Carrots"],
      "Pretzel Bun"
    ),
  ];

  allHotDogs.forEach((hotdog) => {
    gallery.appendChild(hotdog.createCardElement());
  });
});
