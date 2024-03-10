// index.js
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');

    data.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      const imageElement = document.createElement('img');
      imageElement.src = product.imageUrl;
      imageElement.alt = product.description;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;

      const priceElement = document.createElement('p');
      priceElement.textContent = `Price: $${product.price}`;

      productElement.appendChild(imageElement);
      productElement.appendChild(descriptionElement);
      productElement.appendChild(priceElement);

      productList.appendChild(productElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });