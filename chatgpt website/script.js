function showContent(page) {
  const content = document.getElementById('content');

  if (page === 'delivery') {
      content.innerHTML = `
          <h1>Fast & Reliable Delivery at Your Doorstep</h1>
          <p class="description">
              "Experience fast, reliable delivery right to your doorstep! At CrispyCorner, we ensure your orders 
              arrive fresh, hot, and on time, so you can enjoy your crispy favorites hassle-free. 
              Savor the joy of convenience and quality with every delivery!"
          </p>
          <div class="buttons">
              <button class="call-now">Call Now</button>
              <button class="order-online">Order Online</button>
          </div>
          <div class="image">
              <img src="" alt="Delivery Mascot">
          </div>
      `;
  } else if (page === 'branches') {
      content.innerHTML = `
          <h1>Our Branches</h1>
          <p class="description">
              Visit our branches located nationwide! Find the nearest CrispyCorner branch near you and enjoy delicious meals wherever you are.
          </p>
          <div class="image">
              <img src="" alt="Branches">
          </div>
      `;
  } else if (page === 'menu') {
      content.innerHTML = `
          <h1>Our Menu</h1>
          <p class="description">
              Explore our mouth-watering menu filled with crispy chicken, burgers, sides, and refreshing drinks. Something delicious for everyone!
          </p>
          <div class="image">
              <img src="" alt="Menu">
          </div>
      `;
  } else if (page === 'promo') {
      content.innerHTML = `
          <h1>Current Promos</h1>
          <p class="description">
              Check out our latest promotions and special deals! Don't miss out on limited-time offers to save big while enjoying your favorites.
          </p>
          <div class="image">
              <img src="" alt="Promo">
          </div>
      `;
  }
}
