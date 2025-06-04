document.addEventListener("DOMContentLoaded", () => {
  const jsonURL = "https://raw.githubusercontent.com/adamniraula/adamniraula.github.io/main/projects/part6/beers.json";
  const beerContainer = document.getElementById("beer-container");

  // Fetch the JSON file
  fetch(jsonURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not OK (${response.status})`);
      }
      return response.json();
    })
    .then((beers) => {
      displayBeers(beers);
    })
    .catch((error) => {
      console.error("Failed to fetch beers.json:", error);
      beerContainer.innerHTML = "<p>Failed to load beer data. Please try again later.</p>";
    });

  // Function to create and append beer cards
  function displayBeers(beers) {
    beers.forEach((beer) => {

      const card = document.createElement("div");
      card.classList.add("beer-card");

      // Beer image
      const img = document.createElement("img");
      img.src = beer.img_name;           // e.g. "images/hazy-ipa.jpg"
      img.alt = `${beer.name} image`;
      card.appendChild(img);


      const h3 = document.createElement("h3");
      h3.textContent = beer.name;
      card.appendChild(h3);


      const breweryP = document.createElement("p");
      breweryP.innerHTML = `<strong>Brewery:</strong> ${beer.brewery}`;
      card.appendChild(breweryP);


      const typeP = document.createElement("p");
      typeP.innerHTML = `<strong>Type:</strong> ${beer.type}`;
      card.appendChild(typeP);

      // ABV
      const abvP = document.createElement("p");
      abvP.innerHTML = `<strong>ABV:</strong> ${beer.abv}%`;
      card.appendChild(abvP);

    
      const priceP = document.createElement("p");
      priceP.innerHTML = `<strong>Price:</strong> $${beer.price.toFixed(2)}`;
      card.appendChild(priceP);

    
      const descP = document.createElement("p");
      descP.textContent = beer.description;
      card.appendChild(descP);

      beerContainer.appendChild(card);
    });
  }

  // ====== JavaScript for Toggle Menu on Small Screens ======
  const menuToggleBtn = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

  menuToggleBtn.addEventListener("click", () => {
    mainNav.classList.toggle("closed");
    mainNav.classList.toggle("open");
  });
});
